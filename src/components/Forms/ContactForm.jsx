import Input from "@components/Input/Input";
import { PinIcon } from "@components/SVGIcons/SVGIcons";
import styles from "./ContactForm.module.scss";

const ContactForm = ({ extraClass }) => {
  return (
    <form className={extraClass ? `${extraClass} ${styles.form}` : `${styles.form}`}>
      <Input type="text" placeholder="Name" extraClass={styles.form__input} />
      <Input type="email" placeholder="Email" extraClass={styles.form__input} />
      <Input type="text" placeholder="Phone / Skype" extraClass={styles.form__input} />
      <Input type="text" placeholder="Message or question" extraClass={styles.form__input} />
      <div className={styles.form__extra}>
        <label className={styles.form__checkbox}>
          <input type="checkbox" />
          <span></span>
          Get an NDA
        </label>
        <button className="btn">
          Attach files <PinIcon />
        </button>
      </div>
      <button className={`${styles.form__btn} btn`}>Send message</button>
    </form>
  );
};

export default ContactForm;
