import { RegisterForm } from "@/components/Auth/RegisterForm/RegisterForm";
import { UserCreateModel } from "@/models/userModels";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RegisterScreen: React.FC = () => {
  const handleRegisterSubmit = (user: UserCreateModel) => {
    console.log(user);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <RegisterForm onSubmit={handleRegisterSubmit} />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
