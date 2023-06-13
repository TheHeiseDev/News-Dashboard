import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../../store";
// import { VisitType } from "./visitTypes";
// import { fetchAllVisitByDate, fetchVisit } from "./visitThunk";

// const initialState: VisitType = {
//   visitItem: null,
//   visitByDate: null,
// };
// export const visitSlice = createSlice({
//   name: "visit",
//   initialState,
//   reducers: {},

//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchVisit.pending, (state) => {})

//       .addCase(fetchVisit.fulfilled, (state, action) => {
//         state.visitItem = action.payload;
//       })
//       .addCase(fetchVisit.rejected, (state) => {
//         state.visitItem = null;
//       })
//       .addCase(fetchAllVisitByDate.pending, (state) => {})

//       .addCase(fetchAllVisitByDate.fulfilled, (state, action) => {
//         state.visitByDate = action.payload;
//       })
//       .addCase(fetchAllVisitByDate.rejected, (state) => {
//         state.visitByDate = null;
//       });
//   },
// });
// export const {} = visitSlice.actions;
// export const selectVisit = (state: RootState) => state.visit.visitByDate;

// export default visitSlice.reducer;
