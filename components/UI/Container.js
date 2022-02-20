import { styled } from "../../stitches.config";
import { SEOData } from "../SEOData";

const StyledContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "769px",
  margin: "0 auto",
  padding: "1.5rem 1.5rem",

  "@bp1": {
    padding: "0rem 1.5rem",
  },
});

export const Container = ({ children, seo = {} }) => {
  return (
    <StyledContainer>
      <SEOData {...seo} />
      {children}
    </StyledContainer>
  );
};
