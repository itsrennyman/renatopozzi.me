import { Flex, Header, Paragraph, Subheader } from "../../components/UI";
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

const ArticleIcon = styled("img", {
  height: "22px",
  width: "22px",
});

const Title = styled(Subheader, {
  fontSize: "1.625rem",
});

const Excerpt = styled(Paragraph, {
  color: "$blue500",
  maxWidth: "65ch",
});

export const Article = ({ title, description }) => {
  const excerpt = description.split(" ").slice(0, 20).join(" ") + "...";

  return (
    <Flex direction="column" gap="4">
      <Paragraph css={{ color: "$blue500", fontSize: "0.9rem" }}>
        08 September 2021
      </Paragraph>
      <Title>{title}</Title>
      <Excerpt>{excerpt}</Excerpt>
    </Flex>
  );
};

export default function Home({ articles }) {
  return (
    <>
      <section>
        <Header css={{ marginTop: "5rem" }}>Articles</Header>
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
