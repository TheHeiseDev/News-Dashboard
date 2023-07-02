import { MainLayout } from "../../layouts/MainLayout";
import styles from "./SubscribersPage.module.scss";
import { EmailItem } from "./components/EmailI/EmailItem";
import { AiOutlineCloudDownload } from "react-icons/ai";

export const SubscribersPage = () => {
  const emailData = [
    {
      id: 1,
      email: "template@gmail.com",
      date: "12.05.2023",
      country: "Germany",
    },
    {
      id: 2,
      email: "template@gmail.com",
      date: "14.05.2023",
      country: "Germany",
    },
    {
      id: 3,
      email: "template@gmail.com",
      date: "12.05.2023",
      country: "Germany",
    },
    {
      id: 4,
      email: "template@gmail.com",
      date: "14.05.2023",
      country: "Germany",
    },
    {
      id: 5,
      email: "template@gmail.com",
      date: "12.05.2023",
      country: "Germany",
    },
    {
      id: 6,
      email: "template@gmail.com",
      date: "14.05.2023",
      country: "Germany",
    },
    {
      id: 7,
      email: "template@gmail.com",
      date: "12.05.2023",
      country: "Germany",
    },
    {
      id: 8,
      email: "template@gmail.com",
      date: "14.05.2023",
      country: "Germany",
    },
    {
      id: 9,
      email: "template@gmail.com",
      date: "14.05.2023",
      country: "Germany",
    },
    {
      id: 10,
      email: "template@gmail.com",
      date: "12.05.2023",
      country: "Germany",
    },
    {
      id: 11,
      email: "template@gmail.com",
      date: "14.05.2023",
      country: "Germany",
    },
    {
      id: 12,
      email: "template@gmail.com",
      date: "12.05.2023",
      country: "Germany",
    },
    {
      id: 13,
      email: "template@gmail.com",
      date: "14.05.2023",
      country: "Germany",
    },
    {
      id: 14,
      email: "template@gmail.com",
      date: "12.05.2023",
      country: "Germany",
    },
    {
      id: 15,
      email: "template@gmail.com",
      date: "14.05.2023",
      country: "Germany",
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
              <li key={item.id} className={styles.subsribeItem}>
                <EmailItem email={item.email} date={item.date} country={item.country} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};
