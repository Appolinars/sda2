import { useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";

import { ArrowDown } from "@components/SVGIcons/SVGIcons";
import styles from "./Accordion.module.scss";

const Accordion = ({ extraClass, accordion }) => {
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
        <Fade direction="left" duration={1200}>
          <div className={styles.accordion__info}>
            <p className={styles.accordion__suptitle}>{accordion.suptitle}</p>
            <h3 className={styles.accordion__title}>{accordion.title}</h3>
          </div>
        </Fade>
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
          <p className={styles.accordion__content_title}>{accordion.contentTitle}</p>
          <p className={styles.accordion__content_text}>{accordion.contentText}</p>
        </div>
      </div>
      {accordion.svgLine}
    </div>
  );
};

export default Accordion;
