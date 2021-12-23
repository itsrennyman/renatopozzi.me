import { default as NextImage } from "next/image";

export function ArticlesSection(props) {
  return (
    <section className="flex flex-col w-full py-24">
      <div className="mb-10">
        <p className="font-medium tracking-wide text-cyan-500 dark:text-cyan-400 uppercase">
          Some Writings
        </p>
        <h2 className="max-w-lg mt-5 mb-5 text-4xl font-semibold tracking-tight leading-tight lg:text-5xl text-black dark:text-white transition duration-200">
          Have a look at my Blog
        </h2>
        <div className="prose xl:prose-xl dark:prose-inverse text-gray-500 dark:text-gray-400">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sagittis arcu suscipit, mollis risus non, venenatis tellus. Duis
            congue luctus vulputate. Aliquam ut feugiat eros.
          </p>
        </div>
      </div>

      {props.children}
    </section>
  );
}

const Items = ({ children, cols = 3, gap = 10 }) => {
  return <div className={`grid grid-cols-${cols} gap-${gap}`}>{children}</div>;
};

const Article = (props) => {
  return (
    <div className="flex flex-col">
      <NextImage
        className="rounded-lg"
        alt={props.title}
        src={props.image}
        width={800}
        height={1200}
        layout="responsive"
      />
      <h4 className="mt-4 text-2xl font-semibold tracking-tight leading-tight lg:text-3xl text-black dark:text-white transition duration-200">
        {props.title}
      </h4>
    </div>
  );
};

ArticlesSection.Items = Items;
ArticlesSection.Article = Article;
