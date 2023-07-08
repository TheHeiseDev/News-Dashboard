const posts = [];

const getMostLikedPosts = (selectPosts) => {
  if (!posts.length) return "sds";
  const sortedPosts = posts.sort((a, b) => b.likes.length - a.likes.length);
  return sortedPosts.slice(0, 5);
};

const sorted = getMostLikedPosts(posts);

console.log(sorted);
