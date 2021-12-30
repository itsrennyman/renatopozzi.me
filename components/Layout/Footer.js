export function Footer(props) {
  return (
    <footer className="text-black dark:text-white">
      <div className="flex max-w-[96rem] mx-auto flex-col items-center px-8 py-8 max-w-8xl sm:flex-row">
        {props.children}
      </div>
    </footer>
  );
}

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

const Icon = ({ icon: Icon, href, label }) => {
  return (
    <a href={href} className="text-gray-400 hover:text-gray-500">
      <span className="sr-only">{label}</span>
      <Icon className="w-6 h-6" />
    </a>
  );
};

Footer.Logo = Logo;
Footer.Sentence = Sentence;
Footer.Icons = Icons;
Footer.Icon = Icon;
