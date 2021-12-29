import { default as NextImage } from "next/image";
import { Link } from "./Link";

export function Articles({ children, cols = 3, gap = 14 }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10`}>
      {children}
    </div>
  );
}

function Article(props) {
  const thumbnail = `${props.thumbnail}?q=70`;

  return (
    <Link
      href={`/articles/${props.id}`}
      className="transition ease-in-out hover:scale-95 duration-300"
    >
      <div style={{ position: "relative", width: "100%", height: "500px" }}>
        <NextImage
          className="rounded-lg"
          alt={props.title}
          src={thumbnail}
          layout="fill"
          objectFit="cover"
        />
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
