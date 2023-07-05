import React from "react";
import { View } from "react-native";
import { NavigationProp } from "@react-navigation/native";

import CollectionBox from "./CollectionBox";
import useSavedMoviesStore from "../stores/saved-movies-store";

interface Props {
  navigation: NavigationProp<any>;
}

const MoviesGroup = ({ navigation }: Props) => {
  return (
    <View>
      <CollectionBox
        icon="time-outline"
        name="Recently watched"
        amount={0}
        handleClick={() => {}}
      />
      <CollectionBox
        icon="bookmark-outline"
        name="Saved movies"
        styles={{ marginVertical: 20 }}
        amount={useSavedMoviesStore().savedMovies.length}
        handleClick={() => navigation.navigate("Saved")}
      />
      <CollectionBox
        icon="star-outline"
        name="Rated movies"
        amount={0}
        handleClick={() => {}}
      />
    </View>
  );
};

export default MoviesGroup;
