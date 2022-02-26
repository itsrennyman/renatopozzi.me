import { keyframes, styled } from "../../stitches.config";

export const Card = styled("div", {
  borderRadius: "8px",
  padding: "2rem",
  backgroundColor: "$blue200",
});

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const AnimatedCard = styled(Card, {
  position: "relative",
  overflow: "hidden",

  "& *": {
    zIndex: "1",
  },

  "&::before": {
    transition: "opacity 0.3s ease-in-out",
    opacity: "0",
    content: "",
    position: "absolute",
    width: "15%",
    height: "240%",
    background: "linear-gradient($glow100, $glow200)",
    animation: `${rotate} 5s linear infinite`,
    top: "calc(0px - 70%)",
    left: "calc(50% - 2rem)",
  },

  "&::after": {
    transition: "opacity 0.2s ease-in-out",
    opacity: "1",
    content: "",
    position: "absolute",
    backgroundColor: "$blue200",
    inset: "3px",
    borderRadius: "8px",
  },

  "&:hover": {
    "&::before": {
      opacity: "1",
    },
  },
});
