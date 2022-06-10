/* eslint-disable @next/next/no-img-element */
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__text}>
        Copyright © {new Date().getFullYear()} Renato Pozzi
        <br /> Inspired By Ryan Warner Design. Built with Next.js. Hosted on
        Vercel.
      </div>

      <div className={styles.footer__icons}>
        <a
          href="https://twitter.com/imarenny"
          target="_blank"
          rel="noopener noreferrer"
          alt="Go To Twitter Profile"
        >
          <img
            className={styles.footer__icons__icon}
            alt="Twitter Icon"
            src="/assets/icons/twitter.svg"
          />
        </a>
        <a
          href="https://github.com/itsrennyman"
          target="_blank"
          rel="noopener noreferrer"
          alt="Go To Github Profile"
        >
          <img
            className={styles.footer__icons__icon}
            alt="Github Icon"
            src="/assets/icons/github.svg"
          />
        </a>
      </div>
    </div>
  );
};
