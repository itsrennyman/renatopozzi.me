import { Article } from "../components/Article";
import { Container } from "../components/Container";
import { Project } from "../components/Project";
import { Flex, Grid, Text } from "../components/UI";
import projects from "../lib/data/projects";
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

export default function Home({ articles }) {
  const articlesList = articles.map((article) => {
    return <Article key={article.id} {...article} />;
  });

  const projectsList = projects.map((project, index) => {
    return <Project key={index} {...project} />;
  });

  return (
    <Container>
      <div className={styles.hero}>
        <h1>
          I&apos;m Renato, a Frontend Engineer and Javascript Enthusiast 🖖
        </h1>
        <h2>
          Bringing kindness & knowledge to other people. I’m a software
          developer currently based in Milan, Italy 🇮🇹 I used to work as a
          Full-Stack Engineer, now I&apos;m discovering my love for Front-End
          Engineering.
        </h2>
      </div>

      <div className={styles.articles}>
        <div className={styles.articlesHeader}>
          <h3>Latest Articles</h3>
          <a>View All</a>
        </div>
        <div className={styles.articlesList}>{articlesList}</div>
      </div>

      <Flex direction="column" gap="5" css={{ marginTop: "5rem" }}>
        <Text size="2xl" weight="semibold">
          Projects
        </Text>
        <Grid columns={{ "@initial": "1", "@bp1": "2" }} gap={5}>
          {projectsList}
        </Grid>
      </Flex>
    </Container>
  );
}
