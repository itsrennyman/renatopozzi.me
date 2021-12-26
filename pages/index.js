import { Layout } from "../components/Layout/Layout";
import { HeroSection } from "../components/HeroSection";
import { AboutMeSection } from "../components/AboutMeSection";
import { ArticlesSection } from "../components/ArticlesSection";
import { HobbiesSection } from "../components/HobbiesSection";
import { Articles } from "../components/Articles";

import { articles as ciccio } from "../lib/mocks/articles";

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

export default function Home() {
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
          {ciccio.map((article) => (
            <Articles.Article key={article.id} {...article} />
          ))}
        </Articles>
      </ArticlesSection>
    </Layout>
  );
}
