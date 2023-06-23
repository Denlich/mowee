import React from "react";
import { Text, StyleSheet } from "react-native";

interface TextProps {
  children: String;
}

const Heading = ({ children }: TextProps) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "YesevaOne",
    fontSize: 32,
  },
});

export default Heading;
