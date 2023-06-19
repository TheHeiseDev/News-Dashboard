import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IAuthSlice } from "./authTypes";

//Get auth data from localStorage
const authData = JSON.parse(localStorage.getItem("authData") || "{}");

const initialState: IAuthSlice = {
  user: authData || null,
  error: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    removeUser(state) {
      state.user = null;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    removeError(state) {
      state.error = null;
    },
  },

  extraReducers: (builder) => {},
});
export const { removeUser, setUser, setError, removeError } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export const selectError = (state: RootState) => state.auth.error;

export default authSlice.reducer;
