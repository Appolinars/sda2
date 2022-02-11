import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";

import livunityImg from "@images/projects-livunity.jpg";
import medappImg from "@images/projects-medapp.jpg";
import nubodImg from "@images/projects-nubod.jpg";

import "swiper/css";
import styles from "./Projects.module.scss";
import ProjectsLine1 from "./ProjectsLines/ProjectsLine1";
import ProjectsLine2 from "./ProjectsLines/ProjectsLine2";
import ProjectsLine3 from "./ProjectsLines/ProjectsLine3";
import ProjectsLine4 from "./ProjectsLines/ProjectsLine4";

const Projects = () => {
  return (
    <section className={`${styles.projects} section-padding`} id="projects">
      <div className={`${styles.projects__inner} container`}>
        <div className="heading">
          <Fade direction="up" duration={1200} cascade damping={0.2} triggerOnce>
            <h2 className="heading__title">Our projects</h2>
            <p className="heading__subtitle">
              We know the paints and needs of healthcare industry in USA and Canada due to the fact
              that we've conducted many in-depth interviews. Our expertise covers the entire field.
            </p>
          </Fade>
        </div>

        <ul className={styles.projects__list}>
          <li className={styles.projects__item}>
            <Fade direction="up" duration={1200} triggerOnce>
              <h3 className={styles.projects__title}>LivUnity</h3>
            </Fade>
            <div className={styles.projects__content}>
              <Link href="/cases/livunity">
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
            <Fade direction="up" duration={1200} triggerOnce>
              <h3 className={styles.projects__title}>Medapp</h3>
            </Fade>
            <div className={styles.projects__content}>
              <Link href="/cases/medapp">
                <a className={styles.projects__link}>
                  <Image className={styles.projects__link_img} src={medappImg} alt="MedAppp" />
                </a>
              </Link>
              <p className={styles.projects__text}>
                To the development of umedical platforms with custom functionality
              </p>
            </div>
            <ProjectsLine2 />
          </li>
          <li className={styles.projects__item}>
            <Fade direction="up" duration={1200} triggerOnce>
              <h3 className={styles.projects__title}>Nubod</h3>
            </Fade>
            <div className={styles.projects__content}>
              <Link href="/cases/nubod">
                <a className={styles.projects__link}>
                  <Image className={styles.projects__link_img} src={nubodImg} alt="Nubod" />
                </a>
              </Link>
              <p className={styles.projects__text}>
                At the same time, implementing unique solutions based on the selection and
                integration of third-party applications and services
              </p>
            </div>
            <ProjectsLine3 />
            <ProjectsLine4 />
          </li>
        </ul>
        <ProjectsLine1 />

        <Swiper slidesPerView={1.2} spaceBetween={25} className={styles.projects__slider}>
          <SwiperSlide>
            <div className={styles.projects__item}>
              <h3 className={styles.projects__title}>LivUnity</h3>
              <div className={styles.projects__content}>
                <Link href="/cases/medapp">
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
              <h3 className={styles.projects__title}>Medapp</h3>
              <div className={styles.projects__content}>
                <Link href="/">
                  <a className={styles.projects__link}>
                    <Image className={styles.projects__link_img} src={medappImg} alt="Medapp" />
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
