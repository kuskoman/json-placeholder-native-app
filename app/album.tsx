import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { AlbumModel } from "@/models/albumModels";
import { PhotoModel } from "@/models/photoModels";
import { AlbumsService } from "@/services/albumsService";
import { PhotosService } from "@/services/photosService";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/routes";
import { Album } from "@/components/Photos/Album";
import { PhotoItem } from "@/components/Photos/Photo";

export interface AlbumScreenProps {
  route: RouteProp<RootStackParamList, "album">;
}

const AlbumScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, "album">>();
  const albumId = route.params.albumId;
  const [album, setAlbum] = useState<AlbumModel | null>(null);
  const [photos, setPhotos] = useState<PhotoModel[]>([]);

  const albumsService = new AlbumsService();
  const photosService = new PhotosService();

  const fetchAlbum = async () => {
    const newAlbum = await albumsService.getAlbum(albumId);
    setAlbum(newAlbum);
  };

  const fetchPhotos = async () => {
    const newPhotos = await photosService.getPhotosByAlbumId(albumId);
    setPhotos(newPhotos);
  };

  useEffect(() => {
    fetchAlbum();
    fetchPhotos();
  }, [albumId]);

  return (
    <View style={styles.container}>
      {album && <Album album={album} />}
      <FlatList
        data={photos}
        renderItem={({ item }) => <PhotoItem photo={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </View>
  );
};

export default AlbumScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContentContainer: {
    flexGrow: 1,
  },
});
