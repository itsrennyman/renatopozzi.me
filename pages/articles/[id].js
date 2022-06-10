import { MDXRemote } from "next-mdx-remote";
import { Container } from "../../components/Container";
import { Code } from "../../components/MDX";
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

  return (
    <Container seo={seo}>
      <div className="hero">
        <h1>{fm.title}</h1>
      </div>

      <article className="prose prose-invert lg:prose-xl">
        <MDXRemote {...content} components={{ code: Code }} />
      </article>
    </Container>
  );
}
