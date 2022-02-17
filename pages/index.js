import { Button } from "../components/UI/Button";
import { Container } from "../components/UI/Container";
import { Header } from "../components/UI/Header";
import { Subheader } from "../components/UI/Subheader";
import { getArticleData, getArticles } from "../lib/utils/articles";
import { Title } from "../components/UI/Title";
import { Flex } from "../components/UI/Flex";
import { Paragraph } from "../components/UI/Paragraph";
import { Card } from "../components/UI/Card";
import { Article } from "../components/Article";
import { styled } from "../stitches.config";
import { Navbar } from "../components/Navbar";
import { Grid } from "../components/UI/Grid";
import { Footer } from "../components/Footer";

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

const dummyArticles = [
  {
    id: "1",
    title: "How to build a website with React",
    excerpt: "A brief introduction to React and its ecosystem.",
  },
  {
    id: "2",
    title: "Making money online it easy as well",
    excerpt: "Dont worry about how to make money online, we will show you how.",
  },
  {
    id: "3",
    title: "React components are not the only way to build a website",
    excerpt: "We will show you how to build a website with React components.",
  },
];

export default function Home({ articles }) {
  return (
    <Container>
      <Navbar />

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
          <Card>
            <Flex direction="column" gap="7">
              <Flex direction="column" gap="3">
                <Title css={{ fontWeight: 500 }}>Aurora</Title>
                <Paragraph>
                  100% Cookie-Free Open Website Analytics. Collect Anonymous
                  Data. Make your Audience Happy Now!
                </Paragraph>
              </Flex>
              <Button color="secondary">Learn More</Button>
            </Flex>
          </Card>

          <Card>
            <Flex direction="column" gap="7" align="baseline">
              <Flex direction="column" gap="3">
                <Title css={{ fontWeight: 500 }}>React Plock</Title>
                <Paragraph>
                  Plock is a responsive masonry layout implementation for React
                  that uses CSS Grid to layout your content.
                </Paragraph>
              </Flex>
              <Button color="secondary">Learn More</Button>
            </Flex>
          </Card>
        </Grid>
      </section>

      <Footer />
    </Container>
  );
}
