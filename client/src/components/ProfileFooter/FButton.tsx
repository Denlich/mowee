import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Paragraph from "../UI/Paragraph";

interface Props {
  children: string;
  onPress: () => void;
  icon: string;
  color?: "#999" | "#DC4B4B";
}

const FButton = ({ children, onPress, icon, color = "#999" }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
        <Icon name={icon} size={24} color={color} />
        <Paragraph styles={{ marginLeft: 10, color: color }}>
          {children}
        </Paragraph>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 40,
  },
});

export default FButton;
