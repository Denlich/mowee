import React, { forwardRef } from "react";
import { NavigationProp } from "@react-navigation/native";
import { TextInput } from "react-native";

import Screen from "../UI/Screen";
import SearchBox from "./SearchBox";
import BackButton from "../UI/BackButton";

interface Props {
  navigation: NavigationProp<any>;
  ref: React.RefObject<TextInput>;
  onSubmit: () => void;
  onChangeText: (text: string) => void;
}

const SearchHeader = forwardRef<TextInput, Props>(
  ({ navigation, onSubmit, onChangeText }, ref) => {
    return (
      <Screen styles={{ flexDirection: "row", alignItems: "center" }}>
        <BackButton color="black" onPress={() => navigation.goBack()} />
        <SearchBox ref={ref} onSubmit={onSubmit} onChangeText={onChangeText} />
      </Screen>
    );
  }
);

export default SearchHeader;
