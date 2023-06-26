import React, { forwardRef } from "react";
import { Noop } from "react-hook-form";
import { StyleProp, TextInput, TextStyle } from "react-native";

interface Props {
  placeholder: string;
  onChangeText?: (text: string) => void;
  ref?: React.RefObject<TextInput>;
  onSubmit?: () => void;
  styles?: StyleProp<TextStyle>;
  secureTextEntry?: boolean;
  value?: string;
  onBlur: Noop;
}

const Input = forwardRef<TextInput, Props>(
  (
    {
      placeholder,
      onChangeText,
      onSubmit,
      styles,
      secureTextEntry = false,
      value,
      onBlur,
    },
    ref
  ) => {
    return (
      <>
        <TextInput
          style={[
            {
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#000",
              fontFamily: "Montserrat",
              fontSize: 16,
            },
            styles,
          ]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          ref={ref}
          onSubmitEditing={onSubmit}
          secureTextEntry={secureTextEntry}
          value={value}
          onBlur={onBlur}
          defaultValue=""
        />
      </>
    );
  }
);

export default Input;
