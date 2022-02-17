import { Article } from "../components/Article";
import { Project } from "../components/Project";
import {
  Flex,
  Grid,
  Header,
  Paragraph,
  Subheader,
  Title,
} from "../components/UI";
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
        <Header css={{ marginTop: "5rem" }}>
          I&apos;m Renato, a Frontend Engineer and Javascript Enthusiast.
        </Header>
        <Subheader css={{ marginTop: "2.5rem" }}>
          Bringing kindness & knowledge to other people. I’m a software
          developer currently based in Milan, Italy 🇮🇹 I used to work as a
          Full-Stack Engineer, now I&apos;m discovering my love for Front-End
          Engineering.
        </Subheader>
      </section>

      <section>
        <Flex
          direction="row"
          align="center"
          justify="between"
          css={{ marginTop: "5rem" }}
        >
          <Title>Latest Articles</Title>
          <Paragraph>All Articles</Paragraph>
        </Flex>

        <Flex direction="column">
          {articles.map((article) => (
            <Article key={article.id} {...article} />
          ))}
        </Flex>
      </section>

      <section>
        <Title css={{ marginTop: "5rem" }}>Projects</Title>
        <Grid
          columns={{ "@initial": "1", "@bp1": "2" }}
          gap={5}
          css={{ marginTop: "2rem" }}
        >
          <Project
            title="Aurora"
            description="100% Cookie-Free Open Website Analytics. Collect Anonymous
            Data. Make your Audience Happy Now!"
            href="https://useaurora.app"
          />
          <Project
            title="React Plock"
            description="Plock is a responsive masonry layout implementation for React
                  that uses CSS Grid to layout your content."
            href="https://react-plock.netlify.com/"
          />
        </Grid>
      </section>
    </>
  );
}
