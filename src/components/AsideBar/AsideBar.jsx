import styles from "./AsideBar.module.scss";
import { IoHome, IoStatsChart } from "react-icons/io5";
import { AiFillCreditCard } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";

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
          <li className={styles.menuItem}>
            <div className={styles.itemIcon}>
              <IoHome />
            </div>
            <div className={styles.itemText}>
              <span>Главная</span>
            </div>
          </li>
          <li className={styles.menuItem}>
            <div className={styles.itemIcon}>
              <IoStatsChart />
            </div>
            <div className={styles.itemText}>
              <span>Статистика</span>
            </div>
          </li>
          <li className={styles.menuItem}>
            <div className={styles.itemIcon}>
              <AiFillCreditCard />
            </div>
            <div className={styles.itemText}>
              <span>Посты</span>
            </div>
          </li>
          <li className={styles.menuItem}>
            <div className={styles.itemIcon}>
              <MdMarkEmailUnread />
            </div>
            <div className={styles.itemText}>
              <span>Подписчики</span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};
