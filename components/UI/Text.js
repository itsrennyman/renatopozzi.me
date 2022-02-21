import { styled } from "../../stitches.config";

export const Text = styled("span", {
  lineHeight: "$none",
  margin: "0",
  fontWeight: "$normal",
  fontVariantNumeric: "tabular-nums",
  display: "block",

  variants: {
    size: {
      xs: {
        fontSize: "$xs",
        lineHeight: "1rem",
      },
      sm: {
        fontSize: "$sm",
        lineHeight: "1.25rem",
      },
      base: {
        fontSize: "$base",
        lineHeight: "1.5rem",
      },
      lg: {
        fontSize: "$lg",
        lineHeight: "1.75rem",
      },
      xl: {
        fontSize: "$xl",
        lineHeight: "1.75rem",
      },
      "2xl": {
        fontSize: "$2xl",
        lineHeight: "2rem",
      },
      "3xl": {
        fontSize: "$3xl",
        lineHeight: "2.25rem",
      },
      "4xl": {
        fontSize: "$4xl",
        lineHeight: "2.5rem",
      },
      "5xl": {
        fontSize: "$5xl",
        lineHeight: "1",
      },
      "6xl": {
        fontSize: "$6xl",
        lineHeight: "1",
      },
      "7xl": {
        fontSize: "$7xl",
        lineHeight: "1",
      },
      "8xl": {
        fontSize: "$8xl",
        lineHeight: "1",
      },
      "9xl": {
        fontSize: "$9xl",
        lineHeight: "1",
      },

      1: {
        fontSize: "1rem",
        fontWeight: "400",
        lineHeight: "1.5rem",
      },
      2: {
        fontSize: "1.125rem",
        fontWeight: "500",
        lineHeight: "2rem",
      },
      3: {
        fontSize: "1.5rem",
        fontWeight: "700",
        lineHeight: "2.25rem",
      },
      4: {
        fontSize: "3rem",
        fontWeight: "700",
        lineHeight: "4rem",
      },
    },

    weight: {
      thin: {
        fontWeight: "$thin",
      },
      extralight: {
        fontWeight: "$extralight",
      },
      light: {
        fontWeight: "$light",
      },
      normal: {
        fontWeight: "$normal",
      },
      medium: {
        fontWeight: "$medium",
      },
      semibold: {
        fontWeight: "$semibold",
      },
      bold: {
        fontWeight: "$bold",
      },
      extrabold: {
        fontWeight: "$extrabold",
      },
      black: {
        fontWeight: "$black",
      },
    },

    color: {
      glowing: {
        color: "$glow100",
        textShadow: "0px 0px 76px rgba(188, 251, 195, 0.3)",
      },
      primary: {
        color: "$text100",
      },
      secondary: {
        color: "$text200",
      },
      tertiary: {
        color: "$blue500",
      },
    },
  },

  defaultVariants: {
    size: "base",
    color: "primary",
  },
});
