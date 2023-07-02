import React from "react";
import { FlatList } from "react-native";
import { NavigationProp } from "@react-navigation/native";

import Movie from "../entities/Movie";
import CardItem from "./CardItem";
import useGetSaved from "../hooks/useGetSaved";

interface Props {
  movies: Movie[];
  navigation: NavigationProp<any>;
}

const index = ({ movies, navigation }: Props) => {
  const savedMovies = useGetSaved();
  const isMovieSaved = (imdbID: string): boolean =>
    savedMovies.data.some((savedMovie: Movie) => savedMovie.imdbID === imdbID);

  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <CardItem
          item={item}
          navigation={navigation}
          isSaved={isMovieSaved(item.imdbID)}
        />
      )}
      keyExtractor={(item) => item.imdbID}
      contentContainerStyle={{
        paddingHorizontal: 40,
      }}
    />
  );
};

export default index;
