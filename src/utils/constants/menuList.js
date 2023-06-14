import { IoHome, IoStatsChart } from "react-icons/io5";
import { AiFillCreditCard } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";

export const menuList = [
  {
    title: "Главная",
    icon: <IoHome />,
    path: "/"
  },
  {
    title: "Статистика",
    icon: <IoStatsChart />,
    path: "/statistics"
  },
  {
    title: "Посты",
    icon: <AiFillCreditCard />,
    path: "/posts"
  },
  {
    title: "Подписчики",
    icon: <MdMarkEmailUnread />,
    path: "/subsribers"
  },
];
