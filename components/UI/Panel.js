import PropTypes from "prop-types";

export function Panel({ children }) {
  return (
    <div className="p-8 rounded-lg bg-gray-100 dark:bg-gray-800">
      {children}
    </div>
  );
}

Panel.propTypes = {
  children: PropTypes.node.isRequired,
};
