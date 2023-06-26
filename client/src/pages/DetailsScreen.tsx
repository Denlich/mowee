import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import axios from "axios";

import Movie from "../entities/Movie";
import DetailsHeader from "../components/DetailsHeader";
import DetailsScroll from "../components/DetailsScroll";

interface Props {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
}

const DetailsScreen = ({ route, navigation }: Props) => {
  const [movie, setMovie] = useState<Movie>();
  useEffect(() => {
    axios
      .get<Movie>(
        "http://www.omdbapi.com/?i=" +
          route.params +
          "&plot=full&apikey=6b3739ab&r=json"
      )
      .then((res) => setMovie(res.data));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <DetailsHeader navigation={navigation} />
      <DetailsScroll movie={movie!} />
    </View>
  );
};

export default DetailsScreen;
