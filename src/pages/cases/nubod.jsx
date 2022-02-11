import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

import nubodIntro from "@images/cases/nubod/nubod-intro.jpg";
import nubodPreview from "@images/cases/nubod/nubod-preview.jpg";
import nubodInfo from "@images/cases/nubod/nubod-info.jpg";
import extraImageNubod from "@images/cases/nubod/extra-image-nubod.jpg";

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
  CoachingPrograms,
  ManualMealPlans,
  MealPlanTemplates,
  AddDaysWeeks,
  AdminAccounts,
  TrackingProgress,
  CalculationCalories,
  CreateShopingList,
  CoachCommunity,
  EmailNotification,
} from "@components/SVGIcons/SVGIconsFeaturesNubod";
import { OpenIcon } from "@components/SVGIcons/SVGIcons";
import { ArrowRight } from "@components/SVGIcons/SVGIcons";

import CasesHeadingLine from "@components/CasesComponents/heading-lines/CasesHeadingLine";
import CasesAboutLine from "@components/CasesComponents/about-line-top/CasesAboutLine";
import MomentsLinesWithoutVideo from "@components/CasesComponents/MomentsLinesWithoutVid/MomentsLinesWithoutVideo";
import CasesSolutionLine from "@components/CasesComponents/ProvidedSolutionLines/CasesSolutionLine";
import CasesFeaturesLine from "@components/CasesComponents/FeaturesLines/CasesFeaturesLine";
import CasesBtnNextLine from "@components/CasesComponents/BtnNextLine/CasesBtnNextLine";
import CasesMomentsLineImage from "@components/CasesComponents/MomentsLinesWithoutVid/CasesMomentsLineImage";

import styles from "./cases.module.scss";

const Nubod = () => {
  return (
    <>
      <div className={styles.intro}>
        <div className="container">
          <p className="heading__suptitle">Nubod</p>
          <h1 className={`${styles.intro__title} heading__title`}>
            A custom fitness program that changes with your body
          </h1>
        </div>
        <CasesHeadingLine />
      </div>
      <div className={styles.intro__img}>
        <Image src={nubodIntro} alt="Nubod" layout="fill" objectFit="cover" />
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
                A custom fitness program that changes with your body. Nubod provides personalized,
                flexible diet programs that take into account your unique situation.
                <br />
                It offers one-on-one coaching, smart shopping lists, the option to swap foods based
                on what you have available, and best of all, a program that updates every two weeks
                to ensure you never hit a plateau.
                <br />
                With Nubod full-service platform that offers everything you need to reach your
                goals, you can get all the perks of a real-life diet coach at only a fraction of the
                cost.
              </p>
              <a
                href="https://nubodapparel.net/"
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
              <Image src={nubodPreview} alt="Nubod" />
            </div>
          </div>
          <div className={styles.moments__content}>
            <Fade direction="right" duration={1200} triggerOnce className="reveal-animated">
              <>
                <ul className={styles.moments__list}>
                  <li className={styles.moments__list_item}>
                    Development of a user-friendly interface.
                  </li>
                  <li className={styles.moments__list_item}>Application prototype development.</li>
                  <li className={styles.moments__list_item}>
                    The ability to create a custom meal plan based on individual client requests in
                    terms of calorie content, duration, physical characteristics and individual
                    preferences.
                  </li>

                  <li className={styles.moments__list_item}>
                    Creation of functionality for communication on the platform - correspondence and
                    video calls.
                  </li>
                  <li className={styles.moments__list_item}>
                    The logic and functionality of the payment and withdrawal process.
                  </li>

                  <li className={styles.moments__list_item}>
                    Building an architecture that will further expand the functionality of the
                    platform.
                  </li>
                  <li className={styles.moments__list_item}>Integration with postal services.</li>
                  <li className={styles.moments__list_item}>
                    Selection and integration with third-party applications to provide custom
                    application functionality.
                  </li>
                </ul>
              </>
            </Fade>
            <div className={`${styles.moments__content_img} parent`}>
              <CasesMomentsLineImage />
              <Image src={nubodInfo} alt="Nubod" />
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
                  Optimized UI/UX friendly front end using React JS
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
                  Integration with Edamam and Fitbit. Stripe integration for the payment process.
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
        <Image src={extraImageNubod} alt="Nubod" layout="fill" objectFit="cover" />
      </div>

      <section className="section-padding">
        <div className={`${styles.solutionfeatures} container parent`}>
          <CasesFeaturesLine />
          <Fade direction="up" duration={1200} triggerOnce>
            <h2 className="heading__title decor-line">Features of Nubod</h2>
          </Fade>
          <div className={styles.solutionfeatures__wrap}>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <CoachingPrograms />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>Variety of coaching programs</h4>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <ManualMealPlans />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>
                  Create and assign manual meal plans
                </h4>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <MealPlanTemplates />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>
                  Create and save meal plan templates
                </h4>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <AddDaysWeeks />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>
                  Unlimited ability to add days, weeks, meals, and foods
                </h4>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <AdminAccounts />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>
                  Ability to add custom and alternative food for admin (trainer) accounts
                </h4>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <TrackingProgress />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>
                  Functionality for tracking client progress
                </h4>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <CalculationCalories />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>
                  Automatic calculation of total calories, proteins, carbs and fats
                </h4>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <CreateShopingList />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>
                  Create a shopping list with recipes for a manual meal plan for the client
                </h4>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <CoachCommunity />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>
                  Functionality for communication with the coach and the internal community
                </h4>
              </div>
            </div>
            <div className={styles.solutionfeatures__item}>
              <div className={styles.solutionfeatures__icon}>
                <EmailNotification />
              </div>
              <div className={styles.solutionfeatures__info}>
                <h4 className={styles.solutionfeatures__subtitle}>
                  Adding email notification for the user
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding decor-line-btn">
        <div className="container parent">
          <CasesBtnNextLine />
          <Link href="/cases/medapp">
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

export default Nubod;
