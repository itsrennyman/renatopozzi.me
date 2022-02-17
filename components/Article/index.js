import NextLink from "next/link";
import { styled } from "../../stitches.config";
import { Flex, Text } from "../UI";

const ArticleIcon = styled("img", {
  height: "22px",
  width: "22px",
});

const ArticleContainer = styled(Flex, {
  position: "relative",

  "&::before": {
    content: "",
    borderRadius: "8px",
    display: "block",
    position: "absolute",
    zIndex: "0",
    inset: "calc(15px*-1)",
    padding: "15px",
    opacity: "0",
    transform: "scale(0.9)",
  },

  "&:focus": {
    "&::before": {
      outline: "none",
      opacity: "1",
      boxShadow: "inset 0 0 0 2px $blue200",
      transition: "all 0.2s",
      transform: "scale(1)",
    },
  },

  "&:hover": {
    "&::before": {
      opacity: "1",
      background: "$white030",
      transition: "all 0.2s",
      transform: "scale(1)",
    },
  },
});

export const Article = ({ id, title, description }) => {
  const excerpt = description.split(" ").slice(0, 10).join(" ") + "...";

  return (
    <NextLink href="/articles/[id]" as={`/articles/${id}`} passHref>
      <ArticleContainer
        as="a"
        direction="row"
        css={{ marginTop: "2rem", cursor: "pointer" }}
      >
        <ArticleIcon
          src={"/assets/icons/javascript.svg"}
          css={{ marginTop: "4px", marginRight: "0.4rem" }}
        />
        <Flex direction="column" align="stretch">
          <Text size="2">{title}</Text>
          <Text size="1" color="tertiary">
            {excerpt}
          </Text>
        </Flex>
      </ArticleContainer>
    </NextLink>
  );
};
