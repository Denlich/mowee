import React from "react";
import { Image, View, StyleSheet } from "react-native";

import Heading from "../UI/Heading";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.image}
      />
      <Heading>Mowee</Heading>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 26,
    height: 26,
    marginRight: 10,
  },
});

export default Logo;
