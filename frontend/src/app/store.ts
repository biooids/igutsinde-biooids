import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme/themeSlice";
import userSlice from "./user/userSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
