import { AddressModel } from "@/models/userModels";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@/components/Themed";

export interface AddressBoxProps {
  address: AddressModel;
}

export const AddressBox: React.FC<AddressBoxProps> = ({ address }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Address</Text>
      <Text>
        {address.street}, {address.suite}
      </Text>
      <Text>
        {address.city}, {address.zipcode}
      </Text>
      <Text>
        Geo: {address.geo.lat}, {address.geo.lng}
      </Text>
    </View>
  );
};

export default AddressBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginVertical: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    marginTop: 8,
    color: "#007BFF",
    fontWeight: "bold",
  },
});
