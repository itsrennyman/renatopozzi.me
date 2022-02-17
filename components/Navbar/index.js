import NextLink from "next/link";
import { styled } from "../../stitches.config";
import { Button, Flex, Link, Text } from "../UI";

const Logo = styled("h1", {
  fontSize: "1.125rem",
  fontWeight: "700",
  lineHeight: "1.5rem",
});

const Item = styled(Text, {
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
        <li>
          <NextLink href="/" passHref>
            <Link animation="underlining">
              <Item size="1">Home</Item>
            </Link>
          </NextLink>
        </li>
        <li>
          <NextLink href="/articles" passHref>
            <Link animation="underlining">
              <Item size="1">Articles</Item>
            </Link>
          </NextLink>
        </li>
        <li>
          <NextLink href="/dashboard" passHref>
            <Link animation="underlining">
              <Item size="1">Dashboard</Item>
            </Link>
          </NextLink>
        </li>
        <li>
          <NextLink href="/about" passHref>
            <Link animation="underlining">
              <Item size="1">About</Item>
            </Link>
          </NextLink>
        </li>
        <li>
          <Button color="secondary">Contact</Button>
        </li>
      </Flex>
    </Flex>
  );
};
