import { useContext, useState } from "react";
import { encodeFormData } from "src/utils/helpers";
import { FormsContext } from "@components/Layout/Layout";

import Input from "@components/Input/Input";
import Loader from "@components/Loader/Loader";
import { PinIcon, FileUploadedIcon } from "@components/SVGIcons/SVGIcons";
import styles from "./ContactForm.module.scss";

const ContactForm = ({ extraClass, setIsModalOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    getNDA: false,
    file: null,
  });
  const [emailError, setEmailError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setSubmitSuccess, setSubmitError } = useContext(FormsContext);

  const handleChangeInput = (e) => {
    if (e.target.name === "email") {
      setEmailError(false);
    }
    const value =
      e.target.type === "checkbox"
        ? e.target.checked
        : e.target.type === "file"
        ? e.target.files[0]
        : e.target.value;

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
      body: encodeFormData({ "form-name": "Contact form", ...formData }),
    })
      .then(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          getNDA: false,
          file: null,
        });
        setIsLoading(false);
        setIsModalOpen && setIsModalOpen(false);
        setSubmitSuccess(true);
      })
      .catch((error) => {
        setIsModalOpen && setIsModalOpen(false);
        setSubmitError(true);
        console.log(error);
      });
  };

  return (
    <>
      <form
        className={extraClass ? `${extraClass} ${styles.form}` : `${styles.form}`}
        name="Contact form"
        method="POST"
        id="Contact_form"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleAjaxSubmit}
      >
        <input type="hidden" name="form-name" value="Contact form" />
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
        <Input
          value={formData.phone}
          onChange={handleChangeInput}
          name="phone"
          type="text"
          placeholder="Phone / Skype"
          extraClass={styles.form__input}
        />
        <Input
          value={formData.message}
          onChange={handleChangeInput}
          name="message"
          type="text"
          placeholder="Message or question"
          extraClass={styles.form__input}
        />
        <div className={styles.form__extra}>
          <label className={styles.form__checkbox}>
            <input
              name="getNDA"
              type="checkbox"
              checked={formData.getNDA}
              onChange={handleChangeInput}
            />
            <span></span>
            Get an NDA
          </label>
          <div className={styles.form__file}>
            <label className="btn">
              Attach files <PinIcon />
              <input type="file" name="file" onChange={handleChangeInput} />
            </label>
            {formData.file && <FileUploadedIcon iconClass={styles.form__file_uploaded} />}
          </div>
        </div>
        <button className={`${styles.form__btn} btn`}>
          Send message {isLoading && <Loader color="#fff" className={styles.form__loader} />}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
