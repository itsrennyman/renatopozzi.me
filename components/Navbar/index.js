import { styled } from "../../stitches.config";
import { Button } from "../UI/Button";
import { Flex } from "../UI/Flex";

const Logo = styled("h1", {
  fontSize: "1.125rem",
  fontWeight: "700",
  lineHeight: "1.5rem",
});

const Item = styled("li", {
  fontSize: "1rem",
  fontWeight: "500",
  lineHeight: "1.375rem",
});

export const Navbar = () => {
  return (
    <Flex
      as="nav"
      direction="row"
      align="center"
      justify="between"
      css={{ color: "$text100" }}
    >
      <Logo>Renato Pozzi</Logo>
      <Flex
        as="ul"
        direction="row"
        align="center"
        gap="5"
        css={{ listStyle: "none" }}
      >
        <Item>Articles</Item>
        <Item>Snippets</Item>
        <Item>About</Item>
        <Button color="secondary">Contact</Button>
      </Flex>
    </Flex>
  );
};
