import PropTypes from "prop-types";
import { Link } from "./UI/Link";
import { Image } from "./UI/Image";

export function Articles({ children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {children}
    </div>
  );
}

Articles.propTypes = {
  children: PropTypes.node.isRequired,
};

Articles.Article = function Article({ id, title, thumbnail, createdAt }) {
  return (
    <Link href={`/articles/${id}`}>
      <Image alt={title} src={thumbnail} height={500} width={378} />

      <div className="mt-4 text-lg font-semibold tracking-tight leading-tight md:text-xl text-gray-500 dark:text-gray-400 transition duration-200">
        {createdAt}
      </div>

      <h3 className="mt-2 text-2xl font-semibold tracking-tight lg:leading-tight lg:text-3xl text-black dark:text-white transition duration-200">
        {title}
      </h3>
    </Link>
  );
};

Articles.Article.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
