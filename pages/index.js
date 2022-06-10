import * as React from "react";
import { ArticleList } from "../components/Article";
import { Container } from "../components/Container";
import { ProjectList } from "../components/Project";
import { projects } from "../lib/data/projects";
import { getArticleData, getArticles } from "../lib/utils/articles";

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

    if (articles.length === 6) break;
  }

  return {
    props: {
      articles: articles,
    },
  };
}

const styles = {
  textShadow: "0 0 76px rgb(250 217 65 / 30%)",
};

const Hero = () => {
  return (
    <div className="flex flex-col gap-7 max-w-2xl mt-12 mb-24 md:my-24">
      <h1
        style={styles}
        className="text-5xl font-black leading-snug bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400"
      >
        I&apos;m Renato, a Frontend Engineer and Javascript Enthusiast
      </h1>
      <h2 className="text-lg font-medium leading-8 text-zinc-100">
        Bringing kindness & knowledge to other people. I’m a Software Engineer
        currently based in Milan, Italy 🇮🇹 I used to work as a Full-Stack
        Engineer, now I&apos;m discovering my love for Front-End Engineering.
      </h2>
    </div>
  );
};

export default function Home({ articles }) {
  return (
    <Container>
      <Hero />
      <section className="flex flex-col gap-20">
        <ArticleList data={articles} />
        <ProjectList data={projects} />
      </section>
    </Container>
  );
}
