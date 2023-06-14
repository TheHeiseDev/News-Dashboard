import styles from "./AsideBar.module.scss";

import { menuList } from "../../utils/constants/menuList";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const AsideBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();

  const navigatePageHandle = (path) => {
    setActiveLink(path);
    navigate(path);
  };

  useEffect(() => {
    const path = String(window.location.pathname);
    setActiveLink(path);
  }, []);

  return (
    <aside className={styles.asideBar}>
      <div className={styles.asideBarWrapper}>
        <div className={styles.logo}>
          <div>AI</div>
          <span>AI Chronicles</span>
        </div>

        <hr className={styles.divider}></hr>

        <ul className={styles.menuList}>
          {menuList.map((item, index) => (
            <li
              key={index}
              onClick={() => navigatePageHandle(item.path)}
              className={`${styles.menuItem} ${
                activeLink === item.path ? styles.activeLink : ""
              }`}
            >
              <div className={styles.itemIcon}>{item.icon}</div>
              <div className={styles.itemText}>
                <span>{item.title}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
