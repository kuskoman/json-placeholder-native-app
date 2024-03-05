import PostBox from "@/components/Posts/PostBox";
import { CommentModel } from "@/models/commentModels";
import { PostModel } from "@/models/postModels";
import { CommentsService } from "@/services/commentsService";
import { PostsService } from "@/services/postsService";
import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { StyleSheet } from "react-native";
import Comment from "@/components/Posts/Comment";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/routes";

export interface PostScreenProps {
  route: RouteProp<RootStackParamList, "post">;
}

const PostScreen = () => {
  console.log("Props");
  const route = useRoute<RouteProp<RootStackParamList, "post">>();
  const postId = route.params.postId;
  const [post, setPost] = useState<PostModel | null>(null);
  const [comments, setComments] = useState<CommentModel[]>([]);

  const postsService = new PostsService();
  const commentsService = new CommentsService();

  const fetchPost = async () => {
    const newPost = await postsService.getPost(postId);
    setPost(newPost);
  };

  const fetchComments = async () => {
    const newComments = await commentsService.getCommentsByPostId(postId);
    setComments(newComments);
  };

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [postId]);

  return (
    <View style={styles.container}>
      {post && <PostBox post={post} />}
      <FlatList
        data={comments}
        renderItem={({ item }) => <Comment comment={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </View>
  );
};
export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContentContainer: {
    flexGrow: 1,
  },
});
