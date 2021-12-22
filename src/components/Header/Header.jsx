import React, { useCallback, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "../SVGIcons/SVGIcons";
import styles from "./Header.module.scss";
import Burger from "@components/Burger/Burger";

const Header = ({ openModal }) => {
  const [fixedHeader, setFixedHeader] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false);

  const disableBodyScroll = useCallback(() => {
    if (burgerActive) {
      document.body.style.overflow = "hidden";
      // document.body.style.paddingRight = "10px"; // Prevent page-jump when remove scroll
    } else {
      document.body.style.overflow = "unset";
      document.body.style.overflowX = "hidden";
      // document.body.style.paddingRight = "0";
    }
  }, [burgerActive]);

  useEffect(() => {
    window.addEventListener("scroll", toggleFixedHeader);
    disableBodyScroll();

    return () => {
      window.removeEventListener("scroll", toggleFixedHeader);
    };
  }, [burgerActive, disableBodyScroll]);

  const toggleBurgerMenu = () => {
    setBurgerActive(!burgerActive);
  };

  const toggleFixedHeader = () => {
    if (window.scrollY >= 200) {
      setFixedHeader(true);
    } else {
      setFixedHeader(false);
    }
  };

  return (
    <header className={fixedHeader ? `${styles.header} ${styles.fixed}` : `${styles.header}`}>
      <div className={`${styles.header__inner} container`}>
        <Burger toggleBurgerMenu={toggleBurgerMenu} burgerActive={burgerActive} />
        <Link href="/">
          <a className={styles.logo} aria-label="SDA Company">
            <Logo />
          </a>
        </Link>
        <nav
          className={burgerActive ? `${styles.nav} ${styles.nav_active}` : `${styles.nav}`}
          onClick={toggleBurgerMenu}
        >
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <a href="/" className={styles.nav__link}>
                Cases
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href="/" className={styles.nav__link}>
                Blog
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href="/" className={styles.nav__link}>
                About us
              </a>
            </li>
          </ul>
        </nav>
        <button className={`${styles.header__btn} btn btn--white`} onClick={openModal}>
          Get in touch
        </button>
      </div>
    </header>
  );
};

export default Header;
