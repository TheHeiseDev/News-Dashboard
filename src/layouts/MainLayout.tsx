import styles from "./MainLayout.module.scss";
import { AsideBar } from "../components/AsideBar/AsideBar";
import { Header } from "../components/Header/Header";
import { FC, ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
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
