import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import APIClient from "../../services/api-client";

const apiClient = new APIClient("/movie/save");

interface Props {
  imdbID: string;
  Poster: string;
  isSaved: boolean;
}

const SaveButton = ({ imdbID, Poster, isSaved }: Props) => {
  const [saved, setSaved] = useState(isSaved);

  function handleSave() {
    setSaved(!saved);
    apiClient.save({ imdbID, Poster });
  }

  return (
    <TouchableWithoutFeedback onPress={handleSave}>
      <Icon
        name={saved ? "bookmark" : "bookmark-outline"}
        size={24}
        color="#fff"
      />
    </TouchableWithoutFeedback>
  );
};

export default SaveButton;
