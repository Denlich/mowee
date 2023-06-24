import React from "react";
import { FlatList, View } from "react-native";

import Movie from "../entities/Movie";
import CardItem from "./CardItem";

interface Props {
  movies: Movie[];
}

const index = ({ movies }: Props) => {
  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => <CardItem item={item} />}
      keyExtractor={(item) => item.imdbID}
      contentContainerStyle={{
        paddingHorizontal: 40,
      }}
    />
  );
};

export default index;
