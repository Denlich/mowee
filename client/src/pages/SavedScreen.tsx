import React, { useEffect } from "react";
import { NavigationProp } from "@react-navigation/native";
import { useQueryClient } from "@tanstack/react-query";

import Layout from "../components/Layout";
import useSaved from "../hooks/useSaved";
import useSavedMoviesStore from "../stores/saved-movies-store";
import useCollections from "../hooks/useCollections";
import useCollectionsStore from "../stores/collections-store";
import SavedList from "../components/SavedList";

interface Props {
  navigation: NavigationProp<any>;
}

const SavedScreen = ({ navigation }: Props) => {
  const saved = useSaved();
  const setSavedMovies = useSavedMoviesStore((m) => m.setSavedMovies);

  const collection = useCollections();
  const setCollection = useCollectionsStore((s) => s.setCollections);

  const queryClient = useQueryClient();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      saved.refetch();
      collection.refetch();
    });

    return () => unsubscribe();
  }, [navigation, saved.refetch]);

  useEffect(() => {
    if (saved.data) {
      setSavedMovies(saved.data);
      queryClient.setQueryData(["movies"], saved.data);
    }
  }, [saved.data, setSavedMovies, queryClient]);

  useEffect(() => {
    if (collection.data) {
      setCollection(collection.data);
      queryClient.setQueryData(["collections"], collection.data);
    }
  }, [collection.data, setCollection, queryClient]);

  if (saved.isLoading || collection.isLoading) {
    return null;
  }

  return (
    <Layout navigation={navigation}>
      <SavedList collection={collection} navigation={navigation} />
    </Layout>
  );
};

export default SavedScreen;
