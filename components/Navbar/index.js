import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import NextLink from "next/link";
import * as React from "react";
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

const NavbarContainer = styled("nav", {
  maxWidth: "769px",
  margin: "0 auto",

  "@bp1": {
    padding: "3.75rem 1.5rem",
  },
});

const DesktopNavbar = styled(Flex, {
  display: "none",

  "@bp1": {
    display: "flex",
  },
});

const MobileNavbar = styled(Flex, {
  display: "flex",
  paddingBottom: "1.5rem",
  borderBottom: "1px solid $white100",
  padding: "1.5rem",

  "@bp1": {
    display: "none",
  },
});

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <NavbarContainer>
      <DesktopNavbar
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
            <Button color="secondary">Contact</Button>
          </li>
        </Flex>
      </DesktopNavbar>

      <MobileNavbar direction="column" css={{ color: "$text100" }} gap="5">
        <Flex justify="between" align="center">
          <Logo>Renato Pozzi</Logo>
          <Button
            color="secondary"
            css={{ padding: "0.75rem" }}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <HamburgerMenuIcon />
          </Button>
        </Flex>

        {isOpen && (
          <Flex as="ul" direction="column" gap="4" css={{ listStyle: "none" }}>
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
          </Flex>
        )}
      </MobileNavbar>
    </NavbarContainer>
  );
};
