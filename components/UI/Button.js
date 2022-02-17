import { styled } from "../../stitches.config";

export const Button = styled("button", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "flex-start",
  padding: "0.5rem 1rem",
  border: "0px solid $white100",
  borderRadius: "6px",
  fontSize: "1rem",
  fontWeight: "700",
  lineHeight: "1.5rem",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",

  variants: {
    color: {
      primary: {
        color: "$blue100",
      },
      secondary: {
        color: "$text100",
        backgroundColor: "$white100",

        "&:hover": {
          boxShadow: "0 0 0 3px $blue100, 0 0 0 5px $text100",
        },

        "&:focus": {
          boxShadow: "0 0 0 3px $blue100, 0 0 0 5px $text100",
        },
      },
    },
  },
});
