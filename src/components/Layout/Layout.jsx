import { createContext, useState } from "react";
import Head from "next/head";

import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import Modal from "@components/Modal/Modal";
import ContactForm from "@components/Forms/ContactForm";
import Notification from "@components/Notification/Notification";

export const FormsContext = createContext(null);

const Layout = ({ title = "SDA Company - Your partner in the digital world", children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <FormsContext.Provider value={{ setSubmitSuccess, setSubmitError }}>
        <div className="wrapper">
          <Header openModal={setIsModalOpen} />
          <main className="main">{children}</main>
          <Footer />
        </div>
        <Modal active={isModalOpen} setActive={setIsModalOpen}>
          <ContactForm setIsModalOpen={setIsModalOpen} />
        </Modal>
        <Notification active={submitSuccess} setActive={setSubmitSuccess} success hasCloseBtn>
          Form is successfully submited
        </Notification>
        <Notification active={submitError} setActive={setSubmitError} error hasCloseBtn>
          Something went wrong. Please try again later.
        </Notification>
      </FormsContext.Provider>
    </>
  );
};

export default Layout;
