import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import authSlice from "./slice/auth/authSlice";
import visitSlice from "./slice/visit/visitSlice";
import postsSlice from "./slice/posts/postsSlice";
import postsStatisticsSlice from "./slice/postsStatistics/postsStatisticsSlice";
import emailSlice from "./slice/email/emailSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    visit: visitSlice,
    posts: postsSlice,
    postsStatistics: postsStatisticsSlice,
    email: emailSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
