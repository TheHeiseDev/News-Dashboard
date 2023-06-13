import styles from "./Header.module.scss";
import { IoHome } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.navBar}>
          <h6>Dashboard</h6>
          <nav>
            <div>
              <div className={styles.navIcon}>
                <IoHome />
              </div>
              /<div className={styles.navLinkText}>Главная</div>
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
