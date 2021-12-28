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

export function ArticleLayout({ children, fm }) {
  return (
    <Layout>
      <h1 className="max-w-5xl w-full mx-auto text-4xl lg:text-6xl lg:leading-tight font-normal tracking-tight text-black dark:text-white transition duration-200 py-16">
        {fm.title}
      </h1>

      <div className="max-w-5xl mx-auto w-full">
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

      <article className="w-full prose lg:prose-xl prose-code:overflow-x-auto prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600 dark:prose-invert mx-auto py-24">
        {children}
      </article>
    </Layout>
  );
}

export default function Show({ content, fm }) {
  return (
    <ArticleLayout fm={fm}>
      <MDXRemote {...content} components={components} />
    </ArticleLayout>
  );
}
