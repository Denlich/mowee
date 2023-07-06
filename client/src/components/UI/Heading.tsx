import React from "react";
import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";

interface Props {
  children: string;
  color?: "white" | "black";
  style?: StyleProp<TextStyle>;
}

const Heading = ({ children, color = "black", style }: Props) => {
  return <Text style={[styles.text, { color: color }, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "YesevaOne",
    fontSize: 32,
  },
});

export default Heading;
