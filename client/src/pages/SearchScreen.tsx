import React, { useRef, useState } from "react";
import { View, TextInput } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import axios from "axios";

import SearchHeader from "../components/SearchHeader";
import Movie from "../entities/Movie";
import SearchResultList from "../components/SearchResultList";

interface Props {
  navigation: NavigationProp<any>;
}

const SearchScreen = ({ navigation }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [req, setReq] = useState("");
  const searchRef = useRef<TextInput>(null);

  const search = async () => {
    await axios
      .get("http://www.omdbapi.com/?s=" + req + "&apikey=6b3739ab")
      .then((res) => setMovies(res.data.Search));
  };

  const onChangeText = (text: string) => {
    setReq(text);
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchHeader
        navigation={navigation}
        ref={searchRef}
        onSubmit={search}
        onChangeText={onChangeText}
      />
      <SearchResultList movies={movies} navigation={navigation} />
    </View>
  );
};

export default SearchScreen;
