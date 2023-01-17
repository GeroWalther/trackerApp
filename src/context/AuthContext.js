import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { useEffect } from "react";
const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // try to signe in
    // handle success by updating state
    // handle failure by showing error message
  };
};
const signout = (dispatch) => {
  return () => {
    // singeout
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signout, signin },
  { isSignedIn: false }
);
