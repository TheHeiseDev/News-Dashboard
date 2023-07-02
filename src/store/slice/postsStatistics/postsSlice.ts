import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { StatusEnum } from "../visit/visitTypes";
import { PostsSlice } from "./postsTypes";
import { fetchPosts } from "./postsThunk";

const initialState: PostsSlice = {
  posts: null,
  status: StatusEnum.loading,
};
export const postsStatisticsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},

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

// export const {} = visitSlice.actions;
export const selectPostsStatistics = (state: RootState) => state.postsStatistics;

export default postsStatisticsSlice.reducer;
