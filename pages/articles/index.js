import NextLink from "next/link";
import { Flex, Text } from "../../components/UI";
import { getArticleData, getArticles } from "../../lib/utils/articles";
import { styled } from "../../stitches.config";

export async function getStaticProps() {
  const articles = [];
  const files = getArticles();

  for (const file of files) {
    const { fm } = await getArticleData(file);

    if (fm.isDraft) continue;

    articles.push({
      ...fm,
      id: file.replace(/\.mdx$/, ""),
    });
  }

  return {
    props: {
      articles: articles,
    },
  };
}

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
  const excerpt = description.split(" ").slice(0, 20).join(" ") + "...";

  return (
    <NextLink href="/articles/[id]" as={`/articles/${id}`} passHref>
      <ArticleContainer as="a" direction="column" gap="4">
        <Flex direction="column" gap="2">
          <Text size="1" color="tertiary" css={{ fontSize: "0.9rem" }}>
            08 September 2021
          </Text>
          <Text size="3">{title}</Text>
        </Flex>
        <Text size="1" color="secondary" css={{ maxWidth: "65ch" }}>
          {excerpt}
        </Text>
      </ArticleContainer>
    </NextLink>
  );
};

export default function Home({ articles }) {
  return (
    <>
      <section>
        <Text size="4" color="glowing">
          Articles
        </Text>
      </section>

      <section>
        <Flex direction="column" gap="8" css={{ marginTop: "4rem" }}>
          {articles.map((article) => (
            <Article key={article.id} {...article} />
          ))}
        </Flex>
      </section>
    </>
  );
}
