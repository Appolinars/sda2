import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@components/Forms/ContactForm';
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
              <h2 className="heading__title">Let's discuss your ideas</h2>
              <p className="heading__subtitle">
                Fill out this form or email us at{" "}
                <a className={styles.contact__link} href="mailto:info@sda.company">
                  info@sda.company
                </a>
              </p>
            </div>
            <ContactForm extraClass={styles.contact__form} />
            <p className={styles.contact__bottom}>
              I consent to S-PRO processing my personal data according to the{" "}
              <Link href="/privacy_policy">
                <a className={styles.contact__bottom_link}>Privacy Policy</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
