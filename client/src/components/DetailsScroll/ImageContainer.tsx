import React from "react";
import { Animated, Image, View } from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";

import DetailsHeader from "../DetailsHeader";
import Movie from "../../entities/Movie";

interface Props {
  movie: Movie;
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
  height: number;
  scrollY: Animated.Value;
}

const ImageContainer = ({
  movie,
  navigation,
  route,
  height,
  scrollY,
}: Props) => {
  return (
    <Animated.View
      style={{
        width: "100%",
        height: height * 0.7,
        zIndex: 2,
        transform: [
          {
            translateY: scrollY.interpolate({
              inputRange: [0, 20],
              outputRange: [0, 20],
            }),
          },
        ],
      }}
    >
      <DetailsHeader
        navigation={navigation}
        movie={movie}
        isSaved={route.params!.isSaved}
        scrollY={scrollY}
      />
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.15)",
          zIndex: 2,
        }}
      />
      <Image
        source={{ uri: movie?.Poster }}
        style={{ width: "100%", height: "100%" }}
      />
    </Animated.View>
  );
};

export default ImageContainer;
