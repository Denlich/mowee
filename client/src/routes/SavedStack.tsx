import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SavedScreen from "../pages/SavedScreen";
import DetailsScreen from "../pages/DetailsScreen";
import CollectionScreen from "../pages/CollectionScreen";

const Stack = createNativeStackNavigator();

const SavedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SavedScreen" component={SavedScreen} />
      <Stack.Screen name="CollectionScreen" component={CollectionScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default SavedStack;
