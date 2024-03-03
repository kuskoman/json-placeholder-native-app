import React from "react";
import { Pressable, Text, StyleProp, ViewStyle, TextStyle } from "react-native";

export interface FormButtonStyles {
  buttonText?: StyleProp<TextStyle>;
  button?: StyleProp<ViewStyle>;
}

export interface FormButtonProps {
  title: string;
  onPress: () => void;
  styles?: FormButtonStyles;
}

export const FormButton: React.FC<FormButtonProps> = ({
  title,
  onPress,
  styles,
}) => {
  const defaultButtonStyles: ViewStyle = {
    backgroundColor: "#E9446A",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  };

  const defaultButtonTextStyles: TextStyle = {
    color: "#FFFFFF",
    fontSize: 16,
  };

  return (
    <Pressable style={[defaultButtonStyles, styles?.button]} onPress={onPress}>
      <Text style={[defaultButtonTextStyles, styles?.buttonText]}>{title}</Text>
    </Pressable>
  );
};
