import React from "react";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { View } from "react-native";

import Paragraph from "../components/UI/Paragraph";
import useCollection from "../hooks/useCollection";
import SavedList from "../components/SavedList";
import CollectionHeader from "../components/CollectionHeader";

interface CollectionProps {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
}

const CollectionScreen = ({ route, navigation }: CollectionProps) => {
  const { collection } = route.params!;
  const { data, isLoading } = useCollection(collection);

  if (!collection) {
    return null;
  }

  if (isLoading) {
    return null;
  }

  if (!data) {
    return <Paragraph>Some error</Paragraph>;
  }

  if (data.movies.length === 0) {
    return <Paragraph>No movies yet</Paragraph>;
  }

  return (
    <View style={{ flex: 1 }}>
      <CollectionHeader title={data.title} navigation={navigation} />
      <SavedList
        navigation={navigation}
        data={data.movies}
        style={{ paddingHorizontal: 40 }}
      />
    </View>
  );
};

export default CollectionScreen;
