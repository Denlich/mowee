import React from "react";
import { View } from "react-native";

import Heading from "./UI/Heading";
import Paragraph from "./UI/Paragraph";

interface Props {
  name: string;
  username: string;
}

const UserInfo = ({ name, username }: Props) => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <View
        style={{
          width: 75,
          height: 75,
          borderRadius: 999,
          backgroundColor: "#fff",
        }}
      />
      <View style={{ marginLeft: 20 }}>
        <Heading>{name}</Heading>
        <Paragraph color="grey">{username}</Paragraph>
      </View>
    </View>
  );
};

export default UserInfo;
