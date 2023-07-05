import React from "react";
import { FlatList, View, Dimensions } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import useSavedMoviesStore from "../stores/saved-movies-store";
import { useQueryClient } from "@tanstack/react-query";

import Movie from "../entities/Movie";
import CardItem from "./CardItem";
import useSaved from "../hooks/useSaved";

const height = Dimensions.get("window").height * 0.6;

interface Props {
  movies: Movie[];
  navigation: NavigationProp<any>;
}

const index = ({ movies, navigation }: Props) => {
  const { data, isLoading, refetch } = useSaved();
  const setSavedMovies = useSavedMoviesStore((m) => m.setSavedMovies);
  const queryClient = useQueryClient();
  const saved = useSavedMoviesStore().savedMovies;

  const isMovieSaved = (imdbID: string): boolean =>
    saved.some((value) => value.imdbID === imdbID);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      refetch();
    });
    return unsubscribe;
  }, [navigation, refetch]);

  React.useEffect(() => {
    if (data) {
      setSavedMovies(data);
      queryClient.setQueryData(["movies"], data);
    }
  }, [data, setSavedMovies, queryClient]);

  if (isLoading) {
    return null;
  }

  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <View style={{ height: height }}>
          <CardItem
            item={item}
            navigation={navigation}
            isSaved={isMovieSaved(item.imdbID)}
          />
        </View>
      )}
      keyExtractor={(item) => item.imdbID}
      contentContainerStyle={{
        paddingHorizontal: 40,
      }}
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}
      bounces={false}
      overScrollMode="never"
    />
  );
};

export default index;
