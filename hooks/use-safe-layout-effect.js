import * as React from "react";

const canUseDOM = () => {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
};

const useSafeLayoutEffect = canUseDOM()
  ? React.useLayoutEffect
  : React.useEffect;

export { useSafeLayoutEffect };
