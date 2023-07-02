import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiService } from "../../../api/apiService";
import { PostType } from "../postsStatistics/postsStatisticsTypes";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await axios<PostType[]>({
    method: "GET",
    url: apiService.baseUrl,
  });

  return data;
});

type UpdatePostParams = {
  id: string;
  object: PostType;
};

export const fetchUpdatePost = createAsyncThunk(
  "posts/fetchUpdatePost",
  async ({ id, object }: UpdatePostParams) => {
    const { data } = await axios.put(`${apiService.baseUrl}/${id}`, object);

    return data;
  }
);
