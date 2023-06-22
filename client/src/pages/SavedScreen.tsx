import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationProp } from "@react-navigation/native";

interface SavedProps {
  navigation: NavigationProp<any>;
}

const SavedScreen = ({ navigation }: SavedProps) => {
  return (
    <View>
      <Text>Saved</Text>
      <Button
        title="Some collection"
        onPress={() => navigation.navigate("CollectionScreen")}
      />
    </View>
  );
};

export default SavedScreen;
