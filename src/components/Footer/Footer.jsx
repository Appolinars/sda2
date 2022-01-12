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
              <a
                className={styles.footer__social_link}
                href="https://t.me/ashub1n"
                aria-label="Telegram"
                target="_blank"
                rel="nofollow noopener noreferrer"
                title="Contact us with Telegram"
              >
                Telegram
              </a>
            </li>
            <li className={styles.footer__social_item}>
              <a
                className={styles.footer__social_link}
                href="https://api.whatsapp.com/send?phone=380990632890"
                aria-label="WhatsApp"
                target="_blank"
                rel="nofollow noopener noreferrer"
                title="Contact us with WhatsApp"
              >
                WhatsApp
              </a>
            </li>
            <li className={styles.footer__social_item}>
              <a
                href="https://jobs.dou.ua/companies/sda/"
                className={styles.footer__social_link}
                aria-label="DOU"
                target="_blank"
                rel="nofollow noopener noreferrer"
                title="We are on DOU"
              >
                DOU
              </a>
            </li>
            <li className={styles.footer__social_item}>
              <a
                className={styles.footer__social_link}
                href="https://www.linkedin.com/company/sda-company"
                aria-label="Linkedin"
                target="_blank"
                rel="nofollow noopener noreferrer"
                title="We are on Linkedin"
              >
                LinkedIn
              </a>
            </li>
            <li className={styles.footer__social_item}>
              <a
                className={styles.footer__social_link}
                href="https://www.upwork.com/ag/sdacompany/"
                aria-label="UpWork"
                target="_blank"
                rel="nofollow noopener noreferrer"
                title="We are on Upwork"
              >
                UpWork
              </a>
            </li>
            <li className={styles.footer__social_item}>
              <a
                className={styles.footer__social_link}
                href="https://www.xing.com/companies/sdacompany"
                aria-label="Xing"
                target="_blank"
                rel="nofollow noopener noreferrer"
                title="We are on XING"
              >
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
