import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Paragraph from "../UI/Paragraph";

const CreateButton = (props: { handlePress: () => void }) => {
  return (
    <TouchableWithoutFeedback onPress={props.handlePress}>
      <View style={styles.container}>
        <Paragraph>Create new category</Paragraph>
        <Icon name="add" color="#999" size={24} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
});

export default CreateButton;
