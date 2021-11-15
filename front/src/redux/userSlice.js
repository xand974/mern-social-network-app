import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null || JSON.parse(localStorage.getItem("user")),
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
    registerStart: (state) => {
      state.pending = true;
    },
    registerSuccess: (state) => {
      state.pending = false;
    },
    registerFailure: (state) => {
      state.error = true;
      state.pending = false;
    },
    logoutStart: (state) => {
      state.pending = true;
    },
    logoutSuccess: (state) => {
      state.currentUser = null;
      state.pending = false;
    },
    logoutFailure: (state) => {
      state.error = true;
      state.pending = false;
    },
  },
});

export default userSlice.reducer;
export const {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
  logoutSuccess,
  logoutFailure,
  logoutStart,
} = userSlice.actions;
