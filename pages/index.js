import { ArticleList } from "../components/Article";
import { Container } from "../components/Container";
import { NewsletterForm } from "../components/NewsletterForm";
import { ProjectList } from "../components/Project";
import { projects } from "../lib/data/projects";
import { getArticleList } from "../lib/utils/articles";

export async function getStaticProps() {
  const articles = await getArticleList();

  return {
    props: {
      articles: articles,
    },
  };
}

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 mt-12 mb-24 md:my-24">
      <h1 className="text-6xl font-black text-zinc-100 tracking-tight">
        Renato Pozzi
      </h1>
      <h2 className="text-xl sm:text-2xl font-medium text-zinc-400 max-w-3xl leading-snug tracking-tight">
        Content Creator & Front-End Engineer. Helping people become highly
        skilled Front-End Developers.
      </h2>
    </div>
  );
};

export default function Home({ articles }) {
  return (
    <Container>
      <Hero />
      <ArticleList data={articles} />
      <ProjectList data={projects} className="my-20" />
      <NewsletterForm />
    </Container>
  );
}
