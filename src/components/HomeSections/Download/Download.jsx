import { Fade } from "react-awesome-reveal";
import { DownloadIcon } from "@components/SVGIcons/SVGIcons";
import DownloadLines from "./DownloadLines/DownloadLines";
import styles from "./Download.module.scss";

const Download = () => {
  return (
    <section className={styles.download}>
      <div className={`${styles.download__inner} container`}>
        <Fade direction="up" duration={1200} cascade damping={0.2} triggerOnce>
          <div className={`${styles.download__heading} heading`}>
            <h2 className="heading__title">
              General data protection regulation. Best practices & checklists.
            </h2>
            <p className="heading__subtitle">Take a whitepaper with you.</p>
          </div>
          <a href="&/" className={`${styles.download__btn} btn btn--white`}>
            Free download <DownloadIcon />
          </a>
        </Fade>
        <DownloadLines />
      </div>
    </section>
  );
};

export default Download;
