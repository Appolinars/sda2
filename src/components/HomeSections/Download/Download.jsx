import { useContext, useState } from "react";
import { Fade } from "react-awesome-reveal";

import { FormsContext } from "@components/Layout/Layout";
import { encodeFormData } from "src/utils/helpers";

import { DownloadIcon } from "@components/SVGIcons/SVGIcons";
import DownloadLines from "./DownloadLines/DownloadLines";
import Modal from "@components/Modal/Modal";
import Input from "@components/Input/Input";
import Loader from "@components/Loader/Loader";

import styles from "./Download.module.scss";

const Download = () => {
  const { setSubmitSuccess, setSubmitError } = useContext(FormsContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChangeInput = (e) => {
    if (e.target.name === "email") {
      setEmailError(false);
    }
    const value = e.target.value;

    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleAjaxSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      return setEmailError(true);
    }
    setIsLoading(true);

    fetch("/", {
      method: "POST",
      body: encodeFormData({ "form-name": "Subscribe form", ...formData }),
    })
      .then(() => {
        setIsModalOpen(false);
        setFormData({
          name: "",
          email: "",
        });
        setSubmitSuccess(true);
      })
      .catch((error) => {
        setSubmitError(true);
        console.log(error);
      })
      .finally(() => {
        setIsModalOpen(false);
        setIsLoading(false);
      });
  };

  return (
    <>
      <section className={styles.download}>
        <div className={`${styles.download__inner} container`}>
          <Fade direction="up" duration={1200} cascade damping={0.2} triggerOnce>
            <div className={`${styles.download__heading} heading`}>
              <h2 className="heading__title">
                General data protection regulation. Best practices & checklists.
              </h2>
              <p className="heading__subtitle">Take a whitepaper with you.</p>
            </div>
            <button
              className={`${styles.download__btn} btn btn--white`}
              onClick={() => setIsModalOpen(true)}
            >
              Free download <DownloadIcon />
            </button>
          </Fade>
          <DownloadLines />
        </div>
      </section>
      <Modal active={isModalOpen} setActive={setIsModalOpen}>
        <form
          className={styles.form}
          name="Subscribe form"
          method="POST"
          id="Subscribe_form"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleAjaxSubmit}
        >
          <input type="hidden" name="form-name" value="Subscribe form" />
          <Input
            value={formData.name}
            onChange={handleChangeInput}
            name="name"
            type="text"
            placeholder="Name"
            extraClass={styles.form__input}
          />
          <Input
            value={formData.email}
            onChange={handleChangeInput}
            name="email"
            type="email"
            placeholder="Email"
            extraClass={styles.form__input}
            inputError={emailError}
          />
          <button className={`${styles.form__btn} btn`}>
            Subscribe {isLoading && <Loader color="#fff" className={styles.form__loader} />}
          </button>
        </form>
      </Modal>
    </>
  );
};

export default Download;
