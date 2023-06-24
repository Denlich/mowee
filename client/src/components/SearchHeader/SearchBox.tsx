import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import Input from "../UI/Input";

const SearchBox = () => {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
      }}
    >
      <Input placeholder="Search for some movie" />
      <Icon name="search" size={24} color="#000" style={{ marginLeft: 10 }} />
    </View>
  );
};

export default SearchBox;
