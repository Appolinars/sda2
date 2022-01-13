import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { encodeFormData } from "src/utils/helpers";

import Input from "@components/Input/Input";
import Notification from "@components/Notification/Notification";
import SignLines from "./SignLines/SignLines";
import styles from "./Sign.module.scss";

const Sign = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleAjaxSubmit = (e) => {
    e.preventDefault();

    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      return setEmailError(true);
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeFormData({ "form-name": "Sign_form", email }),
    })
      .then(() => {
        setEmail("");
        setSuccess(true);
      })
      .catch((error) => {
        setSubmitError(true);
        console.log(error);
      });
  };

  return (
    <>
      <section className={styles.sign}>
        <div className={`${styles.sign__inner} container`}>
          <Fade direction="up" duration={1200} cascade damping={0.2} triggerOnce>
            <div className={`${styles.sign__heading} heading`}>
              <h2 className="heading__title">Sign up for our newsletter</h2>
              <p className="heading__subtitle">
                Stay updated and get our latest news right into your inbox. No spam.
              </p>
            </div>
            <form
              className={styles.sign__form}
              name="Sign_form"
              method="POST"
              id="Sign_form"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleAjaxSubmit}
            >
              <input type="hidden" name="form-name" value="Sign_form" />
              <Input
                value={email}
                onChange={(e) => {
                  setEmailError(false);
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="Your email address"
                extraClass={styles.sign__input}
                inputError={emailError}
                name="email"
              />
              <button className={`${styles.sign__btn} btn`}>Sign up</button>
            </form>
          </Fade>
        </div>
        <SignLines />
      </section>
      <Notification active={success} setActive={setSuccess} success hasCloseBtn>
        Form is successfully submited
      </Notification>
      <Notification active={submitError} setActive={setSubmitError} error hasCloseBtn>
        Something went wrong. Please try again later.
      </Notification>
    </>
  );
};

export default Sign;
