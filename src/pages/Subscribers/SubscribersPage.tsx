import { MainLayout } from "../../layouts/MainLayout";
import styles from "./SubscribersPage.module.scss";
import { EmailItem } from "./components/EmailI/EmailItem";
import { AiOutlineCloudDownload } from "react-icons/ai";

export const SubscribersPage = () => {
  const emailData = [
    {
      id: 1,
      email: "e_varderesyan@mail.ru",
      date: "12.05.2023",
      country: "Keiv",
    },
    {
      id: 2,
      email: "gagans@gmail.com",
      date: "14.05.2023",
      country: "Keiv",
    },
    {
      id: 3,
      email: "e_varderesyan@mail.ru",
      date: "12.05.2023",
      country: "Keiv",
    },
    {
      id: 4,
      email: "gagans@gmail.com",
      date: "14.05.2023",
      country: "Keiv",
    },
    {
      id: 5,
      email: "e_varderesyan@mail.ru",
      date: "12.05.2023",
      country: "Keiv",
    },
    {
      id: 6,
      email: "gagans@gmail.com",
      date: "14.05.2023",
      country: "Keiv",
    },
    {
      id: 7,
      email: "e_varderesyan@mail.ru",
      date: "12.05.2023",
      country: "Keiv",
    },
    {
      id: 8,
      email: "gagans@gmail.com",
      date: "14.05.2023",
      country: "Keiv",
    },
    {
      id: 9,
      email: "gagans@gmail.com",
      date: "14.05.2023",
      country: "Keiv",
    },
    {
      id: 10,
      email: "e_varderesyan@mail.ru",
      date: "12.05.2023",
      country: "Keiv",
    },
    {
      id: 11,
      email: "gagans@gmail.com",
      date: "14.05.2023",
      country: "Keiv",
    },
    {
      id: 12,
      email: "e_varderesyan@mail.ru",
      date: "12.05.2023",
      country: "Keiv",
    },
    {
      id: 13,
      email: "gagans@gmail.com",
      date: "14.05.2023",
      country: "Keiv",
    },
    {
      id: 14,
      email: "e_varderesyan@mail.ru",
      date: "12.05.2023",
      country: "Keiv",
    },
    {
      id: 15,
      email: "gagans@gmail.com",
      date: "14.05.2023",
      country: "Keiv",
    },
  ];

  const downloadEmails = () => {
    const emails = emailData.map((item) => item.email).join("\n");
    const element = document.createElement("a");
    const file = new Blob([emails], { type: "text/plain" });

    element.href = URL.createObjectURL(file);
    element.download = `subsribers.txt`;
    element.click();

    URL.revokeObjectURL(element.href);
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
          <ul className={styles.subsribersList}>
            {emailData.map((item) => (
              <li className={styles.subsribeItem}>
                <EmailItem
                  key={item.id}
                  email={item.email}
                  date={item.date}
                  country={item.country}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};
