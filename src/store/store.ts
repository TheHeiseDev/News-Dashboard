import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import visitSlice from "./slice/visit/visitSlice";
import authSlice from "./slice/auth/authSlice";
import postsSlice from "./slice/postsStatistics/postsSlice";
import postsStatisticsSlice from "./slice/posts/postsStatisticsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    visit: visitSlice,
    posts: postsSlice,
    postsStatistics: postsStatisticsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
