import { styled } from "../../stitches.config";

export const Navbar = styled("nav", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  color: "$text100",

  "& h1": {
    fontSize: "1.125rem",
    fontWeight: "700",
    lineHeight: "1.5rem",
  },

  "& ul": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    listStyle: "none",
    fontSize: "1rem",
    fontWeight: "500",
    lineHeight: "1.375rem",
  },

  "& li": {
    marginRight: "2rem",
  },
});
