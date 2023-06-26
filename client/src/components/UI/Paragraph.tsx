import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

interface Props {
  children: string | string[];
  styles?: TextStyle;
  color?: "black" | "grey";
}

const Paragraph = ({ children, color = "black", styles }: Props) => {
  return (
    <Text style={[localStyls.text, { color: color }, styles]}>{children}</Text>
  );
};

const localStyls = StyleSheet.create({
  text: {
    fontFamily: "Montserrat",
    fontSize: 16,
  },
});

export default Paragraph;
