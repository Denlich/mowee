import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import CreateButton from "./CreateButton";
import useCollections from "../../hooks/useCollections";
import CollectionBox from "../CollectionBox";
import useCollectionsStore from "../../stores/collections-store";

const index = () => {
  const { data, isLoading } = useCollections();
  const queryClient = useQueryClient();
  const setCollection = useCollectionsStore((s) => s.setCollections);

  React.useEffect(() => {
    if (data) {
      setCollection(data);
      queryClient.setQueryData(["collections"], data);
    }
  }, [data, setCollection, queryClient]);

  if (isLoading) {
    return <CreateButton />;
  }

  return (
    <>
      <CreateButton />
      {useCollectionsStore().collections.map((item) => (
        <CollectionBox
          key={item._id}
          name={item.title}
          amount={item.movies.length}
          styles={{ marginTop: 5 }}
          handleClick={() => {}}
        />
      ))}
    </>
  );
};

export default index;
