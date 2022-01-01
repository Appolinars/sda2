import { Fade } from "react-awesome-reveal";

import Input from "@components/Input/Input";
import SignLines from "./SignLines/SignLines";
import styles from "./Sign.module.scss";

const Sign = () => {
  return (
    <section className={styles.sign}>
      <div className={`${styles.sign__inner} container`}>
        <Fade direction="up" duration={1200} cascade damping={0.2} triggerOnce>
          <div className={`${styles.sign__heading} heading`}>
            <h2 className="heading__title">Sign up for our newsletter</h2>
            <p className="heading__subtitle">
              Stay updated and get our latest news right into your inbox. No spam.
            </p>
          </div>
          <form className={styles.sign__form}>
            <Input type="email" placeholder="Your email address" extraClass={styles.sign__input} />
            <button className={`${styles.sign__btn} btn`}>Sign up</button>
          </form>
        </Fade>
      </div>
      <SignLines />
    </section>
  );
};

export default Sign;
