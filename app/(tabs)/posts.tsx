import { CommentModel } from "@/models/commentModels";
import { PostModel } from "@/models/postModels";
import { PostsService } from "@/services/postsService";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { Text } from "@/components/Themed";
import PostBox from "@/components/Posts/PostBox";

const PostsScreen: React.FC = () => {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [comments, setComments] = useState<CommentModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const postsService = new PostsService();

  const fetchPosts = async () => {
    const posts = await postsService.getPosts(page);
    console.log(posts);
    setPosts(posts);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchPosts();
  }, [page]);

  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        posts.map((post) => <PostBox post={post}></PostBox>)
      )}
    </View>
  );
};

export default PostsScreen;
