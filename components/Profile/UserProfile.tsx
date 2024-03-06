import { UserModel } from "@/models/userModels";
import { ExternalLink } from "../ExternalLink";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@/components/Themed";
import { profileStyles } from "./profileStyles";

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

const styles = StyleSheet.create({ ...profileStyles, link: { color: "blue" } });
