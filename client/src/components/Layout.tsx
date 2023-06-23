import React, { ReactNode } from "react";
import { View } from "react-native";

import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const index = ({ children }: LayoutProps) => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
};

export default index;
