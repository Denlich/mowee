import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import Screen from "./UI/Screen";
import Paragraph from "./UI/Paragraph";

interface Props {
  title: string;
  navigation: NavigationProp<any>;
}

const CollectionHeader = ({ title, navigation }: Props) => {
  return (
    <Screen styles={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View style={styles.row}>
          <Icon name="chevron-back" color="#000" size={24} />
          <Paragraph styles={{ marginLeft: 20 }}>{title}</Paragraph>
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CollectionHeader;
