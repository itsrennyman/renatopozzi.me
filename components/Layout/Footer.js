import { NewspaperIcon } from "@heroicons/react/outline";
import { Github } from "../Icons/Github";
import { Instagram } from "../Icons/Instagram";

import { Twitter } from "../Icons/Twitter";
import { Link } from "../Link";

export function Footer(props) {
  return (
    // <footer className="text-black dark:text-white">
    //   <div className="flex max-w-[96rem] mx-auto flex-col items-center px-8 py-8 max-w-8xl sm:flex-row">
    //     {props.children}
    //   </div>
    // </footer>

    <footer>
      <div className="max-w-[96rem] mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="text-gray-500 space-y-4 xl:col-span-1">
            <div className="font-bold text-3xl text-black dark:text-white translation duration-200">
              Renato Pozzi
            </div>
            <p className="text-base text-gray-500 dark:text-gray-400">
              I photograph landscapes as a hobby, and I create applications for
              making the web faster.
            </p>
            <div className="flex space-x-6">
              <Icon icon={Twitter} label="Twitter" />
              <Icon icon={Github} label="Github" />
              <Icon icon={Instagram} label="Instagram" />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <MenuTitle>Resources</MenuTitle>
                <ul role="list" className="mt-4 space-y-4">
                  <MenuItem>Blog</MenuItem>
                  <MenuItem>Youtube Channel</MenuItem>
                  <MenuItem>Nx Playbook</MenuItem>
                  <MenuItem>Nrwl</MenuItem>
                </ul>
              </div>

              <div className="mt-12 md:mt-0">
                <MenuTitle>Community</MenuTitle>
                <ul role="list" className="mt-4 space-y-4">
                  <MenuItem>Twitter</MenuItem>
                  <MenuItem>Github</MenuItem>
                  <MenuItem>Newsletter</MenuItem>
                  <MenuItem>Slack</MenuItem>
                  <MenuItem>Help Us</MenuItem>
                </ul>
              </div>
            </div>

            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div className="mt-12 md:mt-0">
                {/* <MenuTitle>Solutions</MenuTitle>
                <ul role="list" className="mt-4 space-y-4">
                  <MenuItem>Nx</MenuItem>
                  <MenuItem>NxCloud</MenuItem>
                  <MenuItem>Nrwl</MenuItem>
                </ul> */}
                <MenuTitle>Newsletter</MenuTitle>
                <div className="mt-4 space-y-4">
                  <input className="bg-gray-800 w-full rounded-lg px-4 py-3" />
                  <textarea
                    rows={6}
                    className="bg-gray-800 w-full rounded-lg px-4 py-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const MenuTitle = ({ children }) => {
  return (
    <h3 className="text-sm font-semibold text-black dark:text-white tracking-tight uppercase">
      {children}
    </h3>
  );
};

const MenuItem = ({ children, href = "#" }) => {
  return (
    <li>
      <Link
        className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-100"
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

const Icon = ({ icon: Icon, href = "#", label }) => {
  return (
    <Link
      href={href}
      className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-100"
    >
      <span className="sr-only">{label}</span>
      <Icon className="w-6 h-6" />
    </Link>
  );
};

const Logo = (props) => {
  return (
    <a href="#_" className="text-xl font-bold leading-none">
      {props.children}
    </a>
  );
};

const Sentence = (props) => {
  return (
    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
      {props.children}
    </p>
  );
};

const Icons = (props) => {
  return (
    <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
      {props.children}
    </span>
  );
};

Footer.Logo = Logo;
Footer.Sentence = Sentence;
Footer.Icons = Icons;
Footer.Icon = Icon;
