import { styled } from "../../stitches.config";
import { Flex, Text } from "../UI";

const Square = styled("div", {
  width: "20px",
  height: "20px",
  backgroundColor: "$blue200",
});

export const Footer = () => {
  return (
    <Flex
      as="footer"
      css={{ marginTop: "5rem" }}
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
    </Flex>
  );
};
