import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { IoHome } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [thisPage, setThisPage] = useState("");

  function pageName(thisPage) {
    if (thisPage === "/") return "Главная";
    if (thisPage === "/statistics") return "Статистика";
    if (thisPage === "/posts") return "Посты";
    if (thisPage === "/subsribers") return "Подписчики";
  }
  useEffect(() => {
    const path = String(window.location.pathname);
    setThisPage(path);
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.navBar}>
          <h6>Dashboard</h6>
          <nav>
            <div>
              <div className={styles.navIcon}>
                <IoHome onClick={() => navigate("/")}/>
              </div>
              /<div className={styles.navLinkText}>{pageName(thisPage)}</div>
            </div>
          </nav>
        </div>
        <div className={styles.headerActions}>
          <div className={styles.auth}>
            <div className={styles.authImage}>
              <RiAdminFill />
            </div>
            <div className={styles.authText}>Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
};
