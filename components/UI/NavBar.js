import { ToggleTheme } from "../ToggleTheme";
import { Link } from "../Link";

export function NavBar(props) {
  return (
    <nav className="flex max-w-[96rem] mx-auto justify-between items-center px-8 py-8 md:py-12">
      {props.children}
    </nav>
  );
}

const Logo = ({ children, href = "/" }) => {
  return (
    <Link
      href={href}
      className="font-bold text-3xl text-black dark:text-white translation duration-200"
    >
      {children}
    </Link>
  );
};

const Divider = () => {
  return (
    <div className="hidden sm:block w-[1px] h-9 bg-gray-300 dark:bg-gray-700 transition duration-200"></div>
  );
};

const Items = (props) => {
  return (
    <ul className="hidden sm:flex items-center space-x-9 text-gray-500 dark:text-gray-400">
      {props.children}
    </ul>
  );
};

const Item = ({ children, href = "/" }) => {
  return (
    <li className="font-bolder text-lg hover:text-black dark:hover:text-white cursor-pointer transition duration-200">
      <Link href={href}>{children}</Link>
    </li>
  );
};

NavBar.Logo = Logo;
NavBar.Divider = Divider;
NavBar.Items = Items;
NavBar.Item = Item;
NavBar.ToggleTheme = ToggleTheme;
