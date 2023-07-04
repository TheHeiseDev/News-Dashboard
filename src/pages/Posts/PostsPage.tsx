import styles from "./PostPage.module.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/store";
import { fetchPosts } from "../../store/slice/posts/postsThunk";
import { selectPosts } from "../../store/slice/posts/postsSlice";
import { PostType } from "../../store/slice/postsStatistics/postsStatisticsTypes";
import { MainLayout } from "../../layouts/MainLayout";
import { Post } from "./components/Post/Post";
import { Search } from "../../components/Search/Search";
import { FiFolder } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";



export const PostsPage = () => {
  const dispatch = useAppDispatch();
  const { posts } = useSelector(selectPosts);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    dispatch(fetchPosts({}));
  }, [dispatch]);

  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.postPageWrapper}>
          <div className={styles.postPageActions}>
            <h1 className={styles.title}>
              <FiFolder /> Контент
            </h1>

            <div className={styles.searchContainer}>
              <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>

            <div className={styles.postsCount}>
              <FiTrendingUp /> <span>Кол-во постов: {posts?.length}</span>
            </div>
          </div>
          {posts?.length && posts.map((post: PostType) => <Post key={post.id} post={post} />)}
        </div>
      </div>
    </MainLayout>
  );
};
