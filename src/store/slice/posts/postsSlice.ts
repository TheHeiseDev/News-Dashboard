import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { StatusEnum } from "../visit/visitTypes";
import { PostsSlice } from "./postsTypes";
import { fetchPosts } from "./postsThunk";
import { PostType } from "../postsStatistics/postsStatisticsTypes";

const initialState: PostsSlice = {
  posts: null,
  status: StatusEnum.loading,
};
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    updatePost: (state, action) => {
      const { id, object } = action.payload;
      if (state.posts) {
        state.posts = state.posts?.map((post) => (post.id === id ? object : post));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.posts = null;
        state.status = StatusEnum.loading;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.status = StatusEnum.success;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.posts = null;
        state.status = StatusEnum.error;
      });
  },
});

export const { updatePost } = postsSlice.actions;
export const selectPosts = (state: RootState) => state.posts;

export default postsSlice.reducer;
