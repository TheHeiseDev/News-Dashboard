import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IAuthSlice } from "./authTypes";

const initialState: IAuthSlice = {
  id: null,
  email: null,
  token: null,
  error: null,
  role: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {},
});
export const {} = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
