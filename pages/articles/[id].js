import { MDXRemote } from "next-mdx-remote";
import { Article } from "../../components/Layout/Article";
import { Code } from "../../components/MDX/Code";
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
  return (
    <Article fm={fm}>
      <MDXRemote {...content} components={{ code: Code }} />
    </Article>
  );
}
