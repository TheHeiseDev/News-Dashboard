import styles from "./FormAuth.module.scss";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import CircularProgress from "@mui/material/CircularProgress";
import { Navigate, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// enum ErrorCodeSignIn {
//   login = "auth/user-not-found",
//   password = "auth/wrong-password",
//   anyRequest = "auth/too-many-requests",
//   invalideEmail = "auth/invalid-email",
// }

export const FormAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [viewPass, setViewPass] = useState(false);
  const [error, SetError] = useState(false);

  const validationSchema = yup.object().shape({
    email: yup.string().required("Обязательное поле").email("Некорректный email"),
    password: yup
      .string()
      .required("Обязательное поле")
      .min(6, "минимальная длина 4 символа"),
  });

  const handleSetError = (status, message) => {
    const objError = {
      status,
      message,
    };
    // dispatch(setError(objError));
  };

  const errorHandler = (errorMessage) => {
    // if (errorMessage === ErrorCodeSignIn.login) {
    //   handleSetError(true, "Неверный логин");
    // } else if (errorMessage === ErrorCodeSignIn.password) {
    //   handleSetError(true, "Неверный пароль");
    // } else if (errorMessage === ErrorCodeSignIn.anyRequest) {
    //   handleSetError(true, "Много попыток, попробуйте позже");
    // } else if (errorMessage === ErrorCodeSignIn.invalideEmail) {
    //   handleSetError(true, "Некорретный email адресс");
    // } else {
    //   console.log(errorMessage);
    //   handleSetError(true, "Возникла ошибка при авторизации");
    // }
  };

  const handleLogin = (values) => {
    setLoading(true);
    const auth = getAuth();

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(({ user }) => {
        const authData = {
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
        };
        //Store authorization data in localStorage
        // saveInLocalStorage("authData", authData);
        // dispatch(setUser(authData));
        setLoading(false);
        navigate("/", { replace: false });
      })
      .catch(({ code }) => {
        errorHandler(code);
        console.log(code);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className={styles.authForm}>
      <h2 className={styles.authTitle}>Вход в админ панель</h2>

      <Formik
        validationSchema={validationSchema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleLogin}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <div className={styles.inputContainerEmail}>
              <Field name="email" placeholder="Email" />
              {errors.email && touched.email && (
                <div className={styles.error}>{errors.email}</div>
              )}
            </div>
            <div className={styles.inputContainerPass}>
              {viewPass ? (
                <AiFillEye
                  className={styles.eye}
                  onClick={() => setViewPass((prev) => !prev)}
                />
              ) : (
                <AiFillEyeInvisible
                  className={styles.eye}
                  onClick={() => setViewPass((prev) => !prev)}
                />
              )}
            </div>
            <Field
              type={viewPass ? "text" : "password"}
              name="password"
              placeholder="Password"
            />
            {errors.password && touched.password && (
              <div className={styles.error}>{errors.password}</div>
            )}
            <button className={loading ? styles.active : ""} type="submit">
              Войти {loading && <CircularProgress />}
            </button>
          </Form>
        )}
      </Formik>
      {error && <span className={styles.errorAuth}>Неверный логин или пароль</span>}
    </div>
  );
};
