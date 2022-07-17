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
      <div className="flex flex-col gap-4 mt-12 mb-12 md:mt-24">
        <h1 className="text-5xl sm:text-6xl font-black text-zinc-100 tracking-tight">
          {fm.title}
        </h1>
        <h2 className="text-xl sm:text-2xl font-medium text-zinc-400 max-w-3xl leading-snug tracking-tight">
          Published on{" "}
          <time dateTime={publishedAtShort}>{publishedAtLong}</time>
        </h2>
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
