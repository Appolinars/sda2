import { Fade } from "react-awesome-reveal";

import FooterLines from "./FooterLines/FooterLines";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__inner} container`}>
        <Fade direction="up" duration={1200} triggerOnce>
          <div className="heading">
            <h2 className="heading__title">Partner with us</h2>
          </div>
        </Fade>
        <a href="mailto:partnership@sda.company" className={styles.footer__link}>
          partnership@sda.company
        </a>
        <p className={styles.footer__location}>Kharkiv, Ukraine</p>
        <div className={styles.footer__bottom}>
          <ul className={styles.footer__social}>
            <li className={styles.footer__social_item}>
              <a href="#" className={styles.footer__social_link}>
                Telegram
              </a>
            </li>
            <li className={styles.footer__social_item}>
              <a href="#" className={styles.footer__social_link}>
                WhatsApp
              </a>
            </li>
            <li className={styles.footer__social_item}>
              <a href="#" className={styles.footer__social_link}>
                Viber
              </a>
            </li>
            <li className={styles.footer__social_item}>
              <a href="#" className={styles.footer__social_link}>
                LinkedIn
              </a>
            </li>
            <li className={styles.footer__social_item}>
              <a href="#" className={styles.footer__social_link}>
                UpWork
              </a>
            </li>
            <li className={styles.footer__social_item}>
              <a href="#" className={styles.footer__social_link}>
                XING
              </a>
            </li>
          </ul>
          <p className={styles.footer__copy}>&copy; SDA Company 2021</p>
        </div>
        <FooterLines />
      </div>
    </footer>
  );
};

export default Footer;
