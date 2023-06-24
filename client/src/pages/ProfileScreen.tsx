import React from "react";
import { Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";

import Layout from "../components/Layout";

interface Props {
  navigation: NavigationProp<any>;
}

const ProfileScreen = ({ navigation }: Props) => {
  return (
    <Layout navigation={navigation}>
      <Text>Profile</Text>
    </Layout>
  );
};

export default ProfileScreen;
