import React from "react";
import { FlatList } from "react-native";
import { NavigationProp } from "@react-navigation/native";

import Movie from "../entities/Movie";
import CardItem from "./CardItem";

interface Props {
  movies: Movie[];
  navigation: NavigationProp<any>;
}

const index = ({ movies, navigation }: Props) => {
  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <CardItem item={item} navigation={navigation} />
      )}
      keyExtractor={(item) => item.imdbID}
      contentContainerStyle={{
        paddingHorizontal: 40,
      }}
    />
  );
};

export default index;
