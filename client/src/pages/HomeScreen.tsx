import React from "react";
import { Button } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import Layout from "../components/Layout";

interface HomeScreenPros {
  navigation: NavigationProp<any>;
}

const HomeScreen = ({ navigation }: HomeScreenPros) => {
  return (
    <Layout>
      <Button
        title="Details"
        onPress={() => navigation.navigate("DetailsScreen")}
      />
    </Layout>
  );
};

export default HomeScreen;
