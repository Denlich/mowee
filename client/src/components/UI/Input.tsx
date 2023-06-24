import React, { forwardRef } from "react";
import { TextInput } from "react-native";

interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
  ref: React.RefObject<TextInput>;
  onSubmit: () => void;
}

const Input = forwardRef<TextInput, Props>(
  ({ placeholder, onChangeText, onSubmit }, ref) => {
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
        onChangeText={onChangeText}
        ref={ref}
        onSubmitEditing={onSubmit}
      />
    );
  }
);

export default Input;
