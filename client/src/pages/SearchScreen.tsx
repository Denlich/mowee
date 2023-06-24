import React from "react";
import { View, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";

import SearchHeader from "../components/SearchHeader";

interface Props {
  navigation: NavigationProp<any>;
}

const SearchScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <SearchHeader navigation={navigation} />
      <Text>123</Text>
    </View>
  );
};

export default SearchScreen;
