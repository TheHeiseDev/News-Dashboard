import { MainLayout } from "../../layouts/MainLayout";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <MainLayout>
      <div className={styles.page}>
        <h1>Home</h1>
      </div>
    </MainLayout>
  );
};
