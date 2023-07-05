import React from "react";
import { StyleSheet } from "react-native";
import { NavigationProp } from "@react-navigation/native";

import Layout from "../components/Layout";
import UserInfo from "../components/UserInfo";
import MoviesGroup from "../components/MoviesGroup";
import ProfileFooter from "../components/ProfileFooter";
import useMe from "../hooks/useMe";

interface Props {
  navigation: NavigationProp<any>;
}

const ProfileScreen = ({ navigation }: Props) => {
  const { data } = useMe();

  return (
    <Layout navigation={navigation} styles={styles.container}>
      <UserInfo name={data?.name!} username={data?.username!} />
      <MoviesGroup navigation={navigation} />
      <ProfileFooter />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default ProfileScreen;
