import NextLink from "next/link";
import { Article } from "../components/Article";
import { Project } from "../components/Project";
import { Container, Flex, Grid, Link, Text } from "../components/UI";
import projects from "../lib/data/projects";
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

export default function Home({ articles }) {
  const articlesList = articles.map((article) => {
    return <Article key={article.id} {...article} />;
  });

  const projectsList = projects.map((project, index) => {
    return <Project key={index} {...project} />;
  });

  return (
    <Container>
      <Flex as="section" direction="column" gap="6">
        <Text
          as="h1"
          color="glowing"
          size="5xl"
          weight="semibold"
          css={{ lineHeight: "$snug" }}
        >
          I&apos;m Renato, a Frontend Engineer and Javascript Enthusiast 🖖
        </Text>
        <Text size="lg" weight="medium" css={{ lineHeight: "2rem" }}>
          Bringing kindness & knowledge to other people. I’m a software
          developer currently based in Milan, Italy 🇮🇹 I used to work as a
          Full-Stack Engineer, now I&apos;m discovering my love for Front-End
          Engineering.
        </Text>
      </Flex>

      <Flex direction="column" gap="5" css={{ marginTop: "5rem" }}>
        <Flex align="center" justify="between">
          <Text size="2xl" weight="semibold">
            Latest Articles
          </Text>
          <NextLink href="/articles" passHref>
            <Link animation="underlining">
              <Text color="secondary">View all</Text>
            </Link>
          </NextLink>
        </Flex>
        <Flex direction="column" gap="7">
          {articlesList}
        </Flex>
      </Flex>

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
