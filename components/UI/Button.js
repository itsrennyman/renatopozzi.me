import { m } from "framer-motion";
import { styled } from "../../stitches.config";

export const Button = styled("button", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "flex-start",
  padding: "0.25rem 0.75rem",
  border: "2px solid rgba(124, 201, 255, 0.41)",
  borderRadius: "6px",
  fontSize: "1rem",
  fontWeight: "500",
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
        backgroundColor: "transparent",

        "&:hover": {
          backgroundColor: "$blue300",
          color: "$glow100",
        },
      },
    },
  },
});
