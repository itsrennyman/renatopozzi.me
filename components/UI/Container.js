import PropTypes from "prop-types";

export function Container({ children }) {
  return (
    <main className="flex flex-col max-w-7xl mx-auto px-4 md:px-8">
      {children}
    </main>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
