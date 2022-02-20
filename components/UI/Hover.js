import { Flex } from ".";
import { styled } from "../../stitches.config";

export const Hover = styled(Flex, {
  display: "flex",
  position: "relative",

  "&::before": {
    content: "",
    borderRadius: "8px",
    display: "block",
    position: "absolute",
    zIndex: "0",
    inset: "calc(15px * -1)",
    padding: "15px",
    opacity: "0",
    transform: "scale(0.9)",
  },

  "&:focus": {
    "&::before": {
      outline: "none",
      opacity: "1",
      boxShadow: "inset 0 0 0 2px $blue200",
      transition: "all 0.2s",
      transform: "scale(1)",
    },
  },

  "&:hover": {
    "&::before": {
      opacity: "1",
      background: "$white030",
      transition: "all 0.2s",
      transform: "scale(1)",
    },
  },
});
