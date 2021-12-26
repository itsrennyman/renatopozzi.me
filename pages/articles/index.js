import { Articles } from "../../components/Articles";
import { Layout } from "../../components/Layout/Layout";

import fs from "fs";
import path from "path";
import frontMatter from "front-matter";

export function getStaticProps() {
  function fm(filePath) {
    const file = fs.readFileSync(filePath, "utf-8");
    const { attributes } = frontMatter(file);
    return attributes;
  }

  const dir = path.join(process.cwd(), "/lib/articles");
  const files = fs.readdirSync(dir);

  const articles = files.map((article) => {
    return {
      id: article.replace(/\.mdx$/, ""),
      ...fm(path.join(dir, article)),
    };
  });

  return {
    props: {
      articles: articles,
    },
  };
}

export default function Index(props) {
  return (
    <Layout>
      <section className="flex flex-col w-full py-24">
        <div className="mb-24 space-y-8">
          <h1 className="font-semibold tracking-tight text-4xl md:text-7xl space-y-3 text-black dark:text-white transition duration-200">
            Articles
          </h1>
          <h2 className="text-gray-500 dark:text-gray-400 tracking-tight leading-tight max-w-xl text-4xl">
            I wrote articles full of values, please have a look at them if you
            are interested in learning something new.
          </h2>
        </div>
        <Articles>
          {props.articles.map((article) => (
            <Articles.Article key={article.id} {...article} />
          ))}
        </Articles>
      </section>
    </Layout>
  );
}
