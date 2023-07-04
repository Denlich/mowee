import React from "react";
import { FlatList, View, Dimensions } from "react-native";
import { NavigationProp } from "@react-navigation/native";

import Movie from "../entities/Movie";
import CardItem from "./CardItem";
import useSaved from "../hooks/useSaved";
import SavedMovie from "../entities/SavedMovie";

const height = Dimensions.get("window").height * 0.6;

interface Props {
  movies: Movie[];
  navigation: NavigationProp<any>;
}

const index = ({ movies, navigation }: Props) => {
  const savedMovies = useSaved();
  const isMovieSaved = (imdbID: string): boolean =>
    savedMovies.data!.some((value) => value.imdbID === imdbID);

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
