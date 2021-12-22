import styles from './Input.module.scss'

const Input = ({extraClass, type = "text", placeholder}) => {
    return (
      <div
        className={extraClass ? `${extraClass} ${styles.input_wrapper}` : `${styles.input_wrapper}`}
      >
        <input type={type} className={styles.input} placeholder={placeholder} />
        <span className={styles.input_border}></span>
      </div>
    );
}

export default Input
