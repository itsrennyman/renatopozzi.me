import { styled } from "../../stitches.config";
import { Flex, Text } from "../UI";

const Square = styled("div", {
  width: "20px",
  height: "20px",
  backgroundColor: "$blue200",
});

const FooterContainer = styled(Flex, {
  maxWidth: "769px",
  margin: "0 auto",
  padding: "1.5rem 1.5rem",

  "@bp1": {
    padding: "3.75rem 0",
  },
});

export const Footer = () => {
  return (
    <FooterContainer
      as="footer"
      //css={{ marginTop: "5rem" }}
      align="center"
      justify="between"
    >
      <Text size="1" color="secondary" css={{ lineHeight: "1.75rem" }}>
        Copyright © {new Date().getFullYear()} Renato Pozzi
        <br /> Inspired By Ryan Warner Design. Built with Next.js. Hosted on
        Vercel.
      </Text>
      <Flex gap="5">
        <Square />
        <Square />
        <Square />
      </Flex>
    </FooterContainer>
  );
};
