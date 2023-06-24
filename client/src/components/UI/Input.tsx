import React from "react";
import { TextInput } from "react-native";

interface Props {
  placeholder: string;
}

const Input = ({ placeholder }: Props) => {
  return (
    <TextInput
      style={{
        flex: 1,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        fontFamily: "Montserrat",
        fontSize: 16,
      }}
      placeholder={placeholder}
    />
  );
};

export default Input;
