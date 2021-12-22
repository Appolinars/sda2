import { useState } from "react";
import Head from "next/head";

import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import Modal from "@components/Modal/Modal";
import ContactForm from "@components/Forms/ContactForm";

const Layout = ({ title = "SDA Company - Your partner in the digital world", children }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="wrapper">
        <Header openModal={setIsModalOpen} />
        <main className="main">{children}</main>
        <Footer />
      </div>
      <Modal active={isModalOpen} setActive={setIsModalOpen}>
        <ContactForm />
      </Modal>
    </>
  );
};

export default Layout;
