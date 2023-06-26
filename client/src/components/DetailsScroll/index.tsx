import React from "react";
import { ScrollView, Image, View, Dimensions } from "react-native";

import Movie from "../../entities/Movie";
import Heading from "../UI/Heading";
import Genres from "./Genres";
import Paragraph from "../UI/Paragraph";

const height = Dimensions.get("window").height;

interface Props {
  movie: Movie;
}

const index = ({ movie }: Props) => {
  if (!movie) {
    return null;
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

  return (
    <ScrollView>
      <Image
        source={{ uri: movie?.Poster }}
        style={{ width: "100%", height: height * 0.7 }}
      />
      <View style={{ padding: 40 }}>
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
      </View>
    </ScrollView>
  );
};

export default index;
