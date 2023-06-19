import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import visitSlice from "./slice/visit/visitSlice";
import postsSlice from "./slice/posts/postsSlice";
import authSlice from "./slice/auth/authSlice";

export const store = configureStore({
  reducer: {
    visit: visitSlice,
    posts: postsSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
