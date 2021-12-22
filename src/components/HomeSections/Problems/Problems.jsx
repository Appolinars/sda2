import Accordion from "@components/Accordion/Accordion";
import styles from "./Problems.module.scss";

const accordionsData = [
  {
    suptitle: "Problem 01",
    title: "Lack of dedicated team",
    contentTitle: "Reliable team set up",
    contentText:
      "We provide you consistent relibable team for your individual task",
  },
  {
    suptitle: "Problem 02",
    title: "Lost of control",
    contentTitle: "Consulting & Solution",
    contentText:
      "Analysis, consulting & providing custom or regular software solution based on the individual case and situation, as well as, proven experience of proficiency.",
  },
  {
    suptitle: "Problem 03",
    title: "Lost of time",
    contentTitle: "Thoughtful managment system",
    contentText:
      "We manage your projects software development life cycle with only your periodic check points of version control.",
  },
];

const Problems = () => {
  return (
    <section className={`${styles.problems} section-padding`}>
      <div className={`${styles.problems__inner} container`}>
        <div className={`${styles.problems__heading} heading`}>
          <h2 className="heading__title">Problems of our clients that we already solved</h2>
        </div>
        <div className={styles.problems__list}>
          {accordionsData.map((accordion) => (
            <Accordion
              key={accordion.title}
              suptitle={accordion.suptitle}
              title={accordion.title}
              contentTitle={accordion.contentTitle}
              contentText={accordion.contentText}
              extraClass={styles.problems__item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
