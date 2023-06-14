import styles from "./HomePage.module.scss";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../store/store";
import { selectVisit } from "../../store/slice/visit/visitSlice";
import { fetchVisit } from "../../store/slice/visit/visitThunk";
import { selectPosts } from "../../store/slice/posts/postsSlice";
import { fetchPosts } from "../../store/slice/posts/postsThunk";

import { MainLayout } from "../../layouts/MainLayout";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { AiOutlineFundView } from "react-icons/ai";
import { FaComments } from "react-icons/fa";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { visits, status } = useSelector(selectVisit);
  const { postsStatistics } = useSelector(selectPosts);

  console.log(postsStatistics);

  // The first time you visit the site, you retrieve data from the server.
  // In order to retrieve the actual data from the server and make a query, you need to update the page
  const fetchVisitAndPosts = useCallback(() => {
    if (!visits && !postsStatistics) {
      dispatch(fetchVisit());
      dispatch(fetchPosts());
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
            <div className={styles.statisticsBlock}>
              <div className={styles.infoBlock}>
                <span className={styles.infoTitle}>Количество посещений</span>
                <span className={styles.infoCount}>
                  {visits ? visits.numberOfVisits : 0}
                </span>
              </div>
              <div className={styles.iconBlock}>
                <AiOutlineFundView />
              </div>
            </div>
            <div className={styles.statisticsBlock}>
              <div className={styles.infoBlock}>
                <span className={styles.infoTitle}>Количество лайков</span>
                <span className={styles.infoCount}>
                  {postsStatistics ? postsStatistics.likesStats.quantityLikes : 0}
                </span>
              </div>
              <div className={styles.iconBlock}>
                <BsFillHeartPulseFill />
              </div>
            </div>

            <div className={styles.statisticsBlock}>
              <div className={styles.infoBlock}>
                <span className={styles.infoTitle}>Количество комментариев</span>
                <span className={styles.infoCount}>
                  {postsStatistics ? postsStatistics.commentsStats.quantityComments : 0}
                </span>
              </div>
              <div className={styles.iconBlock}>
                <FaComments />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
