import { MainLayout } from "../../layouts/MainLayout";
import styles from "./PostPage.module.scss";

export const PostsPage = () => {
  return (
    <MainLayout>
    <div className={styles.page}>
      <h1>PostsPage</h1>
    </div>
  </MainLayout>
  );
};