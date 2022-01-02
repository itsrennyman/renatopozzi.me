import PropTypes from "prop-types";

export function Container(props) {
  return (
    <main className="flex flex-col max-w-7xl mx-auto px-8">
      {props.children}
    </main>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
