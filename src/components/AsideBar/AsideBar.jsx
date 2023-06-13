import styles from "./AsideBar.module.scss";

import { menuList } from "../../utils/constants/menuList";

export const AsideBar = () => {
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
            <li key={index} className={styles.menuItem}>
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
