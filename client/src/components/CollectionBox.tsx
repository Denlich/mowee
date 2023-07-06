import React from "react";
import {
  StyleProp,
  StyleSheet,
  Touchable,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Paragraph from "./UI/Paragraph";

interface Props {
  name: string;
  icon?: string;
  styles?: StyleProp<ViewStyle>;
  amount: number;
  handleClick: () => void;
}

const CollectionBox = ({
  name,
  icon = "folder-outline",
  styles,
  amount,
  handleClick,
}: Props) => {
  return (
    <View style={[localStyles.box, styles]}>
      <TouchableNativeFeedback onPress={handleClick}>
        <View style={localStyles.container}>
          <View style={localStyles.title}>
            <Icon name={icon} size={24} />
            <Paragraph styles={{ marginLeft: 10 }}>{name}</Paragraph>
          </View>
          <Paragraph color="grey">{String(amount)}</Paragraph>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const localStyles = StyleSheet.create({
  box: {
    borderRadius: 10,
    overflow: "hidden",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CollectionBox;
