import { Fade } from "react-awesome-reveal";

import Accordion from "@components/Accordion/Accordion";
import ProblemsLine1 from "./ProblemsLines/ProblemsLine1";
import ProblemsLine2 from "./ProblemsLines/ProblemsLine2";
import ProblemsLine3 from "./ProblemsLines/ProblemsLine3";
import ProblemsLine4 from "./ProblemsLines/ProblemsLine4";
import styles from "./Problems.module.scss";

const accordionsData = [
  {
    suptitle: "Problem 01",
    title: "Lack of dedicated team",
    contentTitle: "Reliable team set up",
    contentText: "We provide you consistent relibable team for your individual task",
    svgLine: <ProblemsLine1 />,
  },
  {
    suptitle: "Problem 02",
    title: "Lost of control",
    contentTitle: "Consulting & Solution",
    contentText:
      "Analysis, consulting & providing custom or regular software solution based on the individual case and situation, as well as, proven experience of proficiency.",
    svgLine: <ProblemsLine2 />,
  },
  {
    suptitle: "Problem 03",
    title: "Lost of time",
    contentTitle: "Thoughtful managment system",
    contentText:
      "We manage your projects software development life cycle with only your periodic check points of version control.",
    svgLine: <ProblemsLine3 />,
  },
];

const Problems = () => {
  return (
    <section className={`${styles.problems} section-padding`}>
      <div className={`${styles.problems__inner} container`}>
        <Fade direction="up" duration={1200} triggerOnce>
          <div className={`${styles.problems__heading} heading`}>
            <h2 className="heading__title">Problems of our clients that we already solved</h2>
          </div>
        </Fade>
        <div className={styles.problems__list}>
          {accordionsData.map((accordion) => (
            <Accordion
              key={accordion.title}
              accordion={accordion}
              extraClass={styles.problems__item}
            />
          ))}
        </div>
        <ProblemsLine4 />
      </div>
    </section>
  );
};

export default Problems;
