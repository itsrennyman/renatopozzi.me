import { Link } from "../Link";
import { Image } from "../Image";
import { Layout } from "./Layout";

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
      <div className="space-y-4 py-16">
        <div className="max-w-5xl w-full mx-auto text-2xl lg:text-2xl lg:leading-tight font-normal tracking-tight text-black dark:text-white transition duration-200">
          <Link href="/articles" className="hover:underline">
            &#8592; Back to Articles
          </Link>
        </div>

        <h1 className="max-w-5xl w-full mx-auto text-4xl lg:text-6xl lg:leading-tight font-normal tracking-tight text-black dark:text-white transition duration-200">
          {fm.title}
        </h1>
      </div>

      <div className="max-w-5xl mx-auto w-full">
        <Image
          alt={fm.title}
          src={fm.thumbnail}
          height={600}
          width={1024}
          priority={true}
        />
      </div>

      <article className="w-full prose lg:prose-xl prose-code:overflow-x-auto prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600 dark:prose-invert mx-auto py-24">
        {children({ components })}
      </article>
    </Layout>
  );
}
