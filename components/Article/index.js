import NextLink from "next/link";
import { styled } from "../../stitches.config";
import { Flex } from "../UI/Flex";
import { Paragraph } from "../UI/Paragraph";
import { Subheader } from "../UI/Subheader";

const ArticleIcon = styled("img", {
  height: "22px",
  width: "22px",
});

const Title = styled(Subheader, {});

const Excerpt = styled(Paragraph, {
  color: "$blue500",
});

export const Article = ({ id, title, description }) => {
  const excerpt = description.split(" ").slice(0, 10).join(" ") + "...";

  return (
    <NextLink href="/articles/[id]" as={`/articles/${id}`}>
      <Flex
        as="a"
        direction="row"
        css={{ marginTop: "2rem", cursor: "pointer" }}
      >
        <ArticleIcon
          src={"/assets/icons/javascript.svg"}
          css={{ marginTop: "4px", marginRight: "0.4rem" }}
        />
        <Flex direction="column" align="stretch">
          <Title>{title}</Title>
          <Excerpt>{excerpt}</Excerpt>
        </Flex>
      </Flex>
    </NextLink>
  );
};
