import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import livunityImg from "@images/projects-livunity.jpg";
import nubodImg from "@images/projects-nubod.png";

import "swiper/css";
import styles from "./Projects.module.scss";


const Projects = () => {
  return (
    <section className={`${styles.projects} section-padding`}>
      <div className={`${styles.projects__inner} container`}>
        <div className="heading">
          <h2 className="heading__title">Our projects</h2>
          <p className="heading__subtitle">
            We know the paints and needs of healthcare industry in USA and Canada due to the fact
            that we've conducted many in-depth interviews. Our expertise covers the entire field.
          </p>
        </div>

        <ul className={styles.projects__list}>
          <li className={styles.projects__item}>
            <h3 className={styles.projects__title}>LivUnity</h3>
            <div className={styles.projects__content}>
              <Link href="/">
                <a className={styles.projects__link}>
                  <Image className={styles.projects__link_img} src={livunityImg} alt="LivUnity" />
                </a>
              </Link>
              <p className={styles.projects__text}>
                From the creation of fitness services marketplaces{" "}
              </p>
            </div>
          </li>
          <li className={`${styles.projects__item} ${styles.projects__item_reverse}`}>
            <h3 className={styles.projects__title}>Casename</h3>
            <div className={styles.projects__content}>
              <Link href="/">
                <a className={styles.projects__link}>
                  <Image className={styles.projects__link_img} src={livunityImg} alt="Casename" />
                </a>
              </Link>
              <p className={styles.projects__text}>
                To the development of umedical platforms with custom functionality
              </p>
            </div>
          </li>
          <li className={styles.projects__item}>
            <h3 className={styles.projects__title}>Nubod</h3>
            <div className={styles.projects__content}>
              <Link href="/">
                <a className={styles.projects__link}>
                  <Image className={styles.projects__link_img} src={nubodImg} alt="Nubod" />
                </a>
              </Link>
              <p className={styles.projects__text}>
                At the same time, implementing unique solutions based on the selection and
                integration of third-party applications and services
              </p>
            </div>
          </li>
        </ul>

        <Swiper slidesPerView={1.2} spaceBetween={25} className={styles.projects__slider}>
          <SwiperSlide>
            <div className={styles.projects__item}>
              <h3 className={styles.projects__title}>LivUnity</h3>
              <div className={styles.projects__content}>
                <Link href="/">
                  <a className={styles.projects__link}>
                    <Image className={styles.projects__link_img} src={livunityImg} alt="LivUnity" />
                  </a>
                </Link>
                <p className={styles.projects__text}>
                  From the creation of fitness services marketplaces{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projects__item}>
              <h3 className={styles.projects__title}>Casename</h3>
              <div className={styles.projects__content}>
                <Link href="/">
                  <a className={styles.projects__link}>
                    <Image className={styles.projects__link_img} src={livunityImg} alt="Casename" />
                  </a>
                </Link>
                <p className={styles.projects__text}>
                  To the development of umedical platforms with custom functionality
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projects__item}>
              <h3 className={styles.projects__title}>Nubod</h3>
              <div className={styles.projects__content}>
                <Link href="/">
                  <a className={styles.projects__link}>
                    <Image className={styles.projects__link_img} src={nubodImg} alt="Nubod" />
                  </a>
                </Link>
                <p className={styles.projects__text}>
                  At the same time, implementing unique solutions based on the selection and
                  integration of third-party applications and services
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        
      </div>
    </section>
  );
};

export default Projects;
