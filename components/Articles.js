import { Image } from "./Image";
import { Link } from "./Link";

export function Articles({ children }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10`}>
      {children}
    </div>
  );
}

function Article(props) {
  return (
    <Link
      href={`/articles/${props.id}`}
      className="transition ease-in-out hover:scale-95 duration-300"
    >
      <div style={{ position: "relative", width: "100%", height: "500px" }}>
        <Image alt={props.title} src={props.thumbnail} />
      </div>
      <div className="mt-4 text-lg font-normal tracking-tight leading-tight lg:text-xl text-gray-400 dark:text-gray-500 transition duration-200">
        {props.createdAt}
      </div>
      <h4 className="mt-2 text-2xl font-normal tracking-tight leading-tight lg:text-3xl text-black dark:text-white transition duration-200">
        {props.title}
      </h4>
    </Link>
  );
}

Articles.Article = Article;
