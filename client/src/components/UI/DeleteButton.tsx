import React from "react";
import { TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import APIClient from "../../services/api-client";
import useCollectionsStore from "../../stores/collections-store";

const apiClient = new APIClient("/collection/delete");

const DeleteButton = (props: { id: string }) => {
  const deleteCollection = useCollectionsStore((s) => s.deleteCollection);

  const handleDelete = () => {
    try {
      apiClient.delete(props.id);
    } catch (e) {
      console.log(e);
    } finally {
      deleteCollection(props.id);
    }
  };

  return (
    <TouchableHighlight onPress={handleDelete}>
      <Icon
        name="trash-outline"
        size={24}
        color="#fff"
        style={{ padding: 20, backgroundColor: "#f00" }}
      />
    </TouchableHighlight>
  );
};

export default DeleteButton;
