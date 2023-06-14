import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { StatusType } from "../visit/visitTypes";
import { fetchPosts } from "./postsThunk";
import { getStatisticPosts } from "../../../utils/getStatisticPosts";
import { PostsSliceInitial, Statistics } from "./postsTypes";

const initialState: PostsSliceInitial = {
  postsStatistics: null,
  status: StatusType.loading,
};
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.postsStatistics = null;
        state.status = StatusType.loading;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        if (action.payload.length) {
          const statistics: Statistics = getStatisticPosts(action.payload);
          state.postsStatistics = statistics;
        }
        state.status = StatusType.success;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.postsStatistics = null;
        state.status = StatusType.error;
      });
  },
});
// export const {} = visitSlice.actions;
export const selectPosts = (state: RootState) => state.posts;

export default postsSlice.reducer;
