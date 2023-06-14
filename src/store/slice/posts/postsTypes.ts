import { StatusType } from "../visit/visitTypes";

export type LikesType = {
  ip: string;
  country: string;
};

export type PostsSliceInitial = {
  postsStatistics: Statistics | null;
  status: StatusType;
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
export  interface Statistics {
  quantityPosts: number;
  quantityLikes: number;
  quantityComments: number;
  commentsByCountry: CommentsByCountry[];
  commentsByCategory: CommentsByCategory[];
  likesByCountry: LikesByCountry[];
  likesByCategory: LikesByCategory[];
}
type CommentsByCountry = { country: string; quantity: number };
type CommentsByCategory = { category: string; quantity: number };
type LikesByCountry = { country: string; quantity: number };
type LikesByCategory = { category: string; quantity: number };
