import React, { useState } from "react";
import {
  Button,
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import { FormButton } from "../Utility/FormButton";

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
    <View style={style}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={formStyles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        autoCorrect={false}
        style={formStyles.input}
      />
      <FormButton
        title="Login"
        onPress={() => onSubmit({ email, password })}
        styles={buttonStyles}
      ></FormButton>
    </View>
  );
};

const formStyles = StyleSheet.create({
  input: {
    backgroundColor: "#565656",
    color: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
