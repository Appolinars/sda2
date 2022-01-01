import Rating from '@components/Rating/Rating';
import { ArrowDown, ScrollIcon } from "@components/SVGIcons/SVGIcons";
import IntroLines from "./IntroLines/IntroLines";
import styles from './Intro.module.scss'

const Intro = () => {

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
        <IntroLines />
      </div>
    </section>
  );
};

export default Intro;
