import NextLink from "next/link";
import * as React from "react";
import { Article } from "../components/Article";
import { Container } from "../components/Container";
import { Project } from "../components/Project";
import { getArticleData, getArticles } from "../lib/utils/articles";
import styles from "../styles/index.module.css";

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

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>I&apos;m Renato, a Frontend Engineer and Javascript Enthusiast 🖖</h1>
      <h2>
        Bringing kindness & knowledge to other people. I’m a Software Engineer
        currently based in Milan, Italy 🇮🇹 I used to work as a Full-Stack
        Engineer, now I&apos;m discovering my love for Front-End Engineering.
      </h2>
    </div>
  );
};

const ArticleList = ({ data }) => {
  const articles = data.map((article) => {
    return <Article key={article.id} {...article} />;
  });

  return (
    <div className={styles.articles}>
      <div className={styles.articlesHeader}>
        <h3>Latest Articles</h3>
        <NextLink href="/articles">View All</NextLink>
      </div>
      <div className={styles.articlesList}>{articles}</div>
    </div>
  );
};

const ProjectList = ({ data }) => {
  const projects = data.map((project, index) => {
    return <Project key={index} {...project} />;
  });

  return (
    <div className={styles.projects}>
      <h3 className={styles.projects__header}>Projects</h3>
      <div className={styles.projects__list}>{projects}</div>
    </div>
  );
};

export default function Home({ articles }) {
  const projects = React.useMemo(() => {
    return [
      {
        title: "Aurora",
        description:
          "100% Cookie-Free Open Website Analytics. Collect Anonymous Data. Make your Audience Happy Now!",
        href: "https://github.com/itsrennyman/aurora",
        alt: "Go To Aurora - Open Website Analytics",
      },
      {
        title: "React Plock",
        description:
          "Plock is a responsive masonry layout implementation for React that uses CSS Grid to layout your content.",
        href: "https://react-plock.netlify.com/",
        alt: "Go To React Plock - Responsive Masonry Layout",
      },
    ];
  }, []);

  return (
    <Container>
      <Hero />
      <ArticleList data={articles} />
      <ProjectList data={projects} />
    </Container>
  );
}
