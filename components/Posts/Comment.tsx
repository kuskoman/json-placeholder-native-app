import { CommentModel } from "@/models/commentModels";
import {
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
  StyleSheet,
} from "react-native";
import { Text } from "@/components/Themed";

interface CommentStyles {
  container?: StyleProp<ViewStyle>;
  name?: StyleProp<TextStyle>;
  email?: StyleProp<TextStyle>;
  body?: StyleProp<TextStyle>;
}

export interface CommentProps {
  comment: CommentModel;
  styles?: CommentStyles;
}

const Comment: React.FC<CommentProps> = ({ comment, styles }) => {
  return (
    <View style={[style.container, styles?.container]}>
      <Text style={[style.name, styles?.name]}>{comment.name}</Text>
      <Text style={[style.email, styles?.email]}>{comment.email}</Text>
      <Text style={[style.body, styles?.body]}>{comment.body}</Text>
    </View>
  );
};

export default Comment;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#444",
    padding: 20,
    marginTop: 5,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 4,
  },
  name: {
    fontWeight: "bold",
    color: "#1976d2",
  },
  email: {
    color: "#777",
  },
  body: {
    backgroundColor: "#555",
    padding: 20,
    borderRadius: 4,
    marginLeft: 20,
  },
});
