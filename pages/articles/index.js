import { ArticleList } from "../../components/Article";
import { Container } from "../../components/Container";
import { getArticleList } from "../../lib/utils/articles";

export async function getStaticProps() {
  const articles = await getArticleList();

  return {
    props: {
      articles: articles,
    },
  };
}

export default function Home({ articles }) {
  const seo = {
    title: "Renato Pozzi | Articles",
    description:
      "I wrote articles to share learning experiences with you, please have a look at them if you are interested in learning something new.",
  };

  return (
    <Container seo={seo}>
      <div className="hero">
        <h1>Articles</h1>
      </div>
      <ArticleList data={articles} />
    </Container>
  );
}
