import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import Rating from '@components/Rating/Rating';
import ClientsLines from './ClientsLines/ClientsLines';
import clientsImg from "@images/clients-img.png";
import styles from "./Clients.module.scss";

const Clients = () => {
  return (
    <section className={`${styles.clients} section-padding`}>
      <div className={`${styles.clients__inner} container`}>
        <Fade direction="up" duration={1200} triggerOnce>
          <div className={`${styles.clients__heading} heading`}>
            <h2 className="heading__title">Our clients trust us</h2>
          </div>
        </Fade>
        <div className={styles.clients__content}>
          <Fade direction="left" duration={1200} triggerOnce className="reveal-animated">
            <div className={styles.clients__info}>
              <p className={styles.clients__text}>
                SDA Company has been named a leader on the top web development companies in Ukraine
                2021
              </p>
              <Rating clutch extraClass={styles.clients__rating} />
            </div>
          </Fade>
          <Fade direction="right" duration={1200} triggerOnce className="reveal-animated">
            <div className={styles.clients__img}>
              <Image src={clientsImg} alt="Clutch rating" />
            </div>
          </Fade>
        </div>
        <ClientsLines />
      </div>
    </section>
  );
};

export default Clients;
