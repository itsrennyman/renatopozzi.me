import { styled } from "../../stitches.config";
import { Subheader } from "../UI/Subheader";
import { Paragraph } from "../UI/Paragraph";
import { Flex } from "../UI/Flex";

const ArticleIcon = styled("img", {
  height: "22px",
  width: "22px",
});

const Title = styled(Subheader, {});

const Excerpt = styled(Paragraph, {
  color: "$blue500",
});

export const Article = ({ title, description }) => {
  const excerpt = description.split(" ").slice(0, 10).join(" ") + "...";

  return (
    <Flex as="a" href="#" direction="row" css={{ marginTop: "2rem" }}>
      <ArticleIcon
        src={"/assets/icons/javascript.svg"}
        css={{ marginTop: "4px", marginRight: "0.4rem" }}
      />
      <Flex direction="column" align="stretch">
        <Title>{title}</Title>
        <Excerpt>{excerpt}</Excerpt>
      </Flex>
    </Flex>
  );
};