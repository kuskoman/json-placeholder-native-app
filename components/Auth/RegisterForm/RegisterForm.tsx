import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { registerFormValidator, FieldValidationErrors } from "./validation";
import { FormButton } from "@/components/Utility/Form/FormButton";
import { FormField } from "@/components/Utility/Form/FormField";
import { UserCreateModel, UserModel } from "@/models/userModels";

interface RegisterFormProps {
  onSubmit: (user: UserCreateModel) => void;
}

const initialUser: UserCreateModel = {
  username: "",
  email: "",
  name: "",
  phone: "",
  website: "",
};

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [user, setUser] = useState(initialUser);
  const [fieldValidationErrors, setFieldValidationErrors] =
    useState<FieldValidationErrors>({});

  const handleChange = (name: keyof UserCreateModel, value: string) => {
    setUser((currentUser: UserModel) => ({ ...currentUser, [name]: value }));
    setFieldValidationErrors(registerFormValidator({ ...user, [name]: value }));
  };

  const handleSubmit = () => {
    if (Object.values(fieldValidationErrors).every((x) => x === "")) {
      onSubmit(user);
    }
  };

  return (
    <View style={styles.container}>
      <FormField
        label="Username"
        value={user.username}
        onChangeText={(value) => handleChange("username", value)}
        placeholder="Enter username"
        error={fieldValidationErrors.username}
      />
      <FormField
        label="Email"
        value={user.email}
        onChangeText={(value) => handleChange("email", value)}
        placeholder="Enter email"
        keyboardType="email-address"
        error={fieldValidationErrors.email}
      />
      <FormField
        label="Name"
        value={user.name}
        onChangeText={(value) => handleChange("name", value)}
        placeholder="Enter name"
        error={fieldValidationErrors.name}
      />
      <FormField
        label="Phone"
        value={user.phone}
        onChangeText={(value) => handleChange("phone", value)}
        placeholder="Enter phone"
        keyboardType="phone-pad"
        error={fieldValidationErrors.phone}
      />
      <FormField
        label="Website"
        value={user.website}
        onChangeText={(value) => handleChange("website", value)}
        placeholder="Enter website"
      />
      <FormButton
        title="Register"
        onPress={handleSubmit}
        styles={{ button: styles.button }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 15,
    minWidth: 150,
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  label: {
    fontSize: 16,
    color: "#000",
    marginBottom: 5,
    fontWeight: "bold",
  },
  errorText: {
    fontSize: 14,
    color: "red",
    marginBottom: 5,
  },
});
