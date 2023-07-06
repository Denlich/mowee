import React from "react";
import { NavigationProp } from "@react-navigation/native";

import CreateButton from "./CreateButton";
import CollectionBox from "../CollectionBox";
import Collection from "../../entities/Collection";

interface Props {
  navigation: NavigationProp<any>;
  collections: Collection[];
  isLoading: boolean;
}

const index = ({ navigation, collections, isLoading }: Props) => {
  if (isLoading) {
    return <CreateButton />;
  }

  return (
    <>
      <CreateButton />
      {collections.map((item) => (
        <CollectionBox
          key={item._id}
          name={item.title}
          amount={item.movies.length}
          styles={{ marginTop: 5 }}
          handleClick={() =>
            navigation.navigate("CollectionScreen", { movies: item.movies })
          }
        />
      ))}
    </>
  );
};

export default index;
