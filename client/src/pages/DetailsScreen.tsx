import React from "react";
import { Animated, Dimensions, View } from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";

import DetailsScroll from "../components/DetailsScroll";
import useMovie from "../hooks/useMovie";

const height = Dimensions.get("window").height;

interface Props {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
}

const DetailsScreen = ({ route, navigation }: Props) => {
  const movie = useMovie(route.params!.imdbID);

  const scrollY = React.useRef(new Animated.Value(0)).current;

  if (movie.isLoading) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <DetailsScroll
        movie={movie.data!}
        scrollY={scrollY}
        height={height}
        route={route}
        navigation={navigation}
      />
    </View>
  );
};

export default DetailsScreen;
