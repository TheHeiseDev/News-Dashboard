import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { StatusEnum } from "../visit/visitTypes";
import { fetchPostsStatistics } from "./postsStatisticsThunk";
import { getStatisticPosts } from "../../../shared/helpers/getStatisticPosts";
import { PostsSliceInitial, Statistics } from "./postsStatisticsTypes";

const initialState: PostsSliceInitial = {
  postsStatistics: null,
  status: StatusEnum.loading,
};
export const postsStatisticsSlice = createSlice({
  name: "postsStatistics",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsStatistics.pending, (state) => {
        state.postsStatistics = null;
        state.status = StatusEnum.loading;
      })
      .addCase(fetchPostsStatistics.fulfilled, (state, action) => {
        if (action.payload.length) {
          const statistics: Statistics = getStatisticPosts(action.payload);
          state.postsStatistics = statistics;
        }
        state.status = StatusEnum.success;
      })
      .addCase(fetchPostsStatistics.rejected, (state) => {
        state.postsStatistics = null;
        state.status = StatusEnum.error;
      });
  },
});

// export const {} = visitSlice.actions;
export const selectPostsStatistics = (state: RootState) => state.postsStatistics;

export default postsStatisticsSlice.reducer;
