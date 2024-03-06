import { CompanyModel } from "@/models/userModels";
import { StyleSheet, View } from "react-native";
import { Text } from "@/components/Themed";
import { profileStyles } from "./profileStyles";

export interface CompanyBoxProps {
  company: CompanyModel;
}

const CompanyBox: React.FC<CompanyBoxProps> = ({ company }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Company</Text>
      <Text>{company.name}</Text>
    </View>
  );
};

export default CompanyBox;

const styles = profileStyles;
