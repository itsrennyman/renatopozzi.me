import { styled } from "../../stitches.config";

export const Text = styled("span", {
  // Reset
  lineHeight: "1",
  margin: "0",
  fontWeight: 400,
  fontVariantNumeric: "tabular-nums",
  display: "block",

  variants: {
    size: {
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
    size: "3",
    color: "primary",
  },
});
