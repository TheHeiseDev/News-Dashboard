import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiService } from "../../../api/apiService";

type ParamsType = {};

export const fetchVisit = createAsyncThunk(
  "visit/fetchVisit",
  async (params: ParamsType) => {
    // const { date, country, device, os,ip } = params;

    const { data } = await axios({
      method: "POST",
      url: apiService.visitUrl,
      params: {},
      data: params,
    });

    return data;
  }
);
