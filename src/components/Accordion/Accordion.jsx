import { useRef, useState } from "react";
import { ArrowDown } from "@components/SVGIcons/SVGIcons";
import styles from "./Accordion.module.scss";

const Accordion = ({ extraClass, suptitle, title, contentTitle, contentText }) => {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  return (
    <div
      className={extraClass ? `${extraClass} ${styles.accordion}` : `${styles.accordion}`}
      role="button"
      onClick={() => setActive((prevState) => !prevState)}
    >
      <div
        className={
          active
            ? `${styles.accordion__head} ${styles.accordion__head_active}`
            : `${styles.accordion__head}`
        }
      >
        <div className={styles.accordion__info}>
          <p className={styles.accordion__suptitle}>{suptitle}</p>
          <h4 className={styles.accordion__title}>{title}</h4>
        </div>
        <p className={styles.accrodion__toggle}>
          <span className={styles.accrodion__toggle_text}>Provided solution</span>
          <ArrowDown iconClass={styles.accordion__arrow} />
        </p>
      </div>
      <div
        className={styles.accordion__content}
        style={{ maxHeight: active ? `${contentRef.current.scrollHeight}px` : "0px" }}
        ref={contentRef}
      >
        <div className={styles.accordion__content_inner}>
          <p className={styles.accordion__content_title}>{contentTitle}</p>
          <p className={styles.accordion__content_text}>{contentText}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
