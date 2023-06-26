import React from "react";
import { NavigationProp } from "@react-navigation/native";

import Screen from "./Screen";
import BackButton from "./UI/BackButton";

interface Props {
  navigation: NavigationProp<any>;
}

const DetailsHeader = ({ navigation }: Props) => {
  return (
    <Screen styles={{ position: "absolute", zIndex: 999 }}>
      <BackButton color="white" onPress={() => navigation.goBack()} />
    </Screen>
  );
};

export default DetailsHeader;
