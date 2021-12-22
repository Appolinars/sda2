import { StarIcon } from "@components/SVGIcons/SVGIcons";
import Image from "next/image";
import upworkLogo from "@images/upwork.png";
import clutchLogo from "@images/clutch.png";
import styles from "./Rating.module.scss";

const Rating = ({ upwork, clutch, extraClass }) => {
  return (
    <div className={extraClass ? `${styles.rating} ${extraClass}` : styles.rating}>
      {upwork && (
        <div className={styles.rating__item}>
          <div className={styles.rating__score}>
            <StarIcon iconClass={styles.rating__star} />
            <StarIcon iconClass={styles.rating__star} />
            <StarIcon iconClass={styles.rating__star} />
            <StarIcon iconClass={styles.rating__star} />
            <StarIcon iconClass={styles.rating__star} />
          </div>
          <Image src={upworkLogo} alt="Upwork rating" />
        </div>
      )}
      {clutch && (
        <div className={styles.rating__item}>
          <div className={styles.rating__score}>
            <StarIcon iconClass={styles.rating__star} />
            <StarIcon iconClass={styles.rating__star} />
            <StarIcon iconClass={styles.rating__star} />
            <StarIcon iconClass={styles.rating__star} />
            <StarIcon iconClass={styles.rating__star} />
          </div>
          <Image src={clutchLogo} alt="Clutch rating" />
        </div>
      )}
    </div>
  );
};

export default Rating;
