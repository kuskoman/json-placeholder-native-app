import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AlbumModel } from "@/models/albumModels";
import { RootStackParamList } from "@/routes";

interface AlbumItemProps {
  album: AlbumModel;
  navigation?: NavigationProp<RootStackParamList>;
}

export const Album: React.FC<AlbumItemProps> = ({ album, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation?.navigate("album", { albumId: album.id })}
    >
      <Text style={styles.title}>{album.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#555",
    padding: 16,
    marginVertical: 8,
    elevation: 3,
    shadowColor: "#777",
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  link: {
    marginTop: 8,
    color: "#007BFF",
    fontWeight: "bold",
  },
});
