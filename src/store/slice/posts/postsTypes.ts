import { PostType } from "../postsStatistics/postsStatisticsTypes";
import { StatusEnum } from "../visit/visitTypes";

export type PostsSlice = {
  posts: PostType[] | null;
  status: StatusEnum;
};
