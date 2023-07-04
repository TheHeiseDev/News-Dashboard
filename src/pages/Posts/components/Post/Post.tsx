import { PostType } from "../../../../store/slice/postsStatistics/postsStatisticsTypes";
import styles from "./Post.module.scss";

import { Button } from "../../../../components/UI/Button/Button";
import { AiFillDelete } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import ClassIcon from "@mui/icons-material/Class";
import { ModalEditPost } from "../../../../modulars/ModalEditPost/ModalEditPost";
import { useState } from "react";

interface IPost {
  post: PostType;
}
export enum CategoryEnum {
  it_news = "it_news",
  ai = "ai",
  useful_services = "useful_services",
  courses = "courses",
}

export const Post = ({ post }: IPost) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);


  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${month}.${day}.${year}`;
  };
  const setCategoryName = (categoryValue: string) => {
    if (categoryValue === CategoryEnum.it_news) {
      return "Новости ИТ";
    }
    if (categoryValue === CategoryEnum.ai) {
      return "AI";
    }
    if (categoryValue === CategoryEnum.useful_services) {
      return "Полезные ресуры";
    }
    if (categoryValue === CategoryEnum.courses) {
      return "Курсы";
    }
  };
  const postEditHandle = () => {
    setIsOpenEdit(true);
  };

  return (
    <div className={styles.post}>
      {isOpenEdit && <ModalEditPost setActive={setIsOpenEdit} post={post} />}

      <div className={styles.postWrapper}>
        <div className={styles.postImage}>
          <img src={post.imageUrl} alt="post img" />
        </div>
        <div className={styles.postBody}>
          <div className={styles.postBodyWrapper}>
            <div className={styles.infoBlock}>
              <time className={styles.date}>Опубликовано: {formatDate(post.date)}</time>
              <span className={styles.category}>
                {setCategoryName(post.category)} <ClassIcon />
              </span>
            </div>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.description}>{post.description}</p>
          </div>
          <div className={styles.postActions}>
            <Button callback={postEditHandle}>
              Изменить <HiPencil />
            </Button>
            <Button callback={() => {}}>
              Удалить <AiFillDelete />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
