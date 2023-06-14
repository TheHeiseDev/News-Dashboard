import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiService } from "../../../api/apiService";

export const fetchVisit = createAsyncThunk("visit/fetchVisit", async () => {
  const { data } = await axios({
    method: "GET",
    url: apiService.visitUrl,
  });

  return data;
});
