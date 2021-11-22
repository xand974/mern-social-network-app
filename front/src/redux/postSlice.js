import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    timelinePost: [],
    userPosts: [],
    pending: false,
    error: false,
  },
  reducers: {
    getTimelineStart: (state) => {
      state.pending = true;
    },

    getTimelineSuccess: (state, action) => {
      state.pending = true;
      state.timelinePost = action.payload;
    },
    getTimelineFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
    getCurrentUserPostsStart: (state) => {
      state.pending = true;
    },

    getCurrentUserPostsSuccess: (state, action) => {
      state.pending = true;
      state.userPosts = action.payload;
    },
    getCurrentUserPostsFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
    createPostStart: (state) => {
      state.pending = true;
    },
    createPostSuccess: (state, action) => {
      state.pending = false;
      state.timelinePost = [action.payload, ...state.timelinePost];
    },
    createPostFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
    logoutPosts: (state) => {
      state.timelinePost = [];
    },
  },
});
export default postSlice.reducer;
export const {
  getTimelineFailure,
  getTimelineStart,
  getTimelineSuccess,
  getCurrentUserPostsFailure,
  getCurrentUserPostsStart,
  getCurrentUserPostsSuccess,
  createPostFailure,
  createPostStart,
  createPostSuccess,
  logoutPosts,
} = postSlice.actions;
