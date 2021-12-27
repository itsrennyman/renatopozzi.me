import { Layout } from "../components/Layout/Layout";
import { HeroSection } from "../components/HeroSection";
import { AboutMeSection } from "../components/AboutMeSection";
import { ArticlesSection } from "../components/ArticlesSection";
import { HobbiesSection } from "../components/HobbiesSection";
import { Articles } from "../components/Articles";
import { getArticleData, getArticles } from "../lib/utils/articles";

export const theme = {
  primary: {
    light: "black",
    dark: "white",
  },
  secondary: {
    light: "gray-500",
    dark: "gray-400",
  },
  tertiary: {
    light: "gray-300",
    dark: "gray-700",
  },
};

export async function getStaticProps() {
  const articles = [];
  const files = getArticles();

  for (const file of files) {
    const { fm } = await getArticleData(file);
    articles.push({
      id: file.replace(/\.mdx$/, ""),
      ...fm,
    });

    if (articles.length === 6) break;
  }

  return {
    props: {
      latestArticles: articles,
    },
  };
}

export default function Home({ latestArticles }) {
  return (
    <Layout>
      <HeroSection>
        <HeroSection.Text />
        <HeroSection.Image />
      </HeroSection>

      <AboutMeSection />

      <HobbiesSection />

      <ArticlesSection>
        <Articles>
          {latestArticles.map((article) => (
            <Articles.Article key={article.id} {...article} />
          ))}
        </Articles>
        P
      </ArticlesSection>
    </Layout>
  );
}
