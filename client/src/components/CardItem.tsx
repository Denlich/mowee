import React from "react";
import {
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";

import Movie from "../entities/Movie";

const height = Dimensions.get("window").height;

interface Props {
  item: Movie;
}

const CardItem = ({ item }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View style={styles.card}>
        <Image
          source={{ uri: item.Poster }}
          resizeMode="cover"
          style={{ flex: 1 }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: "100%",
    height: height * 0.6,
    borderRadius: 25,
    overflow: "hidden",
    marginBottom: 20,
  },
});

export default CardItem;
