import { CancelIcon } from "@components/SVGIcons/SVGIcons";
import styles from "./Modal.module.scss";
import ModalOverlay from "./ModalOverlay";

const Modal = ({ active, setActive, children }) => {

  return (
    <ModalOverlay active={active} setActive={setActive}>
      <div
        className={active ? `${styles.modal} ${styles.active}` : `${styles.modal}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.modal__close}
          onClick={() => setActive(false)}
          aria-label="Close modal"
        >
          <CancelIcon />
        </button>
        {children}
      </div>
    </ModalOverlay>
  );
};

export default Modal;
