import { styled } from "../../stitches.config";
import { Flex, Link, Text } from "../UI";

const FooterIcon = styled("img", {
  width: "20px",
  height: "20px",
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
      direction={{ "@initial": "column", "@bp1": "row" }}
      align={{ "@initial": "start", "@bp1": "center" }}
      gap="5"
      as="footer"
      justify="between"
    >
      <Text size="1" color="secondary" css={{ lineHeight: "1.75rem" }}>
        Copyright © {new Date().getFullYear()} Renato Pozzi
        <br /> Inspired By Ryan Warner Design. Built with Next.js. Hosted on
        Vercel.
      </Text>
      <Flex gap="5">
        <Link
          href="https://twitter.com/imarenny"
          target="_blank"
          rel="noopener noreferrer"
          alt="Go To Twitter Profile"
        >
          <FooterIcon alt="Twitter Icon" src={"/assets/icons/twitter.svg"} />
        </Link>
        <Link
          href="https://github.com/itsrennyman"
          target="_blank"
          rel="noopener noreferrer"
          alt="Go To Github Profile"
        >
          <FooterIcon alt="Github Icon" src={"/assets/icons/github.svg"} />
        </Link>
      </Flex>
    </FooterContainer>
  );
};
