import { Main } from "./Main";
import { Link } from "../UI/Link";
import { Image } from "../UI/Image";

export function Article({ children, fm }) {
  const seo = {
    title: fm.title,
    type: "article",
    // image: "This should be the original vercel image but does not work",
    description: fm.description,
    author: fm.author,
    publishDate: fm.createdAt,
  };

  return (
    <Main seo={seo}>
      <div className="space-y-4 py-16">
        <div className="max-w-5xl w-full mx-auto text-xl lg:text-2xl lg:leading-tight font-normal tracking-tight text-black dark:text-white transition duration-200">
          <Link href="/articles">
            &#8592;
            <span className="px-2 hover:underline">Back to articles</span>
          </Link>
        </div>

        <h1 className="max-w-5xl w-full mx-auto text-4xl md:text-6xl leading-tight md:leading-tight font-normal tracking-tight text-black dark:text-white transition duration-200">
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

      <article className="w-full prose prose-lg lg:prose-xl prose-code:overflow-x-auto prose-pre:-mx-4 md:prose-pre:-mx-8 lg:prose-pre:-mx-16 prose-pre:rounded-none lg:prose-pre:rounded-lg prose-img:rounded-xl dark:prose-invert mx-auto py-12 md:py-24">
        {children}
      </article>
    </Main>
  );
}
