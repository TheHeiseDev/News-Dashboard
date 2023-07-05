import styles from "./ModalAddPost.module.scss";
import { useEffect, useState, useRef, ChangeEvent } from "react";
import axios from "axios";
import { useAppDispatch } from "../../store/store";
import { fetchAddPost } from "../../store/slice/posts/postsThunk";
import {PostTypeWithoutId,
} from "../../store/slice/postsStatistics/postsStatisticsTypes";
import { ImCloudCheck } from "react-icons/im";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { getCurrentDateTime } from "../../shared/helpers/getCurrentDateTime";

interface IModalAddPost {
  setActive: (toogle: boolean) => void;
}

export const ModalAddPost = ({ setActive }: IModalAddPost) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [link, setLink] = useState("");
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
    const newPost: PostTypeWithoutId = {
      title: title,
      description: description,
      imageUrl: uploadedImageUrl,
      views: 0,
      comments: [],
      date: getCurrentDateTime(),
      likes: [],
      category: category,
      link: link,
    };
    if (uploadedImageUrl && title && description && category) {
      dispatch(fetchAddPost(newPost)).then(() => setActive(false));
    }
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
          {uploadedImageUrl ? (
            <img src={uploadedImageUrl} alt="picture" />
          ) : (
            <div className={styles.imageSkeleton}>
              <MdOutlineAddAPhoto />
            </div>
          )}

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
