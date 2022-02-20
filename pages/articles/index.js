import NextLink from "next/link";
import { Flex, Hover, Text } from "../../components/UI";
import { getArticleData, getArticles } from "../../lib/utils/articles";

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

export const Article = ({ id, title, description }) => {
  const excerpt = description.split(" ").slice(0, 20).join(" ") + "...";

  return (
    <NextLink href="/articles/[id]" as={`/articles/${id}`} passHref>
      <Hover as="a" direction="column" gap="4">
        <Flex direction="column" gap="2">
          <Text size="1" color="tertiary" css={{ fontSize: "0.9rem" }}>
            08 September 2021
          </Text>
          <Text size="3">{title}</Text>
        </Flex>
        <Text size="1" color="secondary" css={{ maxWidth: "65ch" }}>
          {excerpt}
        </Text>
      </Hover>
    </NextLink>
  );
};

export default function Home({ articles }) {
  const articlesList = articles.map((article) => {
    return <Article key={article.id} {...article} />;
  });

  return (
    <>
      <section>
        <Text size="4" color="glowing">
          Articles
        </Text>
      </section>

      <section>
        <Flex direction="column" gap="9" css={{ marginTop: "4rem" }}>
          {articlesList}
        </Flex>
      </section>
    </>
  );
}
