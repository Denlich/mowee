import React from "react";
import { View } from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";

import DetailsHeader from "../components/DetailsHeader";
import DetailsScroll from "../components/DetailsScroll";
import useMovie from "../hooks/useMovie";

interface Props {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
}

const DetailsScreen = ({ route, navigation }: Props) => {
  const movie = useMovie(route.params!.imdbID);

  return (
    <View style={{ flex: 1 }}>
      <DetailsHeader
        navigation={navigation}
        imdbID={movie.data?.imdbID!}
        Poster={movie.data?.Poster!}
        isSaved={route.params!.isSaved}
      />
      <DetailsScroll movie={movie.data!} />
    </View>
  );
};

export default DetailsScreen;
