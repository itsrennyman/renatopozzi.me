import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyFrames,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    media: {
      sm: "(min-width: 640px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 1024px)",
    },
    colors: {
      glow100: "#b0fbbc",
      glow200: "#82f9a1",
      text100: "#ecf8ff",
      text200: "#c9e2f0",
      blue100: "#111a20",
      blue200: "#1c2c35",
      blue300: "#243b4a",
      blue400: "#416833",
      blue500: "#5e8ca7",
    },
    fontSizes: {
      header: "3rem",
      subheader: "1.125rem",
      title: "1.5rem",
      paragraph: "1rem",
    },
    fontWeights: {
      header: "700",
      subheader: "500",
      title: "700",
      paragraph: "400",
    },
    lineHeights: {
      header: "4rem",
      subheader: "2rem",
      title: "2.25rem",
      paragraph: "1.5rem",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
      7: "45px",
      8: "65px",
      9: "80px",
    },
  },
});
