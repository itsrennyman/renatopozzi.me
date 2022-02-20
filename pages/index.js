import NextLink from "next/link";
import { Article } from "../components/Article";
import { Project } from "../components/Project";
import { Flex, Grid, Link, Text } from "../components/UI";
import dataProjects from "../lib/data/projects";
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
  return (
    <>
      <section>
        <Text as="h1" color="glowing" size="4">
          I&apos;m Renato, a Frontend Engineer and Javascript Enthusiast.
        </Text>
        <Text size="2" css={{ marginTop: "2.5rem" }}>
          Bringing kindness & knowledge to other people. I’m a software
          developer currently based in Milan, Italy 🇮🇹 I used to work as a
          Full-Stack Engineer, now I&apos;m discovering my love for Front-End
          Engineering.
        </Text>
      </section>

      <section>
        <Flex
          direction="row"
          align="center"
          justify="between"
          css={{ marginTop: "5rem" }}
        >
          <Text size="3">Latest Articles</Text>

          <NextLink href="/articles" passHref>
            <Link animation="underlining">
              <Text size="1" color="secondary">
                View all
              </Text>
            </Link>
          </NextLink>
        </Flex>

        <Flex direction="column">
          {articles.map((article) => (
            <Article key={article.id} {...article} />
          ))}
        </Flex>
      </section>

      <section>
        <Text size="3" css={{ marginTop: "5rem" }}>
          Projects
        </Text>
        <Grid
          columns={{ "@initial": "1", "@bp1": "2" }}
          gap={5}
          css={{ marginTop: "2rem" }}
        >
          {dataProjects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </Grid>
      </section>
    </>
  );
}
