import React, { ReactNode } from "react";
import { View } from "react-native";

import Header from "./Header";
import { NavigationProp } from "@react-navigation/native";

interface Props {
  children: ReactNode;
  navigation: NavigationProp<any>;
}

const index = ({ children, navigation }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <View style={{ flex: 1, paddingHorizontal: 40 }}>{children}</View>
    </View>
  );
};

export default index;
