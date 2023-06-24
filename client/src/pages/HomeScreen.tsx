import React from "react";
import { Button } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import Layout from "../components/Layout";

interface Props {
  navigation: NavigationProp<any>;
}

const HomeScreen = ({ navigation }: Props) => {
  return (
    <Layout navigation={navigation}>
      <Button
        title="Details"
        onPress={() => navigation.navigate("DetailsScreen")}
      />
    </Layout>
  );
};

export default HomeScreen;
