import { MDXRemote } from "next-mdx-remote";
import { Layout } from "../../components/Layout/Layout";
import { getArticleData, getArticles } from "../../lib/utils/articles";
import Image from "next/image";

export function getStaticPaths() {
  const files = getArticles();

  const paths = files.map((article) => {
    return {
      params: { id: article.replace(/\.mdx$/, "") },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;

  const fileName = `${id}.mdx`;
  const attributes = await getArticleData(fileName);

  return {
    props: { ...attributes },
  };
}

const components = {
  Image: ({ alt = "A Nice Picture", ...props }) => {
    return <Image alt={alt} src={props.src} layout="fill" objectFit="cover" />;
  },
  Button: (props) => {
    return (
      <button
        type="button"
        className="relative flex items-center justify-center w-full h-full whitespace-nowrap bg-yellow-400 text-black px-11 py-6 space-x-5"
      >
        ciao
      </button>
    );
  },
};

export default function Show({ content, fm }) {
  console.log(fm);
  return (
    <Layout>
      <h1 className="font-semibold tracking-tight text-4xl md:text-7xl space-y-3 text-black dark:text-white transition duration-200">
        {fm.title}
      </h1>
      <div className="max-w-5xl mx-auto w-full py-24">
        <div style={{ position: "relative", width: "100%", height: "600px" }}>
          <Image
            className="rounded-lg"
            alt={fm.title}
            src={`${fm.thumbnail}?q=70`}
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
      </div>

      <article className="prose lg:prose-xl prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600 dark:prose-invert">
        <MDXRemote {...content} components={components} scope={fm} />
      </article>
    </Layout>
  );
}
