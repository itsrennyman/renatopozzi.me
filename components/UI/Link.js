import { styled } from "../../stitches.config";

export const Link = styled("a", {
  display: "inline-block",
  position: "relative",
  cursor: "pointer",

  variants: {
    animation: {
      none: {},
      underlining: {
        "&::after": {
          content: "",
          position: "absolute",
          width: "100%",
          transform: "scaleX(0)",
          height: "1px",
          top: "100%",
          left: "0",
          backgroundColor: "white",
          transformOrigin: "bottom right",
          transition: "transform .4s cubic-bezier(.86,0,.07,1)",
        },

        "&:hover": {
          "&::after": {
            transform: "scaleX(1)",
            transformOrigin: "bottom left",
          },
        },

        "&:focus": {
          "&::after": {
            transform: "scaleX(1)",
            transformOrigin: "bottom left",
          },
        },
      },
    },
  },

  defaultVariants: {
    animation: "none",
  },
});
