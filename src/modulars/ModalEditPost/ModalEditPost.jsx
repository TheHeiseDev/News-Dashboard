import axios from "axios";
import styles from "./ModalEditPost.module.scss";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/store";
import { fetchUpdatePost } from "../../store/slice/posts/postsThunk";
import { updatePost } from "../../store/slice/posts/postsSlice";

export const ModalEditPost = ({ setActive, post }) => {
  const dispatch = useAppDispatch();
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    setTitle(post.title);
    setDescription(post.description);
    setCategory(post.category);
    setLink(post.link);
    setUploadedImageUrl(post.imageUrl);
  }, []);

  const uploadImage = async () => {
    const image = document.querySelector('input[type="file"]').files[0];
    try {
      const formData = new FormData();
      formData.append("image", image);
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`,
        formData
      );
      setUploadedImageUrl(response.data.data.url);
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  const savePostHandler = () => {
    const updatePostObj = {
      ...post,
      title: title,
      description: description,
      category: category,
      link: link,
      imageUrl: uploadedImageUrl,
    };
    dispatch(fetchUpdatePost({ id: post.id, object: updatePostObj }));
    dispatch(updatePost({ id: post.id, object: updatePostObj }));
    setActive(false);
  };

  return (
    <div className={styles.modal} onClick={() => setActive(false)}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.imageContainer}>
          <img src={uploadedImageUrl} alt="picture" />

          <div className={styles.imageActions}>
            <input placeholder="Загрузить" type="file" />
            <button className={styles.btn} onClick={uploadImage}>
              Загрузить
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
            type="text"
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

        <button className={styles.btn} onClick={savePostHandler}>
          Сохранить
        </button>
      </div>
    </div>
  );
};
