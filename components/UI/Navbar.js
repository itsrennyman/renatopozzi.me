import PropTypes from "prop-types";
import { Link } from "./Link";

export function Navbar({ children }) {
  return (
    <nav className="flex max-w-[96rem] mx-auto justify-between items-center space-x-8 px-4 md:px-8 py-8 md:py-12">
      {children}
    </nav>
  );
}

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
};

Navbar.Logo = function Logo({ children, href = "/" }) {
  return (
    <Link
      href={href}
      className="font-bold text-3xl text-black dark:text-white translation duration-200"
    >
      {children}
    </Link>
  );
};

Navbar.Logo.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
};

Navbar.Divider = function Divider() {
  return (
    <div className="hidden sm:block w-[1px] h-9 bg-gray-300 dark:bg-gray-700 transition duration-200"></div>
  );
};

Navbar.Items = function Items({ children }) {
  return (
    <ul className="hidden sm:flex items-center space-x-9 text-gray-500 dark:text-gray-400">
      {children}
    </ul>
  );
};

Navbar.Items.propTypes = {
  children: PropTypes.node.isRequired,
};

Navbar.Item = function Item({ children, href = "/" }) {
  return (
    <li className="font-bolder text-lg hover:text-black dark:hover:text-white cursor-pointer transition duration-200">
      <Link href={href}>{children}</Link>
    </li>
  );
};

Navbar.Item.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
