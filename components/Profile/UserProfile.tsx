import { UserModel } from "@/models/userModels";
import { ExternalLink } from "../ExternalLink";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@/components/Themed";

export interface UserProfileProps {
  user: UserModel;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
      <Text>{user.phone}</Text>
      <ExternalLink href={`https:${user.website}`} style={styles.link} />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginVertical: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    marginTop: 8,
    color: "#007BFF",
    fontWeight: "bold",
  },
});
