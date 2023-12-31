import styles from "./AsideBar.module.scss";
import { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RoleEnum } from "../../store/slice/auth/authTypes";

import { FaUserCheck } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { menuList } from "../../shared/constants/menuList";
import { useAuth } from "../../hooks/useAuth";

export const AsideBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { role } = useAuth();

  const navigatePageHandle = (path: string) => {
    setActiveLink(path);
    navigate(path);
  };

  const roleInfo = useMemo(() => {
    if (role) {
      if (role === RoleEnum.admin) {
        return {
          role: "Администратор",
          access: "Полный доступ",
        };
      }
      if (role === RoleEnum.editor) {
        return {
          role: "Редактор",
          access: "Ограниченный",
        };
      } else {
        return {
          role: "Неизвестно",
          access: "Неизвестно",
        };
      }
    }
    return {};
  }, [role]);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

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

        <div className={styles.authStatusInfo}>
          <ul className={styles.menuList}>
            <li className={`${styles.menuItem} ${styles.activeLink}`}>
              <div className={styles.itemIcon}>
                <FaUserCheck />
              </div>
              <div className={styles.itemText}>
                <span>Роль: {roleInfo.role}</span>
              </div>
            </li>
            <li className={`${styles.menuItem} ${styles.activeLink}`}>
              <div className={styles.itemIcon}>
                <RiPencilFill />
              </div>
              <div className={styles.itemText}>
                <span>Доступ: {roleInfo.access}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};
