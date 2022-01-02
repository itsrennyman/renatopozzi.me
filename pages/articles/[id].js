import { MDXRemote } from "next-mdx-remote";
import { Article } from "../../components/Layout/Article";
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
      {({ components }) => <MDXRemote {...content} components={components} />}
    </Article>
  );
}
