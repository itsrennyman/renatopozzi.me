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
  media: {
    bp1: "(min-width: 640px)",
  },
  theme: {
    colors: {
      white100: "rgba(255, 255, 255, 0.1)",
      white200: "rgba(255, 255, 255, 0.2)",
      white300: "rgba(255, 255, 255, 0.3)",
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
    shadows: {
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
