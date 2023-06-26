import React from "react";
import {
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";

import Movie from "../entities/Movie";

const height = Dimensions.get("window").height;

interface Props {
  item: Movie;
  navigation: NavigationProp<any>;
}

const CardItem = ({ item, navigation }: Props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("DetailsScreen", item.imdbID)}
    >
      <View style={styles.card}>
        {item.Poster ? (
          <Image
            source={{ uri: item.Poster }}
            resizeMode="cover"
            style={{ flex: 1 }}
          />
        ) : null}
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
