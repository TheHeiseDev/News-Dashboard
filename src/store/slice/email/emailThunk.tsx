import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiService } from "../../../api/apiService";
import { Email } from "./emailTypes";

export const fetchSubscribers = createAsyncThunk("email/fetchSubscribers", async () => {
  const { data } = await axios<Email[]>({
    method: "GET",
    url: apiService.emailUrl,
  });

  return data;
});
