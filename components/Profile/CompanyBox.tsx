import { CompanyModel } from "@/models/userModels";
import { StyleSheet, View } from "react-native";
import { Text } from "@/components/Themed";

export interface CompanyBoxProps {
  company: CompanyModel;
}

const CompanyBox: React.FC<CompanyBoxProps> = ({ company }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Company</Text>
      <Text>{company.name}</Text>
      <Text>{company.catchPhrase}</Text>
      <Text>{company.bs}</Text>
    </View>
  );
};

export default CompanyBox;

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
});
