import { openRequest } from "helpers/axios";
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
} from "./userSlice";

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
    localStorage.removeItem("user");
    navigate("/login");
  } catch (error) {
    console.log(error);
    dispatch(logoutFailure());
  }
};
