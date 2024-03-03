import { PostModel } from "@/models/postModels";
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { Text } from "@/components/Themed";
import { StyleSheet } from "react-native";

interface PostBoxStyles {
  container?: StyleProp<ViewStyle>;
  title?: StyleProp<TextStyle>;
  body?: StyleProp<TextStyle>;
}

export interface PostBoxProps {
  post: PostModel;
  style?: PostBoxStyles;
}

const PostBox: React.FC<PostBoxProps> = ({ post, style }) => {
  return (
    <View style={[styles.container, style?.container]}>
      <Text style={[styles.title, style?.title]}>{post.title}</Text>
      <Text style={[styles.body, style?.body]}>{post.body}</Text>
    </View>
  );
};

export default PostBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  body: {
    color: "white",
  },
});
