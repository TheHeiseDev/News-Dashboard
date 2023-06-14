import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { StatusEnum, VisitSliceInitial, VisitStatisticsType } from "./visitTypes";
import { fetchVisit } from "./visitThunk";

const initialState: VisitSliceInitial = {
  visits: null,
  status: StatusEnum.loading,
};
export const visitSlice = createSlice({
  name: "visit",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchVisit.pending, (state) => {
        state.visits = null;
        state.status = StatusEnum.loading;
      })
      .addCase(fetchVisit.fulfilled, (state, action) => {
        const statistics: VisitStatisticsType = action.payload.reduce(
          (acc: VisitStatisticsType, visit: any) => {
            acc.numberOfVisits++;

            const countryIndex = acc.byCountry.findIndex(
              (country) => country.country === visit.country
            );
            if (countryIndex !== -1) {
              acc.byCountry[countryIndex].quantity++;
            } else {
              acc.byCountry.push({ country: visit.country, quantity: 1 });
            }

            const deviceIndex = acc.byDevice.findIndex(
              (device) => device.platform === visit.device
            );
            if (deviceIndex !== -1) {
              acc.byDevice[deviceIndex].quantity++;
            } else {
              acc.byDevice.push({ platform: visit.device, quantity: 1 });
            }

            return acc;
          },
          { numberOfVisits: 0, byCountry: [], byDevice: [] }
        );
        state.visits = statistics;
        state.status = StatusEnum.success;
      })
      .addCase(fetchVisit.rejected, (state) => {
        state.visits = null;
        state.status = StatusEnum.error;
      });
  },
});

// export const {} = visitSlice.actions;
export const selectVisit = (state: RootState) => state.visit;

export default visitSlice.reducer;
