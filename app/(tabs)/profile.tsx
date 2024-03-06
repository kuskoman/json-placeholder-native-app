import AddressBox from "@/components/Profile/AddressBox";
import CompanyBox from "@/components/Profile/CompanyBox";
import UserProfile from "@/components/Profile/UserProfile";
import { View } from "@/components/Themed";
import { UserModel } from "@/models/userModels";
import { UsersService } from "@/services/usersService";
import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";

const ProfileScreen: React.FC = () => {
  const usersService = new UsersService();
  const TOTALLY_LEGIT_USER_ID = 1;

  const [user, setUser] = useState<UserModel | null>(null);

  const fetchUser = async () => {
    const user = await usersService.getUser(TOTALLY_LEGIT_USER_ID);
    setUser(user);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <View style={styles.container}>
      {user ? (
        <View>
          <UserProfile user={user} />
          <CompanyBox company={user.company} />
          <AddressBox address={user.address} />
        </View>
      ) : null}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
});
