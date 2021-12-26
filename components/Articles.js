import { default as NextImage } from "next/image";

export function Articles({ children, cols = 3, gap = 14 }) {
  return <div className={`grid grid-cols-3 gap-10`}>{children}</div>;
}

function Article(props) {
  const thumbnail = `${props.thumbnail}?q=70&w=800`;

  return (
    <div className="article">
      <NextImage
        className="rounded-lg"
        alt={props.title}
        src={thumbnail}
        width={800}
        height={1200}
        layout="responsive"
      />
      <h4 className="mt-4 text-2xl font-semibold tracking-tight leading-tight lg:text-3xl text-black dark:text-white transition duration-200">
        {props.title}
      </h4>
    </div>
  );
}

Articles.Article = Article;
