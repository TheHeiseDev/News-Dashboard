import styles from "./HomePage.module.scss";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../store/store";
import { selectVisit } from "../../store/slice/visit/visitSlice";
import { fetchVisit } from "../../store/slice/visit/visitThunk";
import { selectPostsStatistics } from "../../store/slice/posts/postsStatisticsSlice";
import { fetchPostsStatistics } from "../../store/slice/posts/postsStatisticsThunk";
import { MainLayout } from "../../layouts/MainLayout";

import { StatisticsMiniWidget } from "./components/StatisticsMiniWidget/StatisticsMiniWidget";
import { StatisticsLargeWidget } from "./components/StatisticsLargeWidget/StatisticsLargeWidget";
import { StatisticsPlatformWidget } from "./components/StatisticsPlatformWidget/StatisticsPlatformWidget";
import { StatisticsCategoryWidget } from "./components/StatisticsCategoryWidget/StatisticsCategoryWidget";

import { BsFillHeartPulseFill } from "react-icons/bs";
import { AiOutlineFundView } from "react-icons/ai";
import { FaComments } from "react-icons/fa";

export const HomePage = () => {
  
  const dispatch = useAppDispatch();
  const { visits, status } = useSelector(selectVisit);
  const { postsStatistics } = useSelector(selectPostsStatistics);

  // The first time you visit the site, you retrieve data from the server.
  // In order to retrieve the actual data from the server and make a query, you need to update the page
  const fetchVisitAndPosts = useCallback(() => {
    if (!visits && !postsStatistics) {
      dispatch(fetchVisit());
      dispatch(fetchPostsStatistics());
    }
  }, [dispatch]);

  useEffect(() => {
    fetchVisitAndPosts();
  }, [fetchVisitAndPosts]);

  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.homePageWrapper}>
          <div className={styles.fistBlock}>
            <StatisticsMiniWidget
              data={visits?.numberOfVisits}
              title="Кол-во посещений"
              icon={<AiOutlineFundView />}
            />

            <StatisticsMiniWidget
              data={postsStatistics?.likesStats.quantityLikes}
              title="Кол-во лайков"
              icon={<BsFillHeartPulseFill />}
            />

            <StatisticsMiniWidget
              data={postsStatistics?.commentsStats.quantityComments}
              title="Кол-во комментариев"
              icon={<FaComments />}
            />
          </div>
          <div className={styles.secondBlock}>
            <StatisticsLargeWidget
              data={visits?.byCountry}
              title={"Статистика посещений"}
            />

            <StatisticsLargeWidget
              data={postsStatistics?.likesStats.likesByCountry}
              title={"Статистика лайков"}
            />

            <StatisticsLargeWidget
              data={postsStatistics?.commentsStats.commentsByCountry}
              title={"Статистика комментариев"}
            />
          </div>
          <div className={styles.thirdBlock}>
            <StatisticsPlatformWidget
              title="Посещения по устройствам"
              data={visits?.byDevice}
            />

            <StatisticsCategoryWidget
              title="Лайки по категориям"
              data={postsStatistics?.likesStats.likesByCategory}
            />

            <StatisticsCategoryWidget
              title="Комментарии по категориям"
              data={postsStatistics?.commentsStats.commentsByCategory}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
