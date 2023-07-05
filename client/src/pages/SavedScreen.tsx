import React, { useEffect } from "react";
import { Dimensions, FlatList, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useQueryClient } from "@tanstack/react-query";

import Layout from "../components/Layout";
import useSaved from "../hooks/useSaved";
import CardItem from "../components/CardItem";
import CategoryList from "../components/CategoryList";
import useSavedMoviesStore from "../stores/saved-movies-store";

const height = Dimensions.get("window").height;

interface Props {
  navigation: NavigationProp<any>;
}

const SavedScreen = ({ navigation }: Props) => {
  const { data, isLoading, refetch } = useSaved();
  const setSavedMovies = useSavedMoviesStore((m) => m.setSavedMovies);
  const queryClient = useQueryClient();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      refetch();
    });
    return unsubscribe;
  }, [navigation, refetch]);

  useEffect(() => {
    if (data) {
      setSavedMovies(data);
      queryClient.setQueryData(["movies"], data);
    }
  }, [data, setSavedMovies, queryClient]);

  if (isLoading) {
    return null;
  }

  return (
    <Layout navigation={navigation}>
      <FlatList
        data={useSavedMoviesStore().savedMovies}
        renderItem={({ item, index }) => (
          <View
            style={[
              { flex: 0.5, height: height / 3 },
              index % 2 === 0 ? { marginRight: 2.5 } : { marginLeft: 2.5 },
            ]}
          >
            <CardItem
              item={item}
              navigation={navigation}
              isSaved={true}
              searchCard={false}
            />
          </View>
        )}
        keyExtractor={(item) => item.imdbID}
        numColumns={2}
        style={{ flex: 1 }}
        nestedScrollEnabled
        ListHeaderComponent={<CategoryList />}
        ListHeaderComponentStyle={{ marginBottom: 5 }}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
      />
    </Layout>
  );
};

export default SavedScreen;
