import { styled } from "../../stitches.config";
import { Button } from "../UI/Button";
import { Flex } from "../UI/Flex";
import NextLink from "next/link";

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
        <Item>
          <NextLink href="/">Home</NextLink>
        </Item>
        <Item>
          <NextLink href="/articles">Articles</NextLink>
        </Item>
        <Item>
          <NextLink href="/dashboard">Dashboard</NextLink>
        </Item>
        <Item>
          <NextLink href="/about">About</NextLink>
        </Item>
        <Button color="secondary">Contact</Button>
      </Flex>
    </Flex>
  );
};
