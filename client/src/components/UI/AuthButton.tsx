import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Paragraph from "./Paragraph";

interface Props {
  color: "white" | "grey";
  onPress: () => void;
  children: string;
  style?: StyleProp<TextStyle>;
}

const AuthButton = ({ color, onPress, children, style }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.btn,
          color === "white" ? styles.white : styles.grey,
          style,
        ]}
      >
        <Paragraph>{children}</Paragraph>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  btn: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    borderRadius: 10,
    paddingVertical: 15,
  },
  white: {
    borderWidth: 1,
    borderColor: "#999",
  },
  grey: {
    backgroundColor: "#F2F6F7",
  },
});

export default AuthButton;
