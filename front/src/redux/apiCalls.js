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
  likePost,
  logoutPosts,
} from "./postSlice";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  registerFailure,
  registerStart,
  registerSuccess,
  logoutSuccess,
  logoutStart,
  logoutFailure,
  getSearchUsersStart,
  getSearchUsersSuccess,
  getSearchUsersFailure,
  getUserFriendsStart,
  getUserFriendsSuccess,
  getUserFriendsFailure,
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
export const register = async (credentials, navigate, dispatch) => {
  dispatch(registerStart());
  try {
    openRequest.post("/auth/register", credentials).then(() => {
      navigate("/login");
      dispatch(registerSuccess());
    });
  } catch (error) {
    dispatch(registerFailure());
  }
};

export const logout = (dispatch, navigate) => {
  dispatch(logoutStart());
  try {
    dispatch(logoutSuccess());
    dispatch(logoutPosts());
    localStorage.removeItem("user");
    navigate("/login");
  } catch (error) {
    console.log(error);
    dispatch(logoutFailure());
  }
};
//#endregion

//#region posts crud op

//create
export const createPost = async (post, dispatch) => {
  dispatch(createPostStart());
  try {
    const res = await privateRequest.post("/posts/add", post);
    dispatch(createPostSuccess(res.data));
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

export const like = async (dispatch) => {
  try {
    //request
    dispatch(likePost());
  } catch (error) {
    console.log(error);
  }
};
export const dislike = (dispatch) => {
  try {
    //request
    dispatch();
  } catch (error) {
    console.log(error);
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
    console.log(error);
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
    console.log(error);
  }
};

export const getUserFriends = async (dispatch, userId) => {
  dispatch(getUserFriendsStart());
  try {
    const res = await privateRequest.get(`/users/${userId}/friends`);
    dispatch(getUserFriendsSuccess(res.data));
  } catch (error) {
    dispatch(getUserFriendsFailure());
  }
};
export const handleAddFriend = async (dispatch, userId) => {
  try {
    await privateRequest.put("/users/follow/" + userId, userId);
    dispatch(addFriend(userId));
  } catch (error) {
    console.log(error);
  }
};
export const handleRemoveFriend = async (dispatch, userId) => {
  try {
    await privateRequest.put("/users/follow/" + userId, userId);
    dispatch(removeFriend(userId));
  } catch (error) {
    console.log(error);
  }
};
//#endregion
