import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";

import Heading from "../../components/UI/Heading";
import Paragraph from "../../components/UI/Paragraph";
import AuthButton from "../../components/UI/AuthButton";

interface Props {
  navigation: NavigationProp<any>;
}

const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Heading>Welcome to the Mowee - your movies library</Heading>
      <Paragraph color="grey" styles={{ marginVertical: 20 }}>
        Login to start
      </Paragraph>
      <AuthButton
        onPress={() => navigation.navigate("LoginScreen")}
        color="grey"
        style={{ marginBottom: 20 }}
      >
        Log in
      </AuthButton>
      <AuthButton
        onPress={() => navigation.navigate("RegistrationScreen")}
        color="white"
      >
        Sign up
      </AuthButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
});

export default WelcomeScreen;
