import { styled } from "../../stitches.config";
import { Flex } from "../UI/Flex";
import { Paragraph } from "../UI/Paragraph";

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
      <Paragraph css={{ lineHeight: "1.75rem" }}>
        Designed and developed by Ryan Warner.
        <br /> Built with Gatsby. Hosted on Firebase. Type set in Jost*.
      </Paragraph>
      <Flex gap="5">
        <Square />
        <Square />
        <Square />
      </Flex>
    </Flex>
  );
};
