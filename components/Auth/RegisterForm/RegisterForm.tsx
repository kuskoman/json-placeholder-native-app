import React, { useState } from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { registerFormValidator, FieldValidationErrors } from "./validation";
import { FormButton } from "@/components/Utility/Form/FormButton";
import { FormField } from "@/components/Utility/Form/FormField";
import { UserCreateModel, UserModel } from "@/models/userModels";
import { baseFormStyles } from "../formStyles";

interface RegisterFormProps {
  onSubmit: (user: UserCreateModel) => void;
  style?: StyleProp<ViewStyle>;
}

const initialUser: UserCreateModel = {
  username: "",
  email: "",
  name: "",
  phone: "",
  website: "",
};

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onSubmit,
  style,
}) => {
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
    <View style={[styles.container, style]}>
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

const styles = baseFormStyles;
