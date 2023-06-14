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
import { StatisticsMiniWidget } from "../../components/Widget/StatisticsMiniWidget";

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
            <StatisticsMiniWidget
              data={visits && visits.numberOfVisits}
              title="Кол-во посещений"
              icon={<AiOutlineFundView />}
            />

            <StatisticsMiniWidget
              data={postsStatistics && postsStatistics.likesStats.quantityLikes}
              title="Кол-во лайков"
              icon={<BsFillHeartPulseFill />}
            />

            <StatisticsMiniWidget
              data={postsStatistics && postsStatistics.commentsStats.quantityComments}
              title="Кол-во комментариев"
              icon={<FaComments />}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
