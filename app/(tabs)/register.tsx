import { RegisterForm } from "@/components/Auth/RegisterForm/RegisterForm";
import { UserCreateModel } from "@/models/userModels";
import { RootStackParamList } from "@/routes";
import { UsersService } from "@/services/usersService";
import { setUser } from "@/store/userSlice";
import { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  const handleRegisterSubmit = (user: UserCreateModel) => {
    const userWithId = { ...user, id: 1 };
    dispatch(setUser(userWithId));
    navigation.navigate("index");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <RegisterForm
        onSubmit={handleRegisterSubmit}
        style={styles.registerForm}
      />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  registerForm: {
    backgroundColor: "#212121",
    padding: 20,
    borderRadius: 10,
  },
});
