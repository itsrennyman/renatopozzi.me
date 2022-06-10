import { ArticleList } from "../../components/Article";
import { Container } from "../../components/Container";
import { getArticleData, getArticles } from "../../lib/utils/articles";

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
  }

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
