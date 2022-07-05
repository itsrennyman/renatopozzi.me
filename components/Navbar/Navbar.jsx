import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import * as React from "react";
import { useWindowWidth } from "../../hooks/use-window-width";

export const Navbar = () => {
  const width = useWindowWidth();
  const [isOpen, setIsOpen] = React.useState(false);

  const items = React.useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "Articles", href: "/articles" },
      { label: "Guestbook", href: "/guestbook" },
      { label: "Newsletter", href: "/newsletter" },
    ],
    []
  );

  const isMobile = width < 768;

  return (
    <nav className="flex flex-col align-stretch justify-center gap-5 border-b-zinc-800 py-6 md:flex-row md:items-center md:justify-between md:border-none md:py-10 mx-auto px-6 max-w-6xl text-zinc-100">
      <div className="flex flex-row justify-between">
        <div className="text-2xl md:text-3xl font-semibold leading-9">
          Renato Pozzi
        </div>
        <button
          className="cursor-pointer p-3 rounded-lg text-zinc-100 bg-zinc-800 hover:bg-zinc-700 md:hidden"
          aria-label="Toggle Menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <HamburgerMenuIcon />
        </button>
      </div>

      {(isOpen || !isMobile) && (
        <ul className="flex flex-col align-start gap-4 md:flex-row md:items-center md:gap-7">
          {items.map(({ label, href }) => (
            <li
              key={label}
              className="text-md font-normal leading-6 md:text-lg md:font-bold md:leading-7"
            >
              <Link href={href} passHref>
                <a className="animation-underline">{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
