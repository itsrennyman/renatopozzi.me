import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import NextLink from "next/link";
import * as React from "react";
import { styled } from "../../stitches.config";
import { Button, Flex, Link, Text } from "../UI";

const NavbarContainer = styled("nav", {
  maxWidth: "1100px",
  margin: "0 auto",

  "@bp1": {
    padding: "1.75rem 1rem",
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
        <Text size="2xl" weight="semibold">
          Renato Pozzi
        </Text>
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
                <Text>Home</Text>
              </Link>
            </NextLink>
          </li>
          <li>
            <NextLink href="/about" passHref>
              <Link animation="underlining">
                <Text>About Me</Text>
              </Link>
            </NextLink>
          </li>
          <li>
            <NextLink href="/articles" passHref>
              <Link animation="underlining">
                <Text>Articles</Text>
              </Link>
            </NextLink>
          </li>
          <li>
            <NextLink href="/dashboard" passHref>
              <Link animation="underlining">
                <Text>Dashboard</Text>
              </Link>
            </NextLink>
          </li>
        </Flex>
      </DesktopNavbar>

      <MobileNavbar direction="column" css={{ color: "$text100" }} gap="5">
        <Flex justify="between" align="center">
          <Text size="2xl" weight="semibold">
            Renato Pozzi
          </Text>
          <Button
            color="secondary"
            aria-label="Toggle Menu"
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
                  <Text>Home</Text>
                </Link>
              </NextLink>
            </li>
            <li>
              <NextLink href="/about" passHref>
                <Link animation="underlining">
                  <Text>About Me</Text>
                </Link>
              </NextLink>
            </li>
            <li>
              <NextLink href="/articles" passHref>
                <Link animation="underlining">
                  <Text>Articles</Text>
                </Link>
              </NextLink>
            </li>
            <li>
              <NextLink href="/dashboard" passHref>
                <Link animation="underlining">
                  <Text>Dashboard</Text>
                </Link>
              </NextLink>
            </li>
          </Flex>
        )}
      </MobileNavbar>
    </NavbarContainer>
  );
};
