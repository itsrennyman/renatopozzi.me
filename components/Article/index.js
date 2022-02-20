import NextLink from "next/link";
import { styled } from "../../stitches.config";
import { Flex, Hover, Text } from "../UI";

const ArticleIcon = styled("img", {
  height: "22px",
  width: "22px",
});

export const Article = ({ id, title, description }) => {
  const excerpt = description.split(" ").slice(0, 10).join(" ") + "...";

  return (
    <NextLink href="/articles/[id]" as={`/articles/${id}`} passHref>
      <Hover as="a" css={{ marginTop: "2rem", cursor: "pointer" }}>
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
      </Hover>
    </NextLink>
  );
};
