import styles from "./Authorization.module.scss";
import { FormAuth } from "./components/Form/FormAuth";

import gif from "../../assets/gif/ai_animate3.gif";

export const Authorization = () => {
  return (
    <div className={styles.auth}>
      <div className={styles.authWrapper}>
        <div className={styles.authBody}>
          <div className={styles.authLogo}>
            <img src={gif} alt="логотип" />
          </div>
          <div className={styles.welcomeText}>
            <h1>Добро пожаловать</h1>
            <span>
              Войдите с помощью учетной записи администратора, чтоб получить полный доступ
              ко всему функционалу админ панели.
            </span>
          </div>
        </div>
        <FormAuth />
      </div>
    </div>
  );
};
