import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiService } from "../../../api/apiService";
import { PostType } from "./postsTypes";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await axios<PostType[]>({
    method: "GET",
    url: apiService.baseUrl,
  });

  return data;
});
