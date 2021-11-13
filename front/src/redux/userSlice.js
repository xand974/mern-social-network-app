import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: { id: 1, username: "malet" },
    pending: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.pending = true;
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.pending = false;
    },
    loginFailure: (state) => {
      state.error = true;
      state.pending = false;
    },
  },
});

export default userSlice.reducer;
export const { loginFailure, loginStart, loginSuccess } = userSlice.actions;
