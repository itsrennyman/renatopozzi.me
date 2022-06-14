import styles from "./Button.module.css";

const Button = ({ type = "submit", onClick, children }) => {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export { Button };
