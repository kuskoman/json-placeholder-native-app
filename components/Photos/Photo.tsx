import { PhotoModel } from "@/models/photoModels";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface PhotoProps {
  photo: PhotoModel;
}

export const PhotoItem: React.FC<PhotoProps> = ({ photo }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{photo.title}</Text>
      <Image source={{ uri: photo.thumbnailUrl }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#444",
    padding: 16,
    marginVertical: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    width: "30%",
  },
  title: {
    marginBottom: 8,
    fontWeight: "bold",
  },
  image: {
    height: 150,
    width: "100%",
    resizeMode: "cover",
  },
});
