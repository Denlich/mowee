import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { Animated, StyleSheet, View } from "react-native";

import Screen from "./UI/Screen";
import BackButton from "./UI/BackButton";
import SaveButton from "./UI/SaveButton";
import Heading from "./UI/Heading";
import Movie from "../entities/Movie";
import Paragraph from "./UI/Paragraph";

interface Props {
  navigation: NavigationProp<any>;
  movie: Movie;
  isSaved: boolean;
  scrollY: Animated.Value;
}

const DetailsHeader = ({ navigation, movie, isSaved, scrollY }: Props) => {
  return (
    <Screen styles={{ position: "absolute", zIndex: 3 }}>
      <View style={styles.container}>
        <BackButton color="white" onPress={() => navigation.goBack()} />
        <Animated.View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: scrollY.interpolate({
              inputRange: [0, 400],
              outputRange: [0, 1],
            }),
          }}
        >
          <Heading color="white" style={{ textAlign: "center" }}>
            {movie.Title}
          </Heading>
          <Paragraph color="white" styles={{ marginTop: 10 }}>
            Runtime: {movie.Runtime!}
          </Paragraph>
        </Animated.View>
        <SaveButton
          imdbID={movie.imdbID}
          Poster={movie.Poster}
          isSaved={isSaved}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default DetailsHeader;
