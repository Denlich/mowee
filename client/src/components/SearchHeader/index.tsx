import React from "react";
import { NavigationProp } from "@react-navigation/native";

import Screen from "../Screen";
import SearchBox from "./SearchBox";
import BackButton from "../UI/BackButton";

interface Props {
  navigation: NavigationProp<any>;
}

const SearchHeader = ({ navigation }: Props) => {
  return (
    <Screen styles={{ flexDirection: "row", alignItems: "center" }}>
      <BackButton color="black" onPress={() => navigation.goBack()} />
      <SearchBox />
    </Screen>
  );
};

export default SearchHeader;
