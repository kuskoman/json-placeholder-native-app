import { AddressModel } from "@/models/userModels";
import React from "react";
import { View } from "react-native";
import { Text } from "@/components/Themed";
import { profileStyles } from "./profileStyles";

export interface AddressBoxProps {
  address: AddressModel;
}

export const AddressBox: React.FC<AddressBoxProps> = ({ address }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Address</Text>
      <Text>
        Street: {address.street}, Suite: {address.suite}
      </Text>
      <Text>
        City: {address.city}, ZIP: {address.zipcode}
      </Text>
      <Text>
        Geo: {address.geo.lat}, {address.geo.lng}
      </Text>
    </View>
  );
};

export default AddressBox;

const styles = profileStyles;
