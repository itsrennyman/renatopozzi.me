import Markdoc from "@markdoc/markdoc";
import React from "react";
import { Container } from "../../components/Container";
import { NewsletterForm } from "../../components/NewsletterForm";
import { Sandbox } from "../../components/Sandbox";
import { getArticleData, getArticleList } from "../../lib/utils/articles";
import { sandbox } from "../../markdoc/tags";

export async function getStaticPaths() {
  const files = await getArticleList();

  const paths = files
    .filter((article) => !article.isDraft)
    .map((article) => ({ params: { id: article.id } }));

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

  const config = {
    tags: {
      sandbox,
    },
  };

  const components = {
    Sandbox: Sandbox,
  };

  const ast = Markdoc.parse(file);
  const article = Markdoc.transform(ast, config);

  const publishedAtShort = new Date(fm.createdAt).toLocaleDateString("en-US");
  const publishedAtLong = new Date(fm.createdAt).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Container seo={seo}>
      <div className="hero">
        <h1 className="text-5xl text-center font-black leading-snug bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
          {fm.title}
        </h1>
        <div className="text-xl text-center font-bold text-zinc-400 max-w-3xl">
          Published on{" "}
          <time dateTime={publishedAtShort}>{publishedAtLong}</time>
        </div>
      </div>

      <article className="prose prose-invert lg:prose-xl">
        {Markdoc.renderers.react(article, React, { components })}
      </article>

      <div className="mt-10">
        <NewsletterForm />
      </div>
    </Container>
  );
}
