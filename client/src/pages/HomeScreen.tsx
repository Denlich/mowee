import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationProp } from "@react-navigation/native";

interface HomeScreenPros {
  navigation: NavigationProp<any>;
}

const HomeScreen = ({ navigation }: HomeScreenPros) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("DetailsScreen")}
      />
    </View>
  );
};

export default HomeScreen;
