import { useRef } from 'react';
import { useOnScreen } from 'src/utils/hooks';
import Rating from '@components/Rating/Rating';
import { ArrowDown, ScrollIcon } from "@components/SVGIcons/SVGIcons";
import styles from './Intro.module.scss'

const Intro = () => {

  const line_1 = useRef(null);
  const isLine1OnScreen = useOnScreen(line_1);

  const line_2 = useRef(null);
  const isLine2OnScreen = useOnScreen(line_2);

  return (
    <section className={styles.intro}>
      <video
        className={styles.intro__video}
        src="/static/videos/intro-bg.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className={`${styles.intro__inner} container`}>
        <h1 className={`${styles.intro__title} title`}>
          Dedicated IT team with healthcare expertise
        </h1>
        <p className={styles.intro__text}>We build custom solutions for healthcare companies.</p>
        <Rating upwork clutch />
        <div className={styles.intro__scroll}>
          <ScrollIcon iconClass={styles.intro__scroll_icon} />
          <ArrowDown iconClass={styles.intro__scroll_arrow} />
        </div>
        <svg
          width="653"
          height="505"
          viewBox="0 0 653 505"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={isLine1OnScreen ? `${styles.line_1} ${styles.active}` : `${styles.line_1}`}
          ref={line_1}
        >
          <path
            d="M72.5005 7H502.001C584.843 7 652.001 74.1573 652.001 157V347C652.001 429.843 584.843 497 502.001 497H8.00055"
            stroke="#899198"
            strokeWidth="2"
          />
          <rect
            x="72.0714"
            width="10"
            height="10"
            transform="rotate(45 72.0714 0)"
            fill="#899198"
          />
          <rect
            x="7.07156"
            y="490"
            width="10"
            height="10"
            transform="rotate(45 7.07156 490)"
            fill="#899198"
          />
        </svg>
        <svg
          width="609"
          height="129"
          viewBox="0 0 609 129"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={isLine2OnScreen ? `${styles.line_2} ${styles.active}` : `${styles.line_2}`}
          ref={line_2}
        >
          <rect
            x="601.071"
            width="10"
            height="10"
            transform="rotate(45 601.071 0)"
            fill="#899198"
          />
          <path d="M601 7H123C55.6213 7 1 61.6213 1 129V129" stroke="#899198" strokeWidth="2" />
        </svg>
      </div>
    </section>
  );
};

export default Intro;
