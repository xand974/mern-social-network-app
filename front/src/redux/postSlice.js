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
    likePost: (state, action) => {
      state.timelinePost
        .find((post) => post._id === action.payload.postId)
        .push(action.payload.userId);
    },
    dilikePost: (state, action) => {},
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
    getUserPostsStart: (state) => {
      state.pending = true;
    },

    getUserPostsSuccess: (state, action) => {
      state.pending = true;
      state.userPosts = action.payload;
    },
    getUserPostsFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
    createPostStart: (state) => {
      state.pending = true;
    },
    createPostSuccess: (state, action) => {
      state.pending = false;
      state.timelinePost.push(action.payload);
    },
    createPostFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});
export default postSlice.reducer;
export const {
  getTimelineFailure,
  getTimelineStart,
  getTimelineSuccess,
  getUserPostsFailure,
  getUserPostsStart,
  getUserPostsSuccess,
  createPostFailure,
  createPostStart,
  createPostSuccess,
  likePost,
} = postSlice.actions;
