import { styled } from "../../stitches.config";

export const Header = styled("h1", {
  display: "flex",
  textShadow: "0px 0px 76px rgba(188, 251, 195, 0.3)",
  marginTop: "5rem", // TODO: add into theme
  color: "$glow100",
  fontSize: "$header",
  fontWeight: "$header",
  lineHeight: "$header",
});
