import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
  color: "white" | "black";
  onPress: () => void;
}

const BackButton = ({ color, onPress }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Icon name="arrow-back-ios" size={24} color={color} />
    </TouchableWithoutFeedback>
  );
};

export default BackButton;
