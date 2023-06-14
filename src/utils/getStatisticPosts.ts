import {
  CommentsByCategory,
  CommentsByCountry,
  LikesByCategory,
  LikesByCountry,
  PostType,
  Statistics,
} from "../store/slice/posts/postsTypes";

interface ILikesStatistics {
  quantityLikes: number;
  likesByCountry: LikesByCountry[];
  likesByCategory: LikesByCategory[];
}

interface ICommentsStatistics {
  quantityComments: number;
  commentsByCountry: CommentsByCountry[];
  commentsByCategory: CommentsByCategory[];
}

export function getStatisticPosts(posts: PostType[]) {
  return {
    quantityPosts: getQuantityPosts(posts),
    likesStats: getLikesStats(posts),
    commentsStats: getCommentsStats(posts),
  } as Statistics;
}

function getQuantityPosts(posts: PostType[]) {
  return posts.length;
}

function getCommentsStats(posts: PostType[]) {
  const commentsStatistics: ICommentsStatistics = {
    quantityComments: 0,
    commentsByCountry: [],
    commentsByCategory: [],
  };

  posts.forEach((post) => {
    if (post.comments.length > 0) {
      post.comments.forEach((comment) => {
        commentsStatistics.quantityComments += 1;

        const countryIndex = commentsStatistics.commentsByCountry.findIndex(
          (el: CommentsByCountry) => el.country === comment.country
        );

        if (countryIndex === -1) {
          commentsStatistics.commentsByCountry.push({
            //@ts-ignore
            country: comment.country,
            quantity: 1,
          });
        } else {
          commentsStatistics.commentsByCountry[countryIndex].quantity += 1;
        }

        const categoryIndex = commentsStatistics.commentsByCategory.findIndex(
          (el) => el.category === post.category
        );

        if (categoryIndex === -1) {
          commentsStatistics.commentsByCategory.push({
            category: post.category,
            quantity: 1,
          });
        } else {
          commentsStatistics.commentsByCategory[categoryIndex].quantity += 1;
        }
      });
    }
  });

  return commentsStatistics;
}

function getLikesStats(posts: PostType[]) {
  const likesStatistics: ILikesStatistics = {
    quantityLikes: 0,
    likesByCountry: [],
    likesByCategory: [],
  };

  posts.forEach((post) => {
    if (post.likes.length > 0) {
      post.likes.forEach((like) => {
        likesStatistics.quantityLikes += 1;

        const countryIndex = likesStatistics.likesByCountry.findIndex(
          (el) => el.country === like.country
        );

        if (countryIndex === -1) {
          likesStatistics.likesByCountry.push({
            country: like.country,
            quantity: 1,
          });
        } else {
          likesStatistics.likesByCountry[countryIndex].quantity += 1;
        }

        const categoryIndex = likesStatistics.likesByCategory.findIndex(
          (el) => el.category === post.category
        );

        if (categoryIndex === -1) {
          likesStatistics.likesByCategory.push({
            category: post.category,
            quantity: 1,
          });
        } else {
          likesStatistics.likesByCategory[categoryIndex].quantity += 1;
        }
      });
    }
  });

  return likesStatistics;
}
