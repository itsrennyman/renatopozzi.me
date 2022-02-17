import * as React from "react";
import useSWR from "swr";
import PropTypes from "prop-types";
import fetch from "cross-fetch";
import { animate } from "framer-motion";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const formatter = (number) => {
  if (typeof number === "string") {
    number = Number(number);
  }

  if (number < 1000) {
    return number.toFixed(0);
  }

  if (number < 1000000) {
    return `${(number / 1000).toFixed(1)}k`;
  }

  if (number < 1000000000) {
    return `${(number / 1000000).toFixed(1)}M`;
  }

  return `${(number / 1000000000).toFixed(1)}B`;
};

export function Counter({ url, value, duration = 2 }) {
  const prevCounterRef = React.useRef(0);
  const nodeRef = React.useRef();
  const { data, error } = useSWR(url, fetcher);

  const isLoaded = data && !error;

  React.useEffect(() => {
    if (!isLoaded) {
      nodeRef.current.textContent = "_";
      return false;
    }

    const { [value]: counter } = data;

    if (prevCounterRef.current === counter) {
      return false;
    }

    const controls = animate(prevCounterRef.current, counter, {
      duration: duration,
      onUpdate: (value) => {
        nodeRef.current.textContent = formatter(value);
      },
    });

    prevCounterRef.current = counter;

    return () => controls.stop();
  }, [isLoaded, data, value, duration]);

  return <span ref={nodeRef}></span>;
}

Counter.propTypes = {
  url: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  duration: PropTypes.number,
};
