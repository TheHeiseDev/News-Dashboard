import styles from "./Button.module.scss";

export const Button = ({ children, callback }) => {
  return (
    <button className={styles.button} type="button" onClick={callback}>
      {children}
    </button>
  );
};
