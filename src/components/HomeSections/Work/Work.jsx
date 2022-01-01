import Image from "next/image";
import { Fade, Zoom } from "react-awesome-reveal";

import { VisionIcon, SprintIcon, SoftwareIcon, LaunchIcon } from "@components/SVGIcons/SVGIcons";
import discoveryDiagram from "@images/work-discovery.png";
import developmentDiagram from "@images/work-development.png";
import releaseDiagram from "@images/work-release.png";
import styles from "./Work.module.scss";
import WorkLine1 from "./WorkLines/WorkLine1";
import WorkLine2 from "./WorkLines/WorkLine2";
import WorkLine3 from "./WorkLines/WorkLine3";
import WorkLine4 from "./WorkLines/WorkLine4";

const Work = () => {
  return (
    <section className={`${styles.work} section-padding`} id="about">
      <div className={`${styles.work__inner} container`}>
        <div className="heading">
          <Fade direction="up" duration={1200} cascade damping={0.2} triggerOnce>
            <h2 className="heading__title">How we work</h2>
            <p className="heading__subtitle">
              The development of such great projects requires a lot of responsibility and a
              systematic approach.
            </p>
            <p className="heading__subtitle">
              We have developed a methodology that allows us to create fundamental projects with the
              required efficiency and minimization of risks.
            </p>
            <p className="heading__subtitle">This methodology includes 3 phases.</p>
          </Fade>
        </div>
        <ul className={styles.work__list}>
          <li className={styles.work__item}>
            <Fade direction="up" duration={1200} triggerOnce>
              <div className={styles.work__top}>
                <p className={styles.work__count}>01</p>
                <h3 className={styles.work__title}>Discovery</h3>
                <div className={`${styles.work__extra} ${styles.work__extra_discovery}`}>
                  <p className={styles.work__extra_item}>
                    <VisionIcon /> Vision
                  </p>
                </div>
              </div>
            </Fade>
            <div className={styles.work__content}>
              <Fade direction="left" duration={1200} triggerOnce>
                <p className={styles.work__text}>
                  This phase allows to assess correctly the expected result and potential risks.
                  This makes it possible to see the potential of the project and correctly allocate
                  resources.
                </p>
              </Fade>
              <Zoom duration={1200} triggerOnce className="reveal-animated">
                <div className={styles.work__img}>
                  <Image src={discoveryDiagram} alt="Discovery" quality={95} />
                </div>
              </Zoom>
              <ul className={`${styles.work__mobile_list} ${styles.work__mobile_discovery}`}>
                <li className={styles.work__mobile_item}>Signing legal documents and agreements</li>
                <li className={styles.work__mobile_item}>Plan project</li>
                <li className={styles.work__mobile_item}>Establish architecture</li>
                <li className={styles.work__mobile_item}>Initial design</li>
                <li className={styles.work__mobile_item}>Setup foundation</li>
              </ul>
            </div>
            <WorkLine2 />
          </li>
          <li className={styles.work__item}>
            <Fade direction="up" duration={1200} triggerOnce>
              <div className={styles.work__top}>
                <p className={styles.work__count}>02</p>
                <h3 className={styles.work__title}>Development</h3>
                <div className={`${styles.work__extra} ${styles.work__extra_development}`}>
                  <p className={styles.work__extra_item}>
                    <SprintIcon /> Sprint backlog
                  </p>
                  <p className={styles.work__extra_item}>
                    <SoftwareIcon /> Working software
                  </p>
                </div>
              </div>
            </Fade>
            <div className={styles.work__content}>
              <Fade direction="left" duration={1200} triggerOnce>
                <p className={styles.work__text}>
                  Agile methodology works best for the implementation of such projects. The
                  development process is divided into sprints. This allows to see progress, identify
                  bottlenecks in a timely manner and adjust the project during its development.
                </p>
              </Fade>
              <Zoom duration={1200} triggerOnce className="reveal-animated">
                <div className={styles.work__img}>
                  <Image src={developmentDiagram} alt="Development" quality={95} />
                </div>
              </Zoom>
              <ul className={`${styles.work__mobile_list} ${styles.work__mobile_development}`}>
                <li className={styles.work__mobile_item}>Plan spring</li>
                <li className={styles.work__mobile_item}>Manage sprint</li>
                <li className={styles.work__mobile_item}>Design features</li>
                <li className={styles.work__mobile_item}>Develop features</li>
                <li className={styles.work__mobile_item}>Test features</li>
                <li className={styles.work__mobile_item}>Close sprint</li>
              </ul>
            </div>
            <WorkLine3 />
          </li>
          <li className={styles.work__item}>
            <Fade direction="up" duration={1200} triggerOnce>
              <div className={styles.work__top}>
                <p className={styles.work__count}>03</p>
                <h3 className={styles.work__title}>Release</h3>
                <div className={`${styles.work__extra} ${styles.work__extra_release}`}>
                  <p className={styles.work__extra_item}>
                    <LaunchIcon /> Product launch
                  </p>
                </div>
              </div>
            </Fade>
            <div className={styles.work__content}>
              <Fade direction="left" duration={1200} triggerOnce>
                <p className={styles.work__text}>
                  Allows, taking into account all the features, to deploy correctly and ensure the
                  required functioning of the project in any specific environment.
                </p>
              </Fade>
              <Zoom duration={1200} triggerOnce className="reveal-animated">
                <div className={styles.work__img}>
                  <Image src={releaseDiagram} alt="Release" quality={95} />
                </div>
              </Zoom>
              <ul className={`${styles.work__mobile_list} ${styles.work__mobile_release}`}>
                <li className={styles.work__mobile_item}>Load testing</li>
                <li className={styles.work__mobile_item}>IT infrastructure deployment</li>
                <li className={styles.work__mobile_item}>Security check</li>
                <li className={styles.work__mobile_item}>Deploy code</li>
                <li className={styles.work__mobile_item}>Release</li>
                <li className={styles.work__mobile_item}>Close release</li>
              </ul>
            </div>
            <WorkLine4 />
          </li>
        </ul>
        <WorkLine1 />
      </div>
    </section>
  );
};

export default Work;
