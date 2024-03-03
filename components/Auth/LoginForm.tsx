import React, { useState } from "react";
import { View, StyleSheet, ViewStyle, StyleProp } from "react-native";
import { FormField } from "../Utility/Form/FormField"; // Adjust the path as necessary
import { FormButton, FormButtonStyles } from "../Utility/Form/FormButton"; // Adjust the path as necessary
import { baseFormStyles } from "./formStyles";

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (credentials: LoginCredentials) => void;
  style?: StyleProp<ViewStyle>;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, style }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={[styles.container, style]}>
      <FormField
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <FormField
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
      <FormButton
        title="Login"
        onPress={() => onSubmit({ email, password })}
        styles={buttonStyles}
      />
    </View>
  );
};

const buttonStyles: FormButtonStyles = {
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
};

const styles = baseFormStyles;
