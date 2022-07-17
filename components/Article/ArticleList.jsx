import { Article } from "./Article";

const ArticleList = ({ data = [] }) => {
  const articles = data.map((article) => {
    return <Article key={article.id} {...article} />;
  });

  return (
    <section>
      <h3 className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 bg-clip-text text-transparent text-4xl font-black tracking-tight">
        Latest Articles
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-lg mt-2 leading-snug tracking-tight">
        I write articles mostly on front-end development. Spoiler alert: some of
        them are quite useful!
      </p>
      <ul className="mt-5">{articles}</ul>
    </section>
  );
};

export { ArticleList };
