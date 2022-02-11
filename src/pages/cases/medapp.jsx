import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

import medappIntro from "@images/cases/medapp/medapp-intro.jpg";
import medappPreview from "@images/cases/medapp/medapp-preview.jpg";
import medappInfo from "@images/cases/medapp/medapp-info.jpg";
import extraImageMedapp from "@images/cases/medapp/extra-image-medapp.jpg";

import {
  Architecture,
  Backend,
  Frontend,
  Integrations,
  Support,
  Testing,
  Deployment,
  Uiux,
} from "@components/SVGIcons/SVGIconsProvidedSolution";
import {
  PersonalAccount,
  MonitoringStatistics,
  GenerationListPharmacies,
  ManagingCycleOrdering,
  CreatPatientCard,
} from "@components/SVGIcons/SVGIconsFeaturesMedapp";
import { ArrowRight } from "@components/SVGIcons/SVGIcons";
import { OpenIcon } from "@components/SVGIcons/SVGIcons";

import CasesHeadingLine from "@components/CasesComponents/heading-lines/CasesHeadingLine";
import MomentsLinesWithoutVideo from "@components/CasesComponents/MomentsLinesWithoutVid/MomentsLinesWithoutVideo";
import CasesSolutionLine from "@components/CasesComponents/ProvidedSolutionLines/CasesSolutionLine";
import CasesFeaturesLine from "@components/CasesComponents/FeaturesLines/CasesFeaturesLine";
import CasesBtnNextLine from "@components/CasesComponents/BtnNextLine/CasesBtnNextLine";
import CasesMomentsLineImage from "@components/CasesComponents/MomentsLinesWithoutVid/CasesMomentsLineImage";
import CasesAboutLine from "@components/CasesComponents/about-line-top/CasesAboutLine";

import styles from "./cases.module.scss";

const Medapp = () => {
  return (
    <>
      <div className={styles.intro}>
        <div className="container">
          <p className="heading__suptitle">Medapp</p>
          <h1 className={`${styles.intro__title} heading__title`}>
            A middleware between doctor and the pharmacy
          </h1>
        </div>
        <CasesHeadingLine />
      </div>
      <div className={styles.intro__img}>
        <Image src={medappIntro} alt="Medapp" layout="fill" objectFit="cover" />
      </div>

      <section className="section-padding about wthtVideo">
        <CasesAboutLine />
        <div className={`${styles.about} container`}>
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
                Medapp is a web application, helping doctors and clinics to keep track of their
                orders and patients medecine supply. It also provides clinics with statistics on
                patients' medicine pick up rate.
                <br />
                The main functionality of the app is to be a middleware between doctor and the
                pharmacy.
              </p>
              <a
                href="https://medapp.pl/"
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

      <section className="section-padding">
        <div className={`${styles.moments} container parent`}>
          <MomentsLinesWithoutVideo />
          <div className={styles.moments__preview}>
            <Fade direction="up" duration={1200} triggerOnce>
              <h2 className="heading__title">Challenge moments</h2>
            </Fade>
            <div className={styles.moments__preview_img}>
              <Image src={medappPreview} alt="Medapp" />
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
                    The ability to create a custom list of drugs foe each clinic
                  </li>
                  <li className={styles.moments__list_item}>
                    Selection and integration of a third-party application to automatically idetify
                    the suitable pharmacies
                  </li>
                  <li className={styles.moments__list_item}>
                    Development of functionality that allows monitoring the entire process of
                    interaction between the clinic, pharmacy and the patient for the prescribed
                    drugs
                  </li>
                  <li className={styles.moments__list_item}>
                    Building an architecture that will further expand the functionality of the
                    platform
                  </li>
                  <li className={styles.moments__list_item}>Integration with postal services</li>
                </ul>
              </>
            </Fade>
            <div className={`${styles.moments__content_img} parent`}>
              <CasesMomentsLineImage />
              <Image src={medappInfo} alt="Medapp" />
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
                <p className={styles.solutionfeatures__text}>
                  MERN stack. Fully structured API & database structure from scratch
                </p>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <Uiux />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>UI/UX</h4>
                <p className={styles.solutionfeatures__text}>
                  Finalized design from Google Docs mockups
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
                  Optimized UI/UX friendly front end using React JS. Responsive cross-browser HTML &
                  CSS
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
                  MVC architecture with Node & Express.
                </p>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <Integrations />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>Integrations</h4>
                <p className={styles.solutionfeatures__text}>
                  Using Firebase for the authorization system & CRON for updating patient adherence
                  everyday
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
                <Deployment />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>Deployment</h4>
                <p className={styles.solutionfeatures__text}>
                  Application deployed with Heroku & configured CI/CD to simplify deployment process
                </p>
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
        <Image src={extraImageMedapp} alt="Medapp" layout="fill" objectFit="cover" />
      </div>

      <section className="section-padding">
        <div className={`${styles.solutionfeatures} container parent`}>
          <CasesFeaturesLine />
          <Fade direction="up" duration={1200} triggerOnce>
            <h2 className="heading__title decor-line">Features of Medapp</h2>
          </Fade>
          <div className={styles.solutionfeatures__wrap}>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <PersonalAccount />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>
                  Creating and maintaining a personal clinic account
                </h4>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <MonitoringStatistics />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>
                  Functionality for monitoring and generating statistics on timely receipt of the
                  drug from the pharmacy for each patient.
                </h4>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <GenerationListPharmacies />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>
                  Automatic generation of a list of pharmacies, based on the patient's geography,
                  which the clinic and the patient will interact with.
                </h4>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <ManagingCycleOrdering />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>
                  Functionality for managing the cycle of ordering the drug: appointment, sending to
                  the selected pharmacy and monitoring the end of the period of taking the drug.
                </h4>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <CreatPatientCard />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>
                  Creation and editing of a patient card
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding decor-line-btn">
        <div className="container parent">
          <CasesBtnNextLine />
          <Link href="/cases/livunity">
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

export default Medapp;
