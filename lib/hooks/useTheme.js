import * as React from "react";

export function useTheme() {
  const mq = "(prefers-color-scheme: dark)";

  const [mode, setMode] = React.useState(() => {
    if (window.localStorage.getItem("_useTheme")) {
      return window.localStorage.getItem("_useTheme");
    }

    if (window.matchMedia && window.matchMedia(mq).matches) {
      return "dark";
    }

    return "light";
  });

  React.useEffect(() => {
    document.documentElement.className = mode;
    window.localStorage.setItem("_useTheme", mode);
  }, [mode]);

  return [mode, setMode];
}
