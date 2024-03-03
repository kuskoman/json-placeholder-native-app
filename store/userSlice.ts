import { UserLoginData } from "@/models/userModels";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  user: UserLoginData | null;
}

const getUserFromLocalStorage = async (): Promise<UserState["user"]> => {
  const user = await AsyncStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

const setUserToLocalStorage = async (user: UserLoginData) => {
  AsyncStorage.setItem("user", JSON.stringify(user));
};

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserLoginData>) => {
      setUserToLocalStorage(action.payload);
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    setInitialUser: (state) => {
      getUserFromLocalStorage().then((user) => {
        if (user) {
          state.user = user;
        }
      });
    },
  },
});

export const { setUser, clearUser, setInitialUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
