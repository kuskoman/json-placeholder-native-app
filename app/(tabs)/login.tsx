import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { LoginForm } from "@/components/Auth/LoginForm";

const LoginScreen: React.FC = () => {
  const handleLoginSubmit = (credentials: {
    email: string;
    password: string;
  }) => {
    console.log(credentials);
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  loginForm: {
    width: "80%",
    backgroundColor: "#212121",
    padding: 20,
    borderRadius: 10,
  },
});
