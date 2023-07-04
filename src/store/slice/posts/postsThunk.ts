import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiService } from "../../../api/apiService";
import { PostType, PostTypeWithoutId } from "../postsStatistics/postsStatisticsTypes";

type ParamsType = {
  searchValue?: string;
  sortBy?: string;
  order?: string;
};
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (params: ParamsType) => {
    const { data } = await axios<PostType[]>({
      method: "GET",
      url: apiService.baseUrl,
      params: {
        search: params?.searchValue,
        sortBy: params?.sortBy,
        order: params?.order,
      },
    });

    return data;
  }
);

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

export const fetchAddPost = createAsyncThunk(
  "posts/fetchAddPost",
  async (post: PostTypeWithoutId) => {
    const { data } = await axios<PostType>({
      method: "POST",
      url: apiService.baseUrl,
      data: post,
    });

    return data;
  }
);
