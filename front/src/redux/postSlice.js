import { createSlice, current } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    timelinePost: [],
    pending: false,
    error: false,
  },
  reducers: {
    addCommentPost: (state, action) => {
      const timelinePosts = current(state.timelinePost);
      const posts = timelinePosts.map((item) => {
        if (item._id === action.payload.id) {
          return {
            ...item,
            comments: [...item.comments, action.payload.comment],
          };
        }
        return item;
      });
      return {
        ...state,
        timelinePost: posts,
      };
    },
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
    removePost: (state, action) => {
      const posts = current(state.timelinePost);
      const filtered = posts.filter((item) => item._id !== action.payload.id);
      return {
        ...state,
        timelinePost: filtered,
      };
    },
    like: (state, action) => {
      const posts = current(state.timelinePost);
      const newPosts = posts.map((item) => {
        if (item._id === action.payload.id) {
          const likes =
            item.likes.some((like) => like === action.payload.userId) ?? null;
          if (!likes)
            return {
              ...item,
              likes: [...item.likes, action.payload.userId],
            };

          const newLikes = item.likes.filter(
            (like) => like !== action.payload.userId
          );
          return {
            ...item,
            likes: newLikes,
          };
        }
        return item;
      });
      return {
        ...state,
        timelinePost: newPosts,
      };
    },
  },
});
export default postSlice.reducer;
export const {
  getTimelineFailure,
  getTimelineStart,
  getTimelineSuccess,
  createPostFailure,
  createPostStart,
  createPostSuccess,
  removePost,
  logoutPosts,
  addCommentPost,
  like,
} = postSlice.actions;
