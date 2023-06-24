import React, { forwardRef } from "react";
import { TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import Input from "../UI/Input";

interface Props {
  ref: React.RefObject<TextInput>;
  onSubmit: () => void;
  onChangeText: (text: string) => void;
}

const SearchBox = forwardRef<TextInput, Props>(
  ({ onSubmit, onChangeText }, ref) => {
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
        <Input
          ref={ref}
          onSubmit={onSubmit}
          onChangeText={onChangeText}
          placeholder="Search for some movie"
        />
        <Icon name="search" size={24} color="#000" style={{ marginLeft: 10 }} />
      </View>
    );
  }
);

export default SearchBox;
