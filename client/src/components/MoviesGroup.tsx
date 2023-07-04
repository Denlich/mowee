import React from "react";
import { View } from "react-native";
import CollectionBox from "./CollectionBox";

const MoviesGroup = () => {
  return (
    <View>
      <CollectionBox icon="time-outline" name="Recently watched" />
      <CollectionBox
        icon="bookmark-outline"
        name="Saved movies"
        styles={{ marginVertical: 20 }}
      />
      <CollectionBox icon="star-outline" name="Rated movies" />
    </View>
  );
};

export default MoviesGroup;
