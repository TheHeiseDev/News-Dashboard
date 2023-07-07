import styles from "./SubscribersPage.module.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../store/store";
import { fetchSubscribers } from "../../store/slice/email/emailThunk";
import { selectEmails } from "../../store/slice/email/emailSlice";
import { Email } from "../../store/slice/email/emailTypes";
import { StatusEnum } from "../../store/slice/visit/visitTypes";

import { MainLayout } from "../../layouts/MainLayout";
import { EmailItem } from "./components/EmailI/EmailItem";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { CircularProgress } from "@mui/material";
import { formatDate } from "../../shared/helpers/formatDate";

export const SubscribersPage = () => {
  const dispatch = useAppDispatch();
  const { email, status } = useSelector(selectEmails);

  useEffect(() => {
    dispatch(fetchSubscribers());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const downloadEmails = () => {
    if (email) {
      const emails = email.map((item: Email) => item.email).join("\n");
      const element = document.createElement("a");
      const file = new Blob([emails], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = `subsribers.txt`;
      element.click();
      URL.revokeObjectURL(element.href);
    }
  };

  return (
    <MainLayout>
      <div className={styles.page}>
        <div className={styles.subsribersWrapper}>
          <div className={styles.header}>
            <span>Почта</span>
            <span>Дата подписки</span>
            <span>Страна</span>
            <div className={styles.btnDownload}>
              <button onClick={downloadEmails}>Скачать</button>
              <AiOutlineCloudDownload />
            </div>
          </div>
          {status === StatusEnum.error && (
            <div className={styles.errorContainer}>
              Ошибка при получении данных из сервера
            </div>
          )}
          {status === StatusEnum.loading ? (
            <div className={styles.loadingContainer}>
              <CircularProgress />
            </div>
          ) : (
            <ul className={styles.subsribersList}>
              {email?.map((item: Email) => (
                <li key={item.id} className={styles.subsribeItem}>
                  <EmailItem
                    email={item.email}
                    date={formatDate(item.date)}
                    country={item.country}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </MainLayout>
  );
};
