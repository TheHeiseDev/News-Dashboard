export function getStatisticPosts(posts) {
  const statistics = {
    quantityPosts: posts.length,
    quantityLikes: 0,
    quantityComments: 0,
    commentsByCountry: [],
    commentsByCategory: [],
    likesByCountry: [],
    likesByCategory: [],
  };

  // Подсчет счетчиков для каждого свойства
  posts.forEach((post) => {
    // Считаем количество лайков
    if (post.likes.length > 0) {
      post.likes.forEach((like) => {
        statistics.quantityLikes += 1;

        // Добавляем количество лайков по странам
        const countryIndex = statistics.likesByCountry.findIndex(
          (el) => el.country === like.country
        );
        if (countryIndex === -1) {
          statistics.likesByCountry.push({
            country: like.country,
            quantity: 1,
          });
        } else {
          statistics.likesByCountry[countryIndex].quantity += 1;
        }

        // Добавляем количество лайков по категориям
        const categoryIndex = statistics.likesByCategory.findIndex(
          (el) => el.category === post.category
        );
        if (categoryIndex === -1) {
          statistics.likesByCategory.push({
            category: post.category,
            quantity: 1,
          });
        } else {
          statistics.likesByCategory[categoryIndex].quantity += 1;
        }
      });
    }

    // Считаем количество комментариев
    if (post.comments.length > 0) {
      post.comments.forEach((comment) => {
        statistics.quantityComments += 1;

        // Добавляем количество комментариев по странам
        const countryIndex = statistics.commentsByCountry.findIndex(
          (el) => el.country === comment.country
        );
        if (countryIndex === -1) {
          statistics.commentsByCountry.push({
            country: comment.country,
            quantity: 1,
          });
        } else {
          statistics.commentsByCountry[countryIndex].quantity += 1;
        }

        // Добавляем количество комментариев по категориям
        const categoryIndex = statistics.commentsByCategory.findIndex(
          (el) => el.category === post.category
        );
        if (categoryIndex === -1) {
          statistics.commentsByCategory.push({
            category: post.category,
            quantity: 1,
          });
        } else {
          statistics.commentsByCategory[categoryIndex].quantity += 1;
        }
      });
    }
  });

  return statistics;
}
