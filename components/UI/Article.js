import PropTypes from "prop-types";
import { Link } from "./Link";
import { Image } from "./Image";

export function Article({ id, title, thumbnail, createdAt }) {
  const localDate = new Date(createdAt).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link href={`/articles/${id}`}>
      <Image alt={title} src={thumbnail} height={500} width={378} />

      <div className="mt-4 text-lg font-semibold tracking-tight leading-tight md:text-xl text-gray-500 dark:text-gray-400 transition duration-200">
        {localDate}
      </div>

      <h3 className="mt-2 text-2xl font-semibold tracking-tight lg:leading-tight lg:text-3xl text-black dark:text-white transition duration-200">
        {title}
      </h3>
    </Link>
  );
}

Article.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
