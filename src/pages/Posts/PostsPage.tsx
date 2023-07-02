import styles from "./PostPage.module.scss";
import { useSelector } from "react-redux";
import { MainLayout } from "../../layouts/MainLayout";
import { useAppDispatch } from "../../store/store";
import { selectPosts } from "../../store/slice/posts/postsSlice";
import { useEffect } from "react";
import { fetchPosts } from "../../store/slice/posts/postsThunk";
import { Post } from "./components/Post/Post";

export const PostsPage = () => {
  const dispatch = useAppDispatch();
  const { posts, status } = useSelector(selectPosts);

  useEffect(() => {
    if (!posts?.length) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts]);

  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.postPageWrapper}>
          {posts?.length && posts.map((post) => <Post key={post.id} post={post} />)}
        </div>
      </div>
    </MainLayout>
  );
};
