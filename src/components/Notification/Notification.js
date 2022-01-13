import { SuccessIcon } from "@components/SVGIcons/SVGIcons";
import { memo, useEffect, useState } from "react";
import { CancelIcon } from "../SVGIcons/SVGIcons";
import styles from "./Notification.module.scss";

const Notification = memo(({ active, setActive, children, success, error, info, hasCloseBtn }) => {
  const [render, setRender] = useState(active);

  useEffect(() => {
    if (active) {
      setRender(true);
      setTimeout(() => {
        setActive(false);
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const onAnimationEnd = () => {
    if (!active) setRender(false);
  };

  return (
    render && (
      <div
        className={
          (success && "notification notification_success") ||
          (error && "notification notification_error") ||
          (info && "notification notification_info")
        }
        className={
          (success && `${styles.notification} ${styles.notification_success}`) ||
          (error && `${styles.notification} ${styles.notification_error}`) ||
          (info && `${styles.notification} ${styles.notification_info}`)
        }
        style={{
          animation: `${active ? `${styles.notificationIn}` : `${styles.notificationOut}`} 0.7s`,
        }}
        onAnimationEnd={onAnimationEnd}
        onClick={(e) => e.stopPropagation()}
      >
        {hasCloseBtn && (
          <button className={styles.notification__close} onClick={() => setActive(false)}>
            <CancelIcon />
          </button>
        )}
        <p className={styles.notification__text}>
          {success && <SuccessIcon iconClass={styles.notification__icon} />} {children}
        </p>
        <span className={styles.notification__line}></span>
      </div>
    )
  );
});

export default Notification;
