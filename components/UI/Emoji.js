import PropTypes from "prop-types";

export function Emoji({ label, symbol }) {
  return (
    <span role="img" aria-label={label} aria-hidden={label ? "false" : "true"}>
      {symbol}
    </span>
  );
}

Emoji.propTypes = {
  label: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};
