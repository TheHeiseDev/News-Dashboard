import { StatusEnum } from "../visit/visitTypes";

export type PostsStatisticsSlice = {
  postsStatistics: Statistics | null;
  status: StatusEnum;
};
export type PostType = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  views: number;
  comments: CommentsType[];
  date: number;
  likes: LikesType[];
  category: string;
  link: string;
};
export type CommentsType = {
  id: string;
  userName: string;
  text: string;
  date: string;
  country?: string;
};
export type LikesType = {
  ip: string;
  country: string;
};
export interface Statistics {
  quantityPosts: number;
  likesStats: {
    quantityLikes: number;
    likesByCountry: LikesByCountry[];
    likesByCategory: LikesByCategory[];
  };
  commentsStats: {
    quantityComments: number;
    commentsByCountry: CommentsByCountry[];
    commentsByCategory: CommentsByCategory[];
  };
}

export type CommentsByCountry = { country: string; quantity: number };
export type CommentsByCategory = { category: string; quantity: number };
export type LikesByCountry = { country: string; quantity: number };
export type LikesByCategory = { category: string; quantity: number };
