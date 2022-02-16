import { Button } from "../components/UI/Button";
import { Container } from "../components/UI/Container";
import { Header } from "../components/UI/Header";
import { Subheader } from "../components/UI/Subheader";
import { Navbar } from "../components/UI/Navbar";
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
    <Container>
      <Navbar>
        <h1>Renato Pozzi</h1>
        <ul>
          <li>Articles</li>
          <li>Snippets</li>
          <li>About</li>
          <Button color="secondary">Contact</Button>
        </ul>
      </Navbar>

      <section>
        <Header>I'm Ryan, a Software Engineer and interface designer.</Header>
        <Subheader>
          I specialize in rapidly prototyping software companies and web
          applications. I talk about my journey on Twitter, commit code to
          Github, and take shots on Dribbble.
        </Subheader>
      </section>
    </Container>
  );
}
