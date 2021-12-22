import { useCallback, useEffect } from "react";
import styles from "./Modal.module.scss";

const ModalOverlay = ({ active, setActive, children }) => {
  const disableBodyScroll = useCallback(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.overflowX = "hidden";
    }
  }, [active]);

  useEffect(() => {
    disableBodyScroll();
  }, [disableBodyScroll]);

  return (
    <div
      className={active ? `${styles.overlay} ${styles.active}` : `${styles.overlay}`}
      onClick={() => setActive(false)}
    >
      {children}
    </div>
  );
};

export default ModalOverlay;
