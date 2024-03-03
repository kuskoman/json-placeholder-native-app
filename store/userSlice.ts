import { UserLoginData } from "@/models/userModels";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  user: UserLoginData | null;
}

// not a real storage, just a placeholder
const storage = (() => {
  const data: Record<string, string> = {};
  return {
    getItem: (key: string) => data[key],
    setItem: (key: string, value: string) => {
      data[key] = value;
    },
  };
})();

const getUserFromLocalStorage = (): UserState["user"] => {
  const user = storage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

const setUserToLocalStorage = async (user: UserLoginData) => {
  storage.setItem("user", JSON.stringify(user));
};

const initialState: UserState = {
  user: getUserFromLocalStorage(), // does not do anything, as storage is not real
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
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
