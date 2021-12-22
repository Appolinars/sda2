import { PlayIcon } from "@components/SVGIcons/SVGIcons";
import { useRef, useState } from "react";
import styles from "./Showreel.module.scss";

const Showreel = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <section className={styles.showreel}>
      <video
        className={styles.showreel__video}
        ref={videoRef}
        src="/static/videos/showreel.mp4"
      ></video>
      <div className={`${styles.showreel__inner} container`}>
        <div className={styles.showreel__content}>
          <button className={styles.showreel__btn} onClick={!isPlaying ? handlePlay : handlePause}>
            <PlayIcon />
          </button>
          <div className={styles.showreel__info}>
            <p className={styles.showreel__title}>Our showreel</p>
            <p className={styles.showreel__subtitle}>2021</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showreel;
