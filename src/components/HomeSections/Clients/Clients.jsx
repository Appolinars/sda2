import Image from 'next/image';
import Rating from '@components/Rating/Rating';
import clientsImg from "@images/clients-img.png";
import styles from './Clients.module.scss'

const Clients = () => {
  return (
    <section className={`${styles.clients} section-padding`}>
      <div className={`${styles.clients__inner} container`}>
        <div className={`${styles.clients__heading} heading`}>
          <h2 className="heading__title">Our clients trust us</h2>
        </div>
        <div className={styles.clients__content}>
          <div className={styles.clients__info}>
            <p className={styles.clients__text}>
              SDA Company has been named a leader on the top web development companies in Ukraine
              2021
            </p>
            <Rating clutch extraClass={styles.clients__rating} />
          </div>
          <div className={styles.clients__img}>
            <Image src={clientsImg} alt="Clutch rating" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
