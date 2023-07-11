import styles from "./StatisticsPage.module.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/store";
import { selectPosts } from "../../store/slice/posts/postsSlice";
import { fetchPosts } from "../../store/slice/posts/postsThunk";
import { PostType } from "../../store/slice/postsStatistics/postsStatisticsTypes";
import { MainLayout } from "../../layouts/MainLayout";
import { TopPosts } from "./components/TopPosts";
import { StatusEnum } from "../../store/slice/visit/visitTypes";
import { CircularProgress } from "@mui/material";

export const StatisticsPage = () => {
  const dispatch = useAppDispatch();
  const { posts, status } = useSelector(selectPosts);

useEffect(()=> {
window.scrollTo(0,0)
},[])

  useEffect(() => {
    if (!posts) {
      dispatch(fetchPosts({}));
    }
  }, [posts]);

  const getMostLikedPosts = (posts: PostType[]) => {
    if (!posts?.length) return [];

    const sortedPosts = [...posts].sort((a, b) => b.likes.length - a.likes.length);
    return sortedPosts.slice(0, 5);
  };

  const getMostDiscussedPosts = (posts: PostType[] | null) => {
    if (!posts?.length) return [];
    const sortedPosts = [...posts].sort((a, b) => b.comments.length - a.comments.length);
    return sortedPosts.slice(0, 5);
  };

  if (!posts) {
    return (
      <MainLayout>
        <div className={styles.page}>
          {status === StatusEnum.loading && (
            <div className={styles.loadingContainer}>
              <CircularProgress />
            </div>
          )}
          {status === StatusEnum.error && (
            <div className={styles.loadingContainer}>
              <h2>Ошибка загрузки данных. Попробуйте обновить страницу!</h2>
            </div>
          )}
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.statisticsWrapper}>
          <TopPosts posts={getMostLikedPosts(posts)} subtitle="Больше всего лайков" />
          <TopPosts
            posts={getMostDiscussedPosts(posts)}
            subtitle="Больше всего комментариев"
          />
        </div>
      </div>
    </MainLayout>
  );
};
