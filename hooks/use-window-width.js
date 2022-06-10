import * as React from "react";
import { useSafeLayoutEffect } from "./use-safe-layout-effect";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = React.useState(undefined);

  useSafeLayoutEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};

export { useWindowWidth };
