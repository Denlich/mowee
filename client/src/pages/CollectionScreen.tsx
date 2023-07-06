import React from "react";
import { NavigationProp, RouteProp } from "@react-navigation/native";

import Screen from "../components/UI/Screen";
import SavedMovie from "../entities/SavedMovie";
import Paragraph from "../components/UI/Paragraph";
import CardItem from "../components/CardItem";

interface CollectionProps {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
}

const CollectionScreen = ({ route, navigation }: CollectionProps) => {
  const { movies } = route.params!;

  if (!movies) {
    return null;
  }

  if (movies.length === 0) {
    return <Paragraph>No movies yet</Paragraph>;
  }

  return (
    <Screen>
      {movies.map((movie: SavedMovie) =>
        // <CardItem isSaved={true} item={movie} navigation={navigation} />
        console.log(movie)
      )}
    </Screen>
  );
};

export default CollectionScreen;
