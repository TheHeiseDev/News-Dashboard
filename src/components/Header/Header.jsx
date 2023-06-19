import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { IoHome } from "react-icons/io5";

import { AiOutlinePoweroff } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/hooks/useAuth";
import adminIcon from "../../assets/images/admin.png";
import managerIcon from "../../assets/images/manager.png";
import { RoleEnum } from "../../store/slice/auth/authTypes";
import { clearLocalStorage } from "../../utils/saveInLocalStorage";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/slice/auth/authSlice";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [thisPage, setThisPage] = useState("");
  const { role } = useAuth();

  const pageName = (thisPage) => {
    if (thisPage === "/") return "Главная";
    if (thisPage === "/statistics") return "Статистика";
    if (thisPage === "/posts") return "Посты";
    if (thisPage === "/subsribers") return "Подписчики";
  };

  const signUpHandle = () => {
    dispatch(removeUser());
    clearLocalStorage();
    navigate("/auth", { replace: false });
  };
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
                <IoHome onClick={() => navigate("/")} />
              </div>
              /<div className={styles.navLinkText}>{pageName(thisPage)}</div>
            </div>
          </nav>
        </div>
        <div className={styles.headerActions}>
          <div className={styles.auth}>
            <div className={styles.authUser}>
              <div className={styles.authText}>
                {role === RoleEnum.admin
                  ? "Администратор"
                  : role === RoleEnum.manager
                  ? "Менеджер"
                  : ""}
              </div>
              <div className={styles.authImage}>
                <img
                  src={
                    role === RoleEnum.admin
                      ? adminIcon
                      : role === RoleEnum.manager
                      ? managerIcon
                      : ""
                  }
                  alt="user logo"
                />
                <span className={styles.online}></span>
              </div>
            </div>
            <div className={styles.authSignUp} onClick={signUpHandle}>
              <AiOutlinePoweroff />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
