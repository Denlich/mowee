import React from "react";
import { Animated, Dimensions } from "react-native";

import Heading from "../UI/Heading";
import Genres from "./Genres";
import Paragraph from "../UI/Paragraph";
import Movie from "../../entities/Movie";

const height = Dimensions.get("window").height;

interface Props {
  movie: Movie;
  scrollY: Animated.Value;
}

const excludedKeys = [
  "Title",
  "Genre",
  "Plot",
  "Poster",
  "Runtime",
  "imdbID",
  "Ratings",
];

const DetailsContainer = ({ movie, scrollY }: Props) => {
  return (
    <Animated.View
      style={{
        padding: 40,
        zIndex: 9,
        overflow: "hidden",
        backgroundColor: "#fff",
        borderRadius: 40,
        transform: [
          {
            translateY: scrollY.interpolate({
              inputRange: [0, 100],
              outputRange: [-50, 20],
            }),
          },
        ],
      }}
    >
      <Animated.View
        style={{
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [0, 60],
                outputRange: [0, -40],
              }),
            },
          ],
        }}
      >
        <Heading>{movie?.Title!}</Heading>
        <Genres genre={movie?.Genre!} />
        <Paragraph color="grey">Runtime: {movie?.Runtime!}</Paragraph>
        <Paragraph styles={{ marginVertical: 40 }}>{movie?.Plot!}</Paragraph>
        {Object.entries(movie).map(([key, value]) => {
          if (!excludedKeys.includes(key)) {
            return (
              <Paragraph color="grey" styles={{ marginBottom: 10 }} key={key}>
                {`${key}: ${value}`}
              </Paragraph>
            );
          }
          return null;
        })}
      </Animated.View>
    </Animated.View>
  );
};

export default DetailsContainer;
