import { openRequest, privateRequest } from "helpers/axios";
import {
  createPostFailure,
  createPostStart,
  createPostSuccess,
  getTimelineFailure,
  getTimelineStart,
  getTimelineSuccess,
  getCurrentUserPostsFailure,
  getCurrentUserPostsStart,
  getCurrentUserPostsSuccess,
  logoutPosts,
  removePost as remove,
} from "./postSlice";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutStart,
  logoutFailure,
  getSearchUsersStart,
  getSearchUsersSuccess,
  getSearchUsersFailure,
  getUserFriendsSuccess,
  addFriend,
  removeFriend,
} from "./userSlice";

//#region login and register
export const login = async (credentials, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await openRequest.post("/auth/login", credentials);
    dispatch(loginSuccess(res.data));
    localStorage.setItem("user", JSON.stringify(res.data));
    navigate("/");
  } catch (error) {
    dispatch(loginFailure());
  }
};
export const register = async (credentials, navigate) => {
  try {
    await openRequest.post("/auth/register", credentials);
    navigate("/login");
  } catch (error) {
    throw error;
  }
};

export const signOut = (dispatch, navigate = null, canNavigate) => {
  dispatch(logoutStart());
  try {
    dispatch(logoutSuccess());
    dispatch(logoutPosts());
    if (canNavigate) {
      navigate("/login");
    }
  } catch (error) {
    dispatch(logoutFailure());
    throw error;
  }
};
//#endregion

//#region posts crud op

//create
export const createPost = async (post, dispatch, setNewPost) => {
  dispatch(createPostStart());
  try {
    const res = await privateRequest.post("/posts/add", post);
    dispatch(createPostSuccess(res.data));
    setNewPost("");
  } catch (error) {
    dispatch(createPostFailure());
  }
};

//get timeline
export const getTimeLine = async (dispatch) => {
  dispatch(getTimelineStart());
  try {
    const res = await privateRequest.get("/posts/feed");
    dispatch(getTimelineSuccess(res.data));
  } catch (error) {
    dispatch(getTimelineFailure());
  }
};

//get all current user's posts
export const getCurrentUserPosts = async (dispatch) => {
  dispatch(getCurrentUserPostsStart());
  try {
    const res = await privateRequest.get("/posts/all");
    dispatch(getCurrentUserPostsSuccess(res.data));
  } catch (error) {
    dispatch(getCurrentUserPostsFailure());
  }
};

export const getProfileUserPosts = async (userId, setPosts) => {
  try {
    const res = await privateRequest.get("/posts/all/" + userId);
    setPosts(res.data);
  } catch (error) {
    throw error;
  }
};
export const like = async (userId, postId) => {
  try {
    await privateRequest.put("/posts/like/" + postId, { userId });
  } catch (error) {
    throw error;
  }
};
export const addComment = async (comment, postId, userId, setComment) => {
  try {
    await privateRequest.put("/posts/comment/" + postId, { comment, userId });
    setComment("");
  } catch (error) {
    throw error;
  }
};
//#endregion

//#region user crud op

//search user
export const getSearchRequest = async (dispatch, searchQuery) => {
  dispatch(getSearchUsersStart());
  try {
    const res = await privateRequest.get(
      `/users/search?search_query=${searchQuery}`
    );
    dispatch(getSearchUsersSuccess(res.data));
  } catch (error) {
    dispatch(getSearchUsersFailure());
  }
};

export const getUser = async (userId, setUser) => {
  try {
    const res = await privateRequest.get(`/users/one?userId=${userId}`);
    setUser(res.data);
  } catch (error) {
    throw error;
  }
};

export const getUserFriends = async (dispatch, userId) => {
  try {
    const res = await privateRequest.get(`/users/${userId}/friends`);
    dispatch(getUserFriendsSuccess(res.data));
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const handleAddFriend = async (dispatch, userId) => {
  try {
    await privateRequest.put("/users/follow/" + userId, userId);
    dispatch(addFriend(userId));
  } catch (error) {
    throw error;
  }
};

export const handleRemoveFriend = async (dispatch, userId) => {
  try {
    await privateRequest.put("/users/unfollow/" + userId, userId);
    dispatch(removeFriend(userId));
  } catch (error) {
    throw error;
  }
};

export const removePost = async (dispatch, postId, userId) => {
  try {
    if (!userId) return;
    await privateRequest.post("/posts/remove/" + postId, { id: userId });
    dispatch(remove({ id: postId }));
  } catch (error) {
    throw error;
  }
};
//#endregion
