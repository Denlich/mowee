import React from "react";

import CreateButton from "./CreateButton";
import useCollections from "../../hooks/useCollections";
import CollectionBox from "../CollectionBox";

const index = () => {
  const { data, isLoading } = useCollections();

  if (isLoading) {
    return <CreateButton handlePress={() => {}} />;
  }

  return (
    <>
      <CreateButton handlePress={() => {}} />
      {data!.map((item) => (
        <CollectionBox
          name={item.title}
          key={item._id}
          amount={item.movies.length}
          styles={{ marginTop: 5 }}
        />
      ))}
    </>
  );
};

export default index;
