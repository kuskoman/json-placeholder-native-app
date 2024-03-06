import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { LoginForm } from "@/components/Auth/LoginForm";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/userSlice";
import { UsersService } from "@/services/usersService";
import { useNavigation } from "expo-router";
import { RootStackParamList } from "@/routes";
import { NavigationProp } from "@react-navigation/native";

interface LoginSubmitParams {
  email: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const usersService = new UsersService();

  const handleLoginSubmit = async (_credentials: LoginSubmitParams) => {
    const exampleUser = await usersService.getUser(1);

    dispatch(setUser(exampleUser));

    navigation.navigate("index");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <LoginForm onSubmit={handleLoginSubmit} style={styles.loginForm} />
    </View>
  );
};

export default LoginScreen;

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
  loginForm: {
    backgroundColor: "#212121",
    padding: 20,
    borderRadius: 10,
  },
});
