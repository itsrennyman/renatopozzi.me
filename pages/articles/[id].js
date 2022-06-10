import Markdoc from "@markdoc/markdoc";
import fs from "fs";
import path from "path";
import React from "react";
import { Container } from "../../components/Container";
import { getArticleData } from "../../lib/utils/articles";

export function getStaticPaths() {
  const dir = path.join(process.cwd(), "/lib/articles");
  const files = fs.readdirSync(dir);

  // todo the isDraft
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
  const { fm, file } = await getArticleData(fileName);

  return {
    props: { fm, file },
  };
}

export default function Show({ fm, file }) {
  const seo = {
    title: fm.title,
    type: "article",
    description: fm.description,
    author: fm.author,
    publishDate: fm.createdAt,
  };

  const ast = Markdoc.parse(file);
  const article = Markdoc.transform(ast);

  const config = {
    variables: {
      frontmatter: fm,
    },
  };

  return (
    <Container seo={seo}>
      <div className="hero">
        <h1>{fm.title}</h1>
      </div>

      <article className="prose prose-invert lg:prose-xl">
        {Markdoc.renderers.react(article, React)}
      </article>
    </Container>
  );
}
