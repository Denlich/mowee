import React, { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";

import Header from "./Header";
import { NavigationProp } from "@react-navigation/native";

interface Props {
  children: ReactNode;
  navigation: NavigationProp<any>;
  styles?: StyleProp<ViewStyle>;
}

const index = ({ children, navigation, styles }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <View style={[{ flex: 1, paddingHorizontal: 40 }, styles]}>
        {children}
      </View>
    </View>
  );
};

export default index;
