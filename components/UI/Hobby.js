import PropTypes from "prop-types";
import { Panel } from "./Panel";

export function Hobby({ title, icon: Icon, children }) {
  return (
    <Panel>
      <Icon className="h-8 w-8 text-black dark:text-white" />
      <h3 className="text-black dark:text-white font-bold text-2xl mt-8">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 tracking-tight text-lg mt-2">
        {children}
      </p>
    </Panel>
  );
}

Hobby.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
