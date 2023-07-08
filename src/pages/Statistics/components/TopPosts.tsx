import styles from "./TopPosts.module.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ClassIcon from "@mui/icons-material/Class";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import { AiFillCheckCircle } from "react-icons/ai";
import { PostType } from "../../../store/slice/postsStatistics/postsStatisticsTypes";
import { setCategoryName } from "../../../shared/helpers/setCategoryName";

interface ITopPosts {
  posts: PostType[];
  subtitle: string;
}
export const TopPosts = ({ posts, subtitle }: ITopPosts) => {
  return (
    <div className={styles.topPost}>
      <div className={styles.titleBlock}>
        <h2>ТОП 5 </h2>
        <span>
          <AiFillCheckCircle /> {subtitle}
        </span>
      </div>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div className={styles.postInfoContainer}>
              <div className={styles.imageBlock}>
                <img src={post.imageUrl} alt="Пост" />
              </div>
              <div className={styles.postBody}>
                <h6 className={styles.title}>{post.title}</h6>
                <div className={styles.postStats}>
                  <span className={styles.like}>
                    <FavoriteIcon /> {post.likes.length}
                  </span>
                  <span className={styles.comments}>
                    <ChatBubbleOutlineIcon />
                    {post.comments.length}
                  </span>
                  <span className={styles.category}>
                    <ClassIcon /> {setCategoryName(post.category)}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
