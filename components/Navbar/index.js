import NextLink from "next/link";
import { styled } from "../../stitches.config";
import { Button, Flex, Link } from "../UI";

const Logo = styled("h1", {
  fontSize: "1.125rem",
  fontWeight: "700",
  lineHeight: "1.5rem",
});

const Item = styled(Link, {
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
        <Item as="li" size="1" animation="underlining">
          <NextLink href="/">Home</NextLink>
        </Item>
        <Item as="li" size="1" animation="underlining">
          <NextLink href="/articles">Articles</NextLink>
        </Item>
        <Item as="li" size="1" animation="underlining">
          <NextLink href="/dashboard">Dashboard</NextLink>
        </Item>
        <Item as="li" size="1" animation="underlining">
          <NextLink href="/about">About</NextLink>
        </Item>
        <Button color="secondary">Contact</Button>
      </Flex>
    </Flex>
  );
};
