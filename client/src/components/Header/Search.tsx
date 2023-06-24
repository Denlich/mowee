import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
  navigation: NavigationProp<any>;
}

const Search = ({ navigation }: Props) => {
  const handleClick = () => {
    navigation.navigate("Search");
  };

  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <Icon name="search" size={24} color="#000" />
    </TouchableWithoutFeedback>
  );
};

export default Search;
