import React from "react";
import {
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";

import SaveButton from "./UI/SaveButton";
import SavedMovie from "../entities/SavedMovie";

interface Props {
  item: SavedMovie;
  navigation: NavigationProp<any>;
  isSaved: boolean;
  searchCard?: boolean;
}

const CardItem = ({ item, navigation, isSaved, searchCard = true }: Props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("DetailsScreen", { imdbID: item.imdbID, isSaved })
      }
    >
      <View style={[styles.card, searchCard ? styles.search : styles.saved]}>
        {item.Poster ? (
          <Image
            source={{ uri: item.Poster }}
            resizeMode="cover"
            style={{ flex: 1 }}
          />
        ) : null}
        <View
          style={[
            styles.overlay,
            searchCard ? { padding: 20 } : { padding: 5 },
          ]}
        >
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
    overflow: "hidden",
  },
  search: {
    borderRadius: 25,
    marginBottom: 20,
  },
  saved: {
    borderRadius: 10,
    marginBottom: 5,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    backgroundColor: "rgba(0, 0, 0, .2)",
  },
});

export default CardItem;
