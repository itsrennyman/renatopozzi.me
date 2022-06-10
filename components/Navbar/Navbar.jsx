import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import NextLink from "next/link";
import * as React from "react";
import { useWindowWidth } from "../../hooks/use-window-width";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const width = useWindowWidth();
  const [isOpen, setIsOpen] = React.useState(false);

  const items = React.useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "Articles", href: "/articles" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Dashboard", href: "/dashboard" },
    ],
    []
  );

  const isMobile = width < 768;

  return (
    <nav className={styles.navbar}>
      <div>
        <h1 className={styles.navbar__title}>Renato Pozzi</h1>
        <button
          className="button button--secondary"
          aria-label="Toggle Menu"
          onClick={() => setIsOpen((prev) => !prev)}
          style={{ padding: "0.75rem" }}
        >
          <HamburgerMenuIcon />
        </button>
      </div>

      {(isOpen || !isMobile) && (
        <ul className={styles.navbar__items}>
          {items.map(({ label, href }) => (
            <li key={label} className={styles.navbar__items__item}>
              <NextLink href={href} passHref>
                <a className={styles.navbar__items__item__link}>{label}</a>
              </NextLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
