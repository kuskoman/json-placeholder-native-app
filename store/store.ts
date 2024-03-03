import { configureStore } from "@reduxjs/toolkit";
import { notificationReducer } from "./notificationSlice";
import { setInitialUser, userReducer } from "./userSlice";

export const store = configureStore({
  reducer: {
    notification: notificationReducer,
    user: userReducer,
  },
});

store.dispatch(setInitialUser());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
