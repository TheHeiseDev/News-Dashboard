import { AsideBar } from "../components/AsideBar/AsideBar";
import { Header } from "../components/Header/Header";
import styles from "./MainLayout.module.scss";

export const MainLayout = ({ children }) => {
  return (
    <div className={styles.mainWrapper}>
      <AsideBar />
      <main>
        <Header />
        {children}
      </main>
    </div>
  );
};
