import React from "react";
import { Text, StyleSheet } from "react-native";

interface TextProps {
  children: String;
}

const Paragraph = ({ children }: TextProps) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Montserrat",
    fontSize: 16,
  },
});

export default Paragraph;
