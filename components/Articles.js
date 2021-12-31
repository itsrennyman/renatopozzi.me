import { Link } from "./Link";
import { Image } from "./Image";

export function Articles({ children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {children}
    </div>
  );
}

function Article(props) {
  return (
    <Link href={`/articles/${props.id}`}>
      <Image alt={props.title} src={props.thumbnail} height={500} width={378} />

      <div className="mt-4 text-lg font-semibold tracking-tight leading-tight md:text-xl text-gray-500 dark:text-gray-400 transition duration-200">
        {props.createdAt}
      </div>

      <div className="mt-2 text-2xl font-semibold tracking-tight lg:leading-tight lg:text-3xl text-black dark:text-white transition duration-200">
        {props.title}
      </div>
    </Link>
  );
}

Articles.Article = Article;
