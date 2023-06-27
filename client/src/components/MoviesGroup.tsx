import React from "react";
import { View } from "react-native";
import CategoryBox from "./CategoryBox";

const MoviesGroup = () => {
  return (
    <View>
      <CategoryBox icon="time-outline" name="Recently watched" />
      <CategoryBox
        icon="bookmark-outline"
        name="Saved movies"
        styles={{ marginVertical: 20 }}
      />
      <CategoryBox icon="star-outline" name="Rated movies" />
    </View>
  );
};

export default MoviesGroup;
