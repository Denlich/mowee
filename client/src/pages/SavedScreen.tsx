import React from "react";
import { Text, Button } from "react-native";
import { NavigationProp } from "@react-navigation/native";

import Layout from "../components/Layout";

interface Props {
  navigation: NavigationProp<any>;
}

const SavedScreen = ({ navigation }: Props) => {
  return (
    <Layout navigation={navigation}>
      <Text>Saved</Text>
      <Button
        title="Some collection"
        onPress={() => navigation.navigate("CollectionScreen")}
      />
    </Layout>
  );
};

export default SavedScreen;
