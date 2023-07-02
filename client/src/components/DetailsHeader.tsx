import React from "react";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

import Screen from "./UI/Screen";
import BackButton from "./UI/BackButton";
import SaveButton from "./UI/SaveButton";

interface Props {
  navigation: NavigationProp<any>;
  imdbID: string;
  Poster: string;
  isSaved: boolean;
}

const DetailsHeader = ({ navigation, imdbID, Poster, isSaved }: Props) => {
  return (
    <Screen styles={{ position: "absolute", zIndex: 999 }}>
      <View style={styles.container}>
        <BackButton color="white" onPress={() => navigation.goBack()} />
        <SaveButton imdbID={imdbID} Poster={Poster} isSaved={isSaved} />
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
  },
});

export default DetailsHeader;
