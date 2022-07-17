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
      "I write articles mostly on front-end development. Spoiler alert: some of them are quite useful!",
  };

  return (
    <Container seo={seo}>
      <div className="flex flex-col gap-4 mt-12 mb-24 md:my-24">
        <h1 className="text-6xl text-center font-black text-zinc-100 tracking-tight">
          Articles
        </h1>
        <h2 className="text-xl sm:text-2xl text-center font-medium text-zinc-400 max-w-3xl leading-snug tracking-tight">
          I write articles mostly on front-end development. Spoiler alert: some
          of them are quite useful!
        </h2>
      </div>

      <ArticleList data={articles} />
    </Container>
  );
}
