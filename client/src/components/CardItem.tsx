import React from "react";
import {
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";

import Movie from "../entities/Movie";
import SaveButton from "./UI/SaveButton";

interface Props {
  item: Movie;
  navigation: NavigationProp<any>;
  isSaved: boolean;
}

const CardItem = ({ item, navigation, isSaved }: Props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("DetailsScreen", { imdbID: item.imdbID, isSaved })
      }
    >
      <View style={styles.card}>
        {item.Poster ? (
          <Image
            source={{ uri: item.Poster }}
            resizeMode="cover"
            style={{ flex: 1 }}
          />
        ) : null}
        <View style={styles.overlay}>
          <SaveButton
            imdbID={item.imdbID}
            Poster={item.Poster}
            isSaved={isSaved}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 25,
    overflow: "hidden",
    marginBottom: 20,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, .2)",
  },
});

export default CardItem;
