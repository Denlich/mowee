import React from "react";
import { Dimensions, FlatList, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { UseQueryResult } from "@tanstack/react-query";

import CardItem from "./CardItem";
import CategoryList from "./CategoryList";
import useSavedMoviesStore from "../stores/saved-movies-store";
import Collection from "../entities/Collection";

const height = Dimensions.get("window").height;

interface Props {
  navigation: NavigationProp<any>;
  collection: UseQueryResult<Collection[], unknown>;
}

const SavedList = ({ navigation, collection }: Props) => {
  return (
    <FlatList
      data={useSavedMoviesStore((s) => s.savedMovies)}
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
      ListHeaderComponent={() => (
        <CategoryList
          collections={collection.data!}
          isLoading={collection.isLoading}
          navigation={navigation}
        />
      )}
      ListHeaderComponentStyle={{ marginBottom: 5 }}
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
    />
  );
};

export default SavedList;
