import { Emoji } from "../components/Emoji";

export function ArticlesSection(props) {
  return (
    <section className="flex flex-col w-full py-24">
      <div className="mb-10">
        <p className="font-medium tracking-wide text-cyan-500 dark:text-cyan-400 uppercase">
          Some Writings
        </p>
        <h2 className="max-w-xl mt-5 mb-5 text-4xl font-semibold tracking-tight leading-tight lg:text-5xl text-black dark:text-white transition duration-200">
          Have a look at my articles <Emoji symbol="📚" />
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
