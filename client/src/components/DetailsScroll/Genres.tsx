import React from "react";
import { View } from "react-native";

import Paragraph from "../UI/Paragraph";

interface Props {
  genre: string;
}

const Genres = ({ genre }: Props) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginVertical: 10,
      }}
    >
      {genre.split(", ").map((item, index) => (
        <Paragraph
          color="grey"
          styles={{
            borderColor: "#999",
            borderWidth: 1,
            borderRadius: 5,
            paddingVertical: 5,
            paddingHorizontal: 10,
            marginRight: 10,
          }}
          key={index}
        >
          {item}
        </Paragraph>
      ))}
    </View>
  );
};

export default Genres;
