import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import APIClient from "../../services/api-client";
import SavedMovie from "../../entities/SavedMovie";
import useSavedMoviesStore from "../../stores/saved-movies-store";

const apiClient = new APIClient<SavedMovie>("/movie/save");

interface Props {
  imdbID: string;
  Poster: string;
  isSaved: boolean;
}

const SaveButton = ({ imdbID, Poster, isSaved }: Props) => {
  const [saved, setSaved] = useState(isSaved);
  const addMovie = useSavedMoviesStore((s) => s.addMovie);
  const deleteMovie = useSavedMoviesStore((s) => s.deleteMovie);

  const handleSave = async () => {
    setSaved(!saved);
    const movie = await apiClient.save({ imdbID, Poster });
    if (movie.imdbID) addMovie(movie);
    else deleteMovie(imdbID);
  };

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
