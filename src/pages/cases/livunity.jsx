import { useRef, useState } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

import livunityIntro from "@images/cases/livunity/livunity-intro.jpg";
import momentsPreview from "@images/cases/livunity/moments-preview.jpg";
import momentsInfo from "@images/cases/livunity/moments-info.jpg";
import extraImage from "@images/cases/livunity/extra-image.jpg";

import {
  OnlineOfflineBooking,
  SearchCoach,
  UserManagement,
  ZoomIntegration,
  AppointmentCommission,
  Subscription,
  UserRights,
} from "@components/SVGIcons/SVGIconsFeaturesLivunity";
import {
  Architecture,
  Backend,
  Frontend,
  Support,
  Testing,
  Uiux,
} from "@components/SVGIcons/SVGIconsProvidedSolution";
import { ArrowRight } from "@components/SVGIcons/SVGIcons";
import { OpenIcon, PlayIcon } from "@components/SVGIcons/SVGIcons";

import CasesHeadingLine from "@components/CasesComponents/heading-lines/CasesHeadingLine";
import AboutLinesWithVideo from "@components/CasesComponents/AboutLinesWithVideo/AboutLinesWithVideo";
import CasesMomentsLinesWithVideo from "@components/CasesComponents/CasesMomentsLinesWithVideo/CasesMomentsLinesWithVideo";
import CasesSolutionLine from "@components/CasesComponents/ProvidedSolutionLines/CasesSolutionLine";
import CasesFeaturesLine from "@components/CasesComponents/FeaturesLines/CasesFeaturesLine";
import CasesBtnNextLine from "@components/CasesComponents/BtnNextLine/CasesBtnNextLine";
import CasesMomentsLineImage from "@components/CasesComponents/MomentsLinesWithoutVid/CasesMomentsLineImage";

import styles from "./cases.module.scss";

const Livunity = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <>
      <div className={styles.intro}>
        <div className="container">
          <p className="heading__suptitle">LivUnity</p>
          <h1 className={`${styles.intro__title} heading__title`}>
            App for personalised fitness experience
          </h1>
        </div>
        <CasesHeadingLine />
      </div>
      <div className={styles.intro__img}>
        <Image src={livunityIntro} alt="Livunity" layout="fill" objectFit="cover" />
      </div>

      <section className="section-padding about">
        <div className={`${styles.about} container parent`}>
          <AboutLinesWithVideo />
          <div className={styles.about__info}>
            <Fade direction="up" duration={1200} triggerOnce>
              <>
                <h2 className="heading__title decor-line">The idea behind the project</h2>
                <ul className={styles.about__stats}>
                  <li className={styles.about__stats_item}>
                    <p className={styles.about__stats_num}>10+</p>
                    <p className={styles.about__stats_text}>Team members</p>
                  </li>
                  <li className={styles.about__stats_item}>
                    <p className={styles.about__stats_num}>1 306+ hours</p>
                    <p className={styles.about__stats_text}>Project duration</p>
                  </li>
                </ul>
              </>
            </Fade>
          </div>
          <div className={styles.about__content}>
            <Fade direction="right" duration={1200} triggerOnce>
              <p className={styles.about__content_text}>
                LivUnity is a platform that focuses on increasing physical activity participation by
                people from all walks of life by providing an online marketplace where they can
                receive or deliver fitness and wellness services conveniently.
              </p>
              <p className={styles.about__content_text}>
                The idea for LivUnity came to me while searching for a reputable fitness
                professional to help me get back on my feet after my running injury. I was looking
                for a simple platform that could help me to find the right coach, browse their
                services, schedule an appointment, and pay electronically – all from the comfort of
                my home. That's when I realized that a gap existed between the supply of fitness
                training services and ordinary people like me who needed to use them. Since then,
                we've created a fitness and wellness platform to transform this vision into reality.
                LivUnity is focused on increasing physical activity participation by people from all
                walks of life by providing an online marketplace where they can receive or deliver
                fitness and wellness services conveniently. These include virtual fitness classes,
                consultations, health programs, fitness challenges –just to name a few. We're
                committed to continuously developing tools that make it easier to adopt a healthy
                lifestyle. We do this through extensive industry research, user-centered design, and
                cutting-edge innovation. But we understand that technology alone cannot provide all
                the answers. So, we go the extra mile by providing a variety of community engagement
                programs, to educate our members on the benefits of mindful movement through a
                variety of channels that motivate them to live better, healthier lives.
              </p>
              <a
                href="https://livunity.com/"
                className={styles.about__link}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Open this project <OpenIcon />
              </a>
            </Fade>
          </div>
        </div>
      </section>

      <div className="container">
        <div className={styles.video}>
          {!isPlaying && (
            <button aria-label="Play video" className={styles.video__btn} onClick={handlePlay}>
              <PlayIcon />
            </button>
          )}
          <video
            className={styles.video__media}
            src="/static/videos/livunity.mp4"
            muted
            controls
            ref={videoRef}
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
            poster="/static/images/cases/livunity/livunity-video-poster.jpg"
          ></video>
        </div>
      </div>

      <section className="section-padding">
        <div className={`${styles.moments} container parent`}>
          <CasesMomentsLinesWithVideo />
          <div className={styles.moments__preview}>
            <Fade direction="up" duration={1200} triggerOnce>
              <h2 className="heading__title">Challenge moments</h2>
            </Fade>
            <div className={styles.moments__preview_img}>
              <Image src={momentsPreview} alt="Livunity" />
            </div>
          </div>
          <div className={styles.moments__content}>
            <Fade direction="right" duration={1200} triggerOnce className="reveal-animated">
              <>
                <ul className={styles.moments__list}>
                  <li className={styles.moments__list_item}>
                    Development of a user-friendly interface
                  </li>
                  <li className={styles.moments__list_item}>Application prototype development</li>
                  <li className={styles.moments__list_item}>
                    Development and maintenance of interaction of marketing sites of the brand and
                    the main application
                  </li>
                  <li className={styles.moments__list_item}>
                    Ability to search for a coach by city and destination
                  </li>
                  <li className={styles.moments__list_item}>
                    Booking process of meetings offline and online
                  </li>
                  <li className={styles.moments__list_item}>
                    The logic and functionality of the payment and withdrawal process
                  </li>
                  <li className={styles.moments__list_item}>
                    Development of a comprehensive system for forming the ratings of trainers, which
                    affects the search results
                  </li>
                  <li className={styles.moments__list_item}>
                    Building an architecture that will further expand the functionality of the
                    platform
                  </li>
                  <li className={styles.moments__list_item}>Integration with postal services</li>
                </ul>
              </>
            </Fade>
            <div className={styles.moments__content_img}>
              <CasesMomentsLineImage />
              <Image src={momentsInfo} alt="Livunity" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding solutionfeatures">
        <div className={`${styles.solutionfeatures} container parent`}>
          <CasesSolutionLine />
          <Fade direction="up" duration={1200} triggerOnce>
            <h2 className="heading__title decor-line">Provided solution</h2>
          </Fade>
          <div className={styles.solutionfeatures__wrap}>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <Architecture />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>Architecture</h4>
                <p className={styles.solutionfeatures__text}>Software architecture and design</p>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <Uiux />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>UI/UX</h4>
                <p className={styles.solutionfeatures__text}>
                  User-friendly and modern looking design
                </p>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <Frontend />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>Front-end</h4>
                <p className={styles.solutionfeatures__text}>
                  Cross-browser HTML & CSS authoring (W3C-compilant). Highly interactive front-end
                  using React JS
                </p>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <Backend />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>Back-end</h4>
                <p className={styles.solutionfeatures__text}>
                  MVC architecture using PHP Laravel framework and AWS S3
                </p>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <Testing />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>QA Testing</h4>
                <p className={styles.solutionfeatures__text}>Strict quality control</p>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <Support />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>Support</h4>
                <p className={styles.solutionfeatures__text}>Technical support of the project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.intro__img}>
        <Image src={extraImage} alt="Livunity" layout="fill" objectFit="cover" />
      </div>

      <section className="section-padding">
        <div className={`${styles.solutionfeatures} container`}>
          <CasesFeaturesLine />
          <Fade direction="up" duration={1200} triggerOnce>
            <h2 className="heading__title decor-line">Features of LivUnity</h2>
          </Fade>
          <div className={styles.solutionfeatures__wrap}>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <OnlineOfflineBooking />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>Online &amp; Offline booking</h4>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <SearchCoach />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>Search for a coach by filters</h4>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <UserManagement />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>User management</h4>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <ZoomIntegration />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>Zoom integration</h4>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <AppointmentCommission />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>
                  Appointment prices include commission
                </h4>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <Subscription />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>Subscription to newsletter</h4>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <UserRights />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>Distribution of user rights</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding decor-line-btn">
        <div className="container parent">
          <CasesBtnNextLine />
          <Link href="/cases/nubod">
            <a className={styles.btnnext}>
              <span>Next project</span>
              <ArrowRight />
            </a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Livunity;
