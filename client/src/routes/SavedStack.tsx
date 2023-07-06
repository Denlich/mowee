import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SavedScreen from "../pages/SavedScreen";
import CollectionScreen from "../pages/CollectionScreen";

const Stack = createNativeStackNavigator();

const SavedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SavedScreen" component={SavedScreen} />
      <Stack.Screen name="CollectionScreen" component={CollectionScreen} />
    </Stack.Navigator>
  );
};

export default SavedStack;
