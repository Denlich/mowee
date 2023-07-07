import React from "react";
import { Dimensions, FlatList, StyleProp, View, ViewStyle } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { UseQueryResult } from "@tanstack/react-query";

import CardItem from "./CardItem";
import CategoryList from "./CategoryList";
import useSavedMoviesStore from "../stores/saved-movies-store";
import Collection from "../entities/Collection";
import useCollectionsStore from "../stores/collections-store";

const height = Dimensions.get("window").height;

interface Props {
  navigation: NavigationProp<any>;
  collection?: UseQueryResult<Collection[], unknown>;
  data?: any;
  style?: StyleProp<ViewStyle>;
}

const SavedList = ({ navigation, collection, data, style }: Props) => {
  const renderListHeader = () => {
    if (!collection || !collection.data) {
      return null;
    }

    return (
      <CategoryList
        collections={useCollectionsStore((s) => s.collections)}
        isLoading={collection.isLoading}
        navigation={navigation}
      />
    );
  };

  return (
    <FlatList
      data={data ? data : useSavedMoviesStore((s) => s.savedMovies)}
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
      ListHeaderComponent={renderListHeader}
      ListHeaderComponentStyle={{ marginBottom: 5 }}
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
      contentContainerStyle={style}
    />
  );
};

export default SavedList;
