import { DownloadIcon } from "@components/SVGIcons/SVGIcons";
import styles from "./Download.module.scss";

const Download = () => {
  return (
    <section className={styles.download}>
      <div className={`${styles.download__inner} container`}>
        <div className={`${styles.download__heading} heading`}>
          <h2 className="heading__title">
            General data protection regulation. Best practices & checklists.
          </h2>
          <p className="heading__subtitle">Take a whitepaper with you.</p>
        </div>
        <a href="/" className={`${styles.download__btn} btn btn--white`}>
          Free download <DownloadIcon />
        </a>
      </div>
    </section>
  );
};

export default Download;
