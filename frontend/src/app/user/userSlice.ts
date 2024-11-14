import { createSlice } from "@reduxjs/toolkit";

type UserData = {
  success: boolean;
  message: string;
  user: User;
};

type User = {
  userName: string;
  isAdmin: boolean;
  phone: string;
  paid: boolean;
  profilePic: string;
};

type UserState = {
  currentUser: UserData | null;
  loading: boolean;
  error: string | null;
};

const initialState: UserState = {
  currentUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    actionStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    actionSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    actionFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actionStart, actionSuccess, actionFailure } = userSlice.actions;

export default userSlice.reducer;
