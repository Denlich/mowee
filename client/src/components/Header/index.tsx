import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import Logo from "./Logo";

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Icon name="search" size={24} color="#000" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
});

export default index;
