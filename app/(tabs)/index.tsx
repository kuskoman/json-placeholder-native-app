import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator, View } from "react-native";
import { PostModel } from "@/models/postModels";
import { PostsService } from "@/services/postsService";
import PostBox from "@/components/Posts/PostBox";
import { Text } from "@/components/Themed";
import { StyleSheet } from "react-native";
import { RootStackParamList } from "@/routes";
import { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "expo-router";

const PostsScreen: React.FC = () => {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [page, setPage] = useState(1);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const postsService = new PostsService();

  const fetchPosts = async (pageNum: number) => {
    if (!isFetchingMore) setLoading(true); // Show loading only on initial load
    const newPosts = await postsService.getPosts(pageNum);
    const joinedPosts = posts.concat(newPosts);
    const uniquePosts = joinedPosts.filter(
      (post, index, self) => index === self.findIndex((t) => t.key === post.key)
    );
    setPosts(uniquePosts);
    setLoading(false);
    setIsFetchingMore(false);
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    setIsFetchingMore(true);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <PostBox post={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.key}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingMore ? <ActivityIndicator size="large" /> : null
        }
        ListEmptyComponent={!loading ? <Text>No posts available.</Text> : null}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContentContainer: {
    padding: 10,
  },
  activityIndicator: {
    marginVertical: 20,
  },
  noPostsText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#666",
  },
});

export default PostsScreen;
