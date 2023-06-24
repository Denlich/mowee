import React, { ReactNode } from "react";
import { SafeAreaView, StatusBar, StyleSheet, ViewStyle } from "react-native";

interface Props {
  children: ReactNode;
  styles?: ViewStyle;
}

const Screen = ({ children, styles }: Props) => {
  return (
    <SafeAreaView style={[localStyles.container, styles]}>
      {children}
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
});

export default Screen;
