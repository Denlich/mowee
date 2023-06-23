import React from "react";
import { Text, Button } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import Layout from "../components/Layout";

interface SavedProps {
  navigation: NavigationProp<any>;
}

const SavedScreen = ({ navigation }: SavedProps) => {
  return (
    <Layout>
      <Text>Saved</Text>
      <Button
        title="Some collection"
        onPress={() => navigation.navigate("CollectionScreen")}
      />
    </Layout>
  );
};

export default SavedScreen;
