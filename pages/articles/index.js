import NextLink from "next/link";
import { Container } from "../../components/Container";
import { Flex, Hover, Text } from "../../components/UI";
import { getArticleData, getArticles } from "../../lib/utils/articles";
import styles from "../../styles/styles.module.css";

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

export const Article = ({ id, title, description, createdAt }) => {
  const excerpt = description.split(" ").slice(0, 20).join(" ") + "...";

  const localDate = new Date(createdAt).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <NextLink href="/articles/[id]" as={`/articles/${id}`} passHref>
      <Hover as="a" direction="column" gap="4">
        <Flex direction="column" gap="2">
          <Text size="sm" color="tertiary">
            {localDate}
          </Text>
          <Text size="2xl" weight="semibold">
            {title}
          </Text>
        </Flex>
        <Text size="base" color="secondary" css={{ maxWidth: "65ch" }}>
          {excerpt}
        </Text>
      </Hover>
    </NextLink>
  );
};

export default function Home({ articles }) {
  const seo = {
    title: "Renato Pozzi | Articles",
    description:
      "I wrote articles to share learning experiences with you, please have a look at them if you are interested in learning something new.",
  };

  const articlesList = articles.map((article) => {
    return <Article key={article.id} {...article} />;
  });

  return (
    <Container seo={seo}>
      <div className={styles.hero}>
        <h1>Articles</h1>
      </div>

      <section>
        <Flex direction="column" gap="9" css={{ marginTop: "4rem" }}>
          {articlesList}
        </Flex>
      </section>
    </Container>
  );
}
