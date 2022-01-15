import { Main } from "../../components/Layout/Main";
import { Article } from "../../components/UI/Article";
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

export default function Index({ articles }) {
  const seo = {
    title: "Renato Pozzi | Articles",
    description:
      "I have written full of value articles, please take a look if you are interested in learning something new.",
  };

  return (
    <Main seo={seo}>
      <section className="flex flex-col w-full py-24">
        <div className="mb-24 space-y-8">
          <h1 className="font-semibold tracking-tight text-4xl md:text-7xl space-y-3 text-black dark:text-white transition duration-200">
            Articles
          </h1>
          <h2 className="text-gray-500 dark:text-gray-400 tracking-tight max-w-xl leading-snug md:leading-tight text-3xl md:text-4xl">
            I wrote articles full of values, please have a look at them if you
            are interested in learning something new.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article) => (
            <Article key={article.id} {...article} />
          ))}
        </div>
      </section>
    </Main>
  );
}
