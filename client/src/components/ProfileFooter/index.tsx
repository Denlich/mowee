import React from "react";
import { StyleSheet, View } from "react-native";
import FButton from "./FButton";
import authStore from "../../stores/auth-store";

const ProfileFooter = () => {
  const handleLogout = () => {
    authStore.getState().logout();
  };

  return (
    <View style={styles.container}>
      <FButton icon="settings-outline" onPress={() => {}}>
        settings
      </FButton>
      <FButton icon="exit-outline" color="#DC4B4B" onPress={handleLogout}>
        exit
      </FButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ProfileFooter;
