import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationProp } from "@react-navigation/native";

interface CollectionProps {
  navigation: NavigationProp<any>;
}

const CollectionScreen = ({ navigation }: CollectionProps) => {
  return (
    <View>
      <Text>Collection</Text>
      <Button
        title="Some movie"
        onPress={() => navigation.navigate("DetailsScreen")}
      />
    </View>
  );
};

export default CollectionScreen;
