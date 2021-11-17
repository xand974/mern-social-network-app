import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null || JSON.parse(localStorage.getItem("user")),
    pending: false,
    error: false,
    searchUsers: [],
    friends: [],
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
      state.searchUsers = [];
      state.friends = [];
    },
    logoutFailure: (state) => {
      state.error = true;
      state.pending = false;
    },
    getSearchUsersStart: (state) => {
      state.pending = true;
    },

    getSearchUsersSuccess: (state, action) => {
      state.pending = true;
      state.searchUsers = action.payload;
    },
    getSearchUsersFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
    getUserFriendsStart: (state) => {
      state.pending = true;
    },

    getUserFriendsSuccess: (state, action) => {
      state.pending = true;
      state.currentUser.user.friends = action.payload;
    },
    getUserFriendsFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
    addFriendStart: (state) => {
      state.pending = true;
    },
    addFriendSuccess: (state, action) => {
      state.currentUser.user.friends = [
        ...state.currentUser.user.friends,
        action.payload,
      ];
    },
    addFriendFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
    removeFriendStart: (state) => {
      state.pending = true;
    },
    removeFriendSuccess: (state, action) => {
      state.currentUser.user.filter((friendId) => friendId !== action.payload);
    },
    removeFriendFailure: (state) => {
      state.pending = false;
      state.error = true;
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
  getSearchUsersFailure,
  getSearchUsersStart,
  getSearchUsersSuccess,
  getUserFriendsFailure,
  getUserFriendsStart,
  getUserFriendsSuccess,
  addFriendFailure,
  addFriendStart,
  addFriendSuccess,
  removeFriendFailure,
  removeFriendStart,
  removeFriendSuccess,
} = userSlice.actions;
