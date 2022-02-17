import { styled } from "../../stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "769px",
  margin: "0 auto",
  padding: "1.5rem 1.5rem",

  "@bp1": {
    padding: "0rem 1.5rem",
  },
});
