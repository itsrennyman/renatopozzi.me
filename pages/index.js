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

const Square = styled("div", {
  width: "20px",
  height: "20px",
  backgroundColor: "$blue200",
});

export default function Home({ articles }) {
  return (
    <Container>
      <Navbar />

      <section>
        <Header css={{ marginTop: "5rem" }}>
          I&apos;m Renato, a Frontend Engineer and Javascript Enthusiast.
        </Header>
        <Subheader css={{ marginTop: "2.5rem" }}>
          I specialize in rapidly prototyping software companies and web
          applications. I talk about my journey on Twitter, commit code to
          Github, and take shots on Dribbble.
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
          {dummyArticles.map((article) => (
            <Article key={article.id} {...article} />
          ))}
        </Flex>
      </section>

      <section>
        <Title css={{ marginTop: "5rem" }}>Projects</Title>

        <Card css={{ marginTop: "2rem" }}>
          <Flex direction="column">
            <Title css={{ fontWeight: 500 }}>Yawnch</Title>
            <Paragraph css={{ marginTop: "1rem" }}>
              An online coworking community for indie hackers, entreprenuers,
              and founders. Chat live with app developers, designers, and
              mentors. Access video courses and tutorials.
            </Paragraph>
            <Button color="secondary" css={{ marginTop: "3rem" }}>
              Learn More
            </Button>
          </Flex>
        </Card>
      </section>

      <Flex
        as="footer"
        css={{ marginTop: "5rem" }}
        align="center"
        justify="between"
      >
        <Paragraph css={{ lineHeight: "1.75rem" }}>
          Designed and developed by Ryan Warner.
          <br /> Built with Gatsby. Hosted on Firebase. Type set in Jost*.
        </Paragraph>
        <Flex gap="5">
          <Square />
          <Square />
          <Square />
        </Flex>
      </Flex>
    </Container>
  );
}
