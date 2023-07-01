import styles from "./EmailItem.module.scss";
import { HiOutlineMail } from "react-icons/hi";
import { BsCalendar2Check } from "react-icons/bs";
import { GiWorld } from "react-icons/gi";

interface IEmailItem {
  email: string;
  date: string;
  country: string;
}
export const EmailItem = ({ email, date, country }: IEmailItem) => {
  return (
    <article className={styles.emailItem}>
      <div className={styles.itemWrapper}>
        <div className={styles.email}>
          <HiOutlineMail />
          <span>{email}</span>
        </div>
        <div className={styles.date}>
          <BsCalendar2Check />
          <time>{date}</time>
        </div>
        <div className={styles.country}>
          <GiWorld />
          <span>{country}</span>
        </div>
      </div>
    </article>
  );
};
