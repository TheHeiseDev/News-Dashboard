import styles from "./ModalAddPost.module.scss";
import { useEffect, useState, useRef, ChangeEvent } from "react";
import axios from "axios";
import { useAppDispatch } from "../../store/store";
import { PostType } from "../../store/slice/postsStatistics/postsStatisticsTypes";
import { ImCloudCheck } from "react-icons/im";

interface IMModalAddPost {
  setActive: (toogle: boolean) => void;
  post: PostType;
}

export const ModalEditPost = ({ setActive, post }: IMModalAddPost) => {
  const dispatch = useAppDispatch();
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const imageRef = useRef<any>(null);
  const [isUpload, setIsUpload] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        setActive(false);
      }
    };
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const uploadImage = async () => {
    const image = imageRef.current.files[0];
    try {
      const formData = new FormData();

      if (image) {
        formData.append("image", image);
      }

      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`,

        formData
      );
      setUploadedImageUrl(response.data.data.url);
    } catch (error) {
      console.error(error);
    }
  };

  const addPostHandler = () => {
    setActive(false);
  };

  const typeFileHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setIsUpload(true);
    } else {
      setIsUpload(false);
    }
  };

  return (
    <div className={styles.modal} onClick={() => setActive(false)}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.imageContainer}>
          <img src={uploadedImageUrl} alt="picture" />

          <div className={styles.imageActions}>
            <input
              ref={imageRef}
              onChange={typeFileHandler}
              placeholder="Загрузить"
              type="file"
            />

            <button
              className={`${styles.btn} ${!isUpload ? styles.active : ""}`}
              onClick={uploadImage}
            >
              Загрузить
              <ImCloudCheck />
            </button>
          </div>
        </div>

        <div className={styles.inputsContainer}>
          <input
            placeholder="Заголовок"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Описание"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Категория"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            placeholder="Ссылка на ресурс"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <button className={styles.btn} onClick={addPostHandler}>
          Создать
        </button>
      </div>
    </div>
  );
};
