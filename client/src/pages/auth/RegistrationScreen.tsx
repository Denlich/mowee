import React from "react";
import { StyleSheet, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../../components/UI/Input";
import AuthButton from "../../components/UI/AuthButton";
import Paragraph from "../../components/UI/Paragraph";
import APIClient from "../../services/api-client";
import authStore from "../../stores/auth-store";

const schema = z.object({
  name: z
    .string()
    .min(2, "Name must have at least 2 characters")
    .max(20, "Name must have leass than 20 characters"),
  username: z
    .string()
    .min(2, "Userame must have at least 2 characters")
    .max(30, "Username must have leass than 30 characters"),
  password: z
    .string()
    .min(5, "Password must have at least 5 characters")
    .max(1024, "Password must have leass than 1024 characters"),
});

const apiClient = new APIClient("/auth/registration");

type FormData = z.infer<typeof schema>;

const RegistrationScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await apiClient.auth({ ...data });
      authStore.getState().setToken(response.userToken);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onChangeText={(text) => onChange(text)}
            value={value}
            placeholder="name"
            onBlur={onBlur}
          />
        )}
      />
      {errors.name && (
        <Paragraph styles={{ color: "#f00" }}>
          {errors.name?.message!}
        </Paragraph>
      )}
      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onChangeText={(text) => onChange(text)}
            value={value}
            placeholder="username"
            onBlur={onBlur}
            styles={{ marginVertical: 20 }}
          />
        )}
      />
      {errors.username && (
        <Paragraph styles={{ color: "#f00" }}>
          {errors.username?.message!}
        </Paragraph>
      )}
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onChangeText={(text) => onChange(text)}
            value={value}
            placeholder="password"
            onBlur={onBlur}
            secureTextEntry
          />
        )}
      />
      {errors.password && (
        <Paragraph styles={{ color: "#f00" }}>
          {errors.password?.message!}
        </Paragraph>
      )}
      <AuthButton
        onPress={handleSubmit(onSubmit)}
        color="grey"
        style={{ marginTop: 40 }}
      >
        Sign up
      </AuthButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 40,
  },
});

export default RegistrationScreen;
