import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { fetchSubscribers } from "./emailThunk";
import { EmailInitial } from "./emailTypes";
import { StatusEnum } from "../visit/visitTypes";

const initialState: EmailInitial = {
  email: null,
  status: StatusEnum.loading,
};
export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchSubscribers.pending, (state) => {
        state.status = StatusEnum.loading;
        state.email = null;
      })
      .addCase(fetchSubscribers.fulfilled, (state, action) => {
        state.status = StatusEnum.success;
        state.email = action.payload;
      })
      .addCase(fetchSubscribers.rejected, (state) => {
        state.status = StatusEnum.error;
        state.email = null;
      });
  },
});
// export const {} = emailSlice.actions;
export const selectEmails = (state: RootState) => state.email;

export default emailSlice.reducer;
