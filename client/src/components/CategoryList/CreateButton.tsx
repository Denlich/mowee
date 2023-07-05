import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import APIClient from "../../services/api-client";
import Collection from "../../entities/Collection";
import Input from "../UI/Input";
import Paragraph from "../UI/Paragraph";
import useCollectionsStore from "../../stores/collections-store";

const apiClient = new APIClient<Collection>("/collection/create");

const CreateButton = () => {
  const [title, setTitle] = React.useState("");
  const ref = React.useRef(null);
  const [error, setError] = React.useState("");
  const addCollection = useCollectionsStore((s) => s.addCollection);

  const onSubmit = async () => {
    try {
      title.length >= 1 && title.length <= 30
        ? await apiClient.save({ title }).then((res) => {
            addCollection(res);
            setError("");
          })
        : setError(
            "Length of collection's title must be at least 1 character and less than 30"
          );
    } catch (e) {
      console.log(e);
    } finally {
      setTitle("");
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Input
          placeholder="Create new collection"
          styles={styles.input}
          ref={ref}
          value={title}
          onSubmit={onSubmit}
          onChangeText={(text) => setTitle(text)}
        />
        <TouchableWithoutFeedback onPress={onSubmit}>
          <Icon name="add" color="#999" size={24} style={{ padding: 20 }} />
        </TouchableWithoutFeedback>
      </View>
      {error && <Paragraph styles={{ color: "#f00" }}>{error}</Paragraph>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
  },
  input: {
    flex: 1,
    borderBottomWidth: 0,
    paddingVertical: 0,
    paddingLeft: 20,
  },
});

export default CreateButton;
