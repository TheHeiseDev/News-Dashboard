import styles from "./Header.module.scss";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RoleEnum } from "../../store/slice/auth/authTypes";
import { removeUser } from "../../store/slice/auth/authSlice";
import { useAuth } from "../../hooks/useAuth";
import { clearLocalStorage } from "../../shared/helpers/saveInLocalStorage";
import { IoHome } from "react-icons/io5";
import { AiOutlinePoweroff } from "react-icons/ai";
import adminIcon from "../../assets/images/admin.png";
import managerIcon from "../../assets/images/manager.png";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const [thisPage, setThisPage] = useState("");
  const { role } = useAuth();

  const pageName = (thisPage: string) => {
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

  const useRoleTranslateText = (role: RoleEnum | null | undefined): string => {
    const translatedRole = useMemo(() => {
      if (!role) {
        return "";
      }
      if (role === RoleEnum.admin) {
        return "Администратор";
      }
      if (role === RoleEnum.editor) {
        return "Редактор";
      }
      return "";
    }, [role]);

    return translatedRole;
  };

  useEffect(() => {
    setThisPage(pathname);
  }, [pathname]);

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
              <div className={styles.authText}>{useRoleTranslateText(role)}</div>
              <div className={styles.authImage}>
                <img
                  src={
                    role === RoleEnum.admin
                      ? adminIcon
                      : role === RoleEnum.editor
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
