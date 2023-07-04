import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Paragraph from "./UI/Paragraph";

interface Props {
  name: string;
  icon?: string;
  styles?: StyleProp<ViewStyle>;
  amount: number;
}

const CollectionBox = ({
  name,
  icon = "folder-outline",
  styles,
  amount,
}: Props) => {
  return (
    <View style={[localStyles.container, styles]}>
      <View style={localStyles.title}>
        <Icon name={icon} size={24} />
        <Paragraph styles={{ marginLeft: 10 }}>{name}</Paragraph>
      </View>
      <Paragraph color="grey">{String(amount)}</Paragraph>
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CollectionBox;
