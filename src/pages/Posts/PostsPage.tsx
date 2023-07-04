import styles from "./PostPage.module.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/store";
import { fetchPosts } from "../../store/slice/posts/postsThunk";
import { selectPosts } from "../../store/slice/posts/postsSlice";
import { PostType } from "../../store/slice/postsStatistics/postsStatisticsTypes";
import { MainLayout } from "../../layouts/MainLayout";
import { Post } from "./components/Post/Post";
import { Search } from "../../components/UI/Search/Search";
import { FiFolder } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
import { MdPostAdd } from "react-icons/md";
import { ModalAddPost } from "../../modulars/ModalAddPost/ModalAddPost";

export const PostsPage = () => {
  const dispatch = useAppDispatch();
  const { posts } = useSelector(selectPosts);
  const [searchValue, setSearchValue] = useState("");
  const [isOpenAdd, setIsOpenAdd] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchPosts({ sortBy: "date", order: "desc" }));
  }, [dispatch]);

  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.postPageWrapper}>
          <div className={styles.postPageActions}>
            <h1 className={styles.title}>
              <FiFolder /> Контент
            </h1>
            <button className={styles.addPost} onClick={() => setIsOpenAdd(true)}>
              <MdPostAdd />
            </button>
            <div className={styles.searchContainer}>
              <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>

            <div className={styles.postsCount}>
              <FiTrendingUp /> <span>Кол-во постов: {posts?.length}</span>
            </div>
          </div>
          {posts?.length ? (
            posts.map((post: PostType) => <Post key={post.id} post={post} />)
          ) : (
            <h1>Нет постов</h1>
          )}
        </div>
      </div>
      {isOpenAdd && <ModalAddPost setActive={setIsOpenAdd} />}
    </MainLayout>
  );
};
