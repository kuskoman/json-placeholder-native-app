import { AlbumModel } from "@/models/albumModels";
import { RootStackParamList } from "@/routes";
import { AlbumsService } from "@/services/albumsService";
import { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { Text } from "@/components/Themed";
import { StyleSheet } from "react-native";
import { Album } from "@/components/Photos/Album";

const AlbumsScreen: React.FC = () => {
  const [albums, setAlbums] = useState<AlbumModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [page, setPage] = useState(1);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const albumsService = new AlbumsService();

  const fetchAlbums = async (pageNum: number) => {
    if (!isFetchingMore) setLoading(true);
    const newAlbums = await albumsService.getAlbums(pageNum);
    const joinedAlbums = albums.concat(newAlbums);
    const uniqueAlbums = joinedAlbums.filter(
      (album, index, self) =>
        index === self.findIndex((t) => t.key === album.key)
    );
    setAlbums(uniqueAlbums);
    setLoading(false);
    setIsFetchingMore(false);
  };

  useEffect(() => {
    fetchAlbums(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    setIsFetchingMore(true);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={albums}
        renderItem={({ item }) => (
          <Album album={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.key}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingMore ? <ActivityIndicator size="large" /> : null
        }
        ListEmptyComponent={!loading ? <Text>No albums available.</Text> : null}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </View>
  );
};

export default AlbumsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    flex: 1,
  },
  flatListContentContainer: {
    flexGrow: 1,
  },
});
