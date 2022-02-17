import { Flex, Text } from "../../components/UI";
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

export const Article = ({ title, description }) => {
  const excerpt = description.split(" ").slice(0, 20).join(" ") + "...";

  return (
    <Flex direction="column" gap="4">
      <Flex direction="column" gap="2">
        <Text size="1" color="tertiary" css={{ fontSize: "0.9rem" }}>
          08 September 2021
        </Text>
        <Text size="3">{title}</Text>
      </Flex>
      <Text size="1" color="secondary" css={{ maxWidth: "65ch" }}>
        {excerpt}
      </Text>
    </Flex>
  );
};

export default function Home({ articles }) {
  return (
    <>
      <section>
        <Text size="4" color="glowing" css={{ marginTop: "5rem" }}>
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
