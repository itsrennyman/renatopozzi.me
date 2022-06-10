import Link from "next/link";
import { Article } from "./Article";

const ArticleList = ({ data = [] }) => {
  const articles = data.map((article) => {
    return <Article key={article.id} {...article} />;
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-2xl font-bold text-zinc-100">Latest Articles</h3>
        <Link href="/articles" passHref>
          <a className="text-base text-zinc-100">View All</a>
        </Link>
      </div>
      <div className="flex flex-col">{articles}</div>
    </div>
  );
};

export { ArticleList };
