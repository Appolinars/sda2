import styles from "./Input.module.scss";

const Input = ({ value, onChange, extraClass, type = "text", placeholder, inputError }) => {
  return (
    <div
      className={extraClass ? `${extraClass} ${styles.input_wrapper}` : `${styles.input_wrapper}`}
    >
      <input
        value={value}
        onChange={onChange}
        type={type}
        className={inputError ? `${styles.input} ${styles.error}` : `${styles.input}`}
        placeholder={placeholder}
      />
      <span className={styles.input_border}></span>
    </div>
  );
};

export default Input;
