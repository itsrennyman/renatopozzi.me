import { Link } from "../UI/Link";

export function Footer({ children }) {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-[96rem] mx-auto py-12 px-4 sm:px-6 lg:py-36 lg:px-8 ">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">{children}</div>
      </div>
    </footer>
  );
}

const Bio = ({ children }) => {
  return (
    <p className="text-2xl max-w-sm text-gray-500 dark:text-gray-400">
      {children}
    </p>
  );
};

const MenuTitle = ({ children }) => {
  return (
    <h3 className="text-xl font-semibold text-black dark:text-white tracking-tight uppercase">
      {children}
    </h3>
  );
};

const Menu = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

const MenuItems = ({ children }) => {
  return (
    <ul role="list" className="mt-4 space-y-4">
      {children}
    </ul>
  );
};

const MenuItem = ({ children, href = "#", isExternal = false }) => {
  return (
    <li>
      <Link
        className="text-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-100"
        isExternal={isExternal}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

const SocialIcon = ({ icon: Icon, href = "#", isExternal = false, label }) => {
  return (
    <Link
      href={href}
      isExternal={isExternal}
      className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-100"
    >
      <span className="sr-only">{label}</span>
      <Icon className="w-8 h-8" />
    </Link>
  );
};

const Logo = ({ children }) => {
  return (
    <Link
      href="/"
      className="font-bold text-3xl text-black dark:text-white translation duration-200"
    >
      {children}
    </Link>
  );
};

const SocialIcons = (props) => {
  return <div className="flex space-x-6 pt-2">{props.children}</div>;
};

Footer.Bio = Bio;
Footer.Logo = Logo;
Footer.Menu = Menu;
Footer.MenuItem = MenuItem;
Footer.MenuItems = MenuItems;
Footer.MenuTitle = MenuTitle;
Footer.SocialIcon = SocialIcon;
Footer.SocialIcons = SocialIcons;
