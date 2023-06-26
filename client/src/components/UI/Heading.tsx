import React from "react";
import { Text, StyleSheet } from "react-native";

interface Props {
  children: string;
}

const Heading = ({ children }: Props) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "YesevaOne",
    fontSize: 32,
  },
});

export default Heading;
