import { PostModel } from "@/models/postModels";
import { Pressable, StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { Text } from "@/components/Themed";
import { StyleSheet } from "react-native";
import { useNavigation } from "expo-router";
import { RootStackParamList } from "@/routes";
import { NavigationProp } from "@react-navigation/native";

interface PostBoxStyles {
  container?: StyleProp<ViewStyle>;
  title?: StyleProp<TextStyle>;
  body?: StyleProp<TextStyle>;
}

export interface PostBoxProps {
  post: PostModel;
  navigation?: NavigationProp<RootStackParamList>;
  style?: PostBoxStyles;
}

const PostBox: React.FC<PostBoxProps> = ({ post, style, navigation }) => {
  const navigateToPost = () => {
    navigation?.navigate("post", {
      postId: post.id,
    });
  };

  return (
    <Pressable onPress={navigateToPost}>
      <View style={[styles.container, style?.container]}>
        <Text style={[styles.title, style?.title]}>{post.title}</Text>
        <Text style={[styles.body, style?.body]}>{post.body}</Text>
      </View>
    </Pressable>
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
