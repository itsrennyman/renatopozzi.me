import { ToggleTheme } from "./ToggleTheme";

export function NavBar(props) {
  return (
    <nav className="flex max-w-8xl justify-between items-center px-8 py-8">
      {props.children}
    </nav>
  );
}

const Logo = (props) => {
  return (
    <div className="font-bold text-3xl text-black dark:text-white translation duration-200">
      {props.children}
    </div>
  );
};

const Divider = (props) => {
  return (
    <div className="w-[1px] h-9 bg-gray-300 dark:bg-gray-700 transition duration-200"></div>
  );
};

const Items = (props) => {
  return (
    <ul className="flex items-center space-x-9 text-gray-500 dark:text-gray-400">
      {props.children}
    </ul>
  );
};

const Item = (props) => {
  return (
    <li className="font-bolder text-lg hover:text-black dark:hover:text-white cursor-pointer transition duration-200">
      {props.children}
    </li>
  );
};

NavBar.Logo = Logo;
NavBar.Divider = Divider;
NavBar.Items = Items;
NavBar.Item = Item;
NavBar.ToggleTheme = ToggleTheme;
