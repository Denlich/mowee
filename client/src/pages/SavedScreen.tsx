import React from "react";
import { Button, Dimensions, FlatList, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";

import Layout from "../components/Layout";
import useGetSaved from "../hooks/useGetSaved";
import CardItem from "../components/CardItem";

const height = Dimensions.get("window").height;

interface Props {
  navigation: NavigationProp<any>;
}

const SavedScreen = ({ navigation }: Props) => {
  const savedMovies = useGetSaved();

  if (!savedMovies) {
    return null;
  }

  return (
    <Layout navigation={navigation}>
      <Button
        title="Some collection"
        onPress={() => navigation.navigate("CollectionScreen")}
      />
      <FlatList
        data={savedMovies.data}
        renderItem={({ item, index }) => (
          <View
            style={[
              { flex: 0.5, height: height / 3 },
              index % 2 === 0 ? { marginRight: 5 } : { marginLeft: 5 },
            ]}
          >
            <CardItem item={item} navigation={navigation} isSaved={true} />
          </View>
        )}
        keyExtractor={(item) => item.imdbID}
        numColumns={2}
        style={{ flex: 1 }}
      />
    </Layout>
  );
};

export default SavedScreen;
