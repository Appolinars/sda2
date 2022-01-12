import React, { useCallback, useEffect, useState } from "react";
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
    } else {
      document.body.style.overflow = "unset";
      document.body.style.overflowX = "hidden";
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
          <ul className={styles.nav__list} onClick={(e) => e.stopPropagation()}>
            <li className={styles.nav__item}>
              <Link href="/#projects">
                <a className={styles.nav__link} onClick={() => setBurgerActive(false)}>
                  Cases
                </a>
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="/blog">
                <a className={styles.nav__link} onClick={() => setBurgerActive(false)}>
                  Blog
                </a>
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="/#about">
                <a className={styles.nav__link} onClick={() => setBurgerActive(false)}>
                  About us
                </a>
              </Link>
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
