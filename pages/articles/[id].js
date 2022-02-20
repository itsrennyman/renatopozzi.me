import { MDXRemote } from "next-mdx-remote";
import { Code, H1, H2, Paragraph } from "../../components/MDX";
import { Container, Text } from "../../components/UI";
import { getArticleData, getArticles } from "../../lib/utils/articles";

export function getStaticPaths() {
  const files = getArticles();

  const paths = files.map((article) => {
    return {
      params: { id: article.replace(/\.mdx$/, "") },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;

  const fileName = `${id}.mdx`;
  const attributes = await getArticleData(fileName);

  return {
    props: { ...attributes },
  };
}

export default function Show({ content, fm }) {
  const seo = {
    title: fm.title,
    type: "article",
    description: fm.description,
    author: fm.author,
    publishDate: fm.createdAt,
  };

  const components = { code: Code, p: Paragraph, h1: H1, h2: H2 };

  return (
    <Container seo={seo}>
      <Text as="h1" color="glowing" size="4" css={{ marginBottom: "2rem" }}>
        {fm.title}
      </Text>

      <MDXRemote {...content} components={components} />
    </Container>
  );
}
