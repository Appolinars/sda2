import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

import ContactLine1 from "./ContactLines/ContactLine1";
import ContactLine2 from "./ContactLines/ContactLine2";
import ContactForm from "@components/Forms/ContactForm";
import contactImg from "@images/contact-img.jpg";

import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.contact__img}>
        <Image src={contactImg} alt="Contact us" quality={95} />
      </div>
      <div className={styles.contact__content}>
        <div className={`${styles.contact__container} container`}>
          <div className={styles.contact__inner}>
            <div className="heading">
              <Fade direction="up" duration={1200} cascade damping={0.2}>
                <h2 className="heading__title">Let's discuss your ideas</h2>
                <p className="heading__subtitle">
                  Fill out this form or email us at{" "}
                  <a className={styles.contact__link} href="mailto:info@sda.company">
                    info@sda.company
                  </a>
                </p>
              </Fade>
            </div>
            <ContactForm extraClass={styles.contact__form} />
            <p className={styles.contact__bottom}>
              I consent to S-PRO processing my personal data according to the{" "}
              <Link href="/privacy_policy">
                <a className={styles.contact__bottom_link}>Privacy Policy</a>
              </Link>
            </p>
            <ContactLine2 />
          </div>
        </div>
      </div>
      <ContactLine1 />
    </section>
  );
};

export default Contact;
