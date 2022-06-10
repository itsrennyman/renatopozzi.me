import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import NextLink from "next/link";
import * as React from "react";
import { useWindowWidth } from "../../hooks/use-window-width";

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
    <nav className="flex flex-col align-stretch justify-center gap-5 border-b-zinc-800 py-6 md:flex-row md:align-center md:justify-between md:border-none md:py-10 mx-auto px-6 max-w-6xl text-zinc-100">
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl md:text-3xl font-semibold leading-9">
          Renato Pozzi
        </h1>
        <button
          className="cursor-pointer p-3 rounded-lg text-zinc-100 bg-zinc-800 hover:bg-zinc-700 md:hidden"
          aria-label="Toggle Menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <HamburgerMenuIcon />
        </button>
      </div>

      {(isOpen || !isMobile) && (
        <ul className="flex flex-col align-start gap-4 md:flex-row md:align-center md:gap-7">
          {items.map(({ label, href }) => (
            <li
              key={label}
              className="text-md font-normal leading-6 md:text-lg md:font-bold md:leading-7"
            >
              <NextLink href={href} passHref>
                <a className="animation-underline">{label}</a>
              </NextLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
