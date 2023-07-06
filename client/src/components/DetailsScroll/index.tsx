import React from "react";
import { Animated } from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";

import Movie from "../../entities/Movie";
import ImageContainer from "./ImageContainer";
import DetailsContainer from "./DetailsContainer";

interface Props {
  movie: Movie;
  scrollY: Animated.Value;
  height: number;
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
}

const index = ({ movie, scrollY, height, route, navigation }: Props) => {
  if (!movie) {
    return null;
  }

  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      bouncesZoom={false}
      nestedScrollEnabled
      overScrollMode="never"
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
    >
      <ImageContainer
        movie={movie}
        navigation={navigation}
        route={route}
        height={height}
        scrollY={scrollY}
      />
      <DetailsContainer movie={movie} scrollY={scrollY} />
    </Animated.ScrollView>
  );
};

export default index;
