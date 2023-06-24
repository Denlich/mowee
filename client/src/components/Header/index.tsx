import React from "react";
import { NavigationProp } from "@react-navigation/native";

import Logo from "./Logo";
import Search from "./Search";
import Screen from "../Screen";

interface Props {
  navigation: NavigationProp<any>;
}

const index = ({ navigation }: Props) => {
  return (
    <Screen>
      <Logo />
      <Search navigation={navigation} />
    </Screen>
  );
};

export default index;
