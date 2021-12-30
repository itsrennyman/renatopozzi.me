import { Emoji } from "../components/Emoji";
import { Hobby } from "../components/Hobby";
import { Image } from "../components/Image";
import { Articles } from "../components/Articles";
import { Layout } from "../components/Layout/Layout";
import { SectionHeading } from "../components/SectionHeading";
import { getArticleData, getArticles } from "../lib/utils/articles";
import {
  PaperAirplaneIcon,
  DesktopComputerIcon,
  StarIcon,
} from "@heroicons/react/outline";

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
      ...fm,
      id: file.replace(/\.mdx$/, ""),
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
      <section className="grid grid-cols-3 gap-5 py-24">
        <div className="col-span-2 flex w-full flex-col justify-center space-y-8">
          <div className="font-semibold tracking-tight text-4xl md:text-7xl space-y-3 text-black dark:text-white transition duration-200">
            <div>Hello!</div>
            <div>
              I&apos;m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                Renato!
              </span>
            </div>
            <div>
              Nice to Meet You! <Emoji symbol="👊" />
            </div>
          </div>

          <p className="text-gray-500 dark:text-gray-400 tracking-tight leading-tight max-w-xl text-4xl">
            I photograph landscapes as a hobby, and I create applications for
            making the web faster.
          </p>
        </div>

        <div className="w-full space-y-2">
          <Image
            width={392}
            height={555}
            alt="One of my picture at the Pragster Wildsee"
            src="photo-1545400309-2956297d66f5"
            priority={true}
          />

          <div className="text-gray-500 dark:text-gray-400 text-sm text-center">
            View it on{" "}
            <a
              href="https://unsplash.com/photos/5KZQspbJwig"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Unsplash
            </a>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-10 py-24">
        <Image
          height={800}
          width={588}
          alt="This is me and my friends at Drei Zinnen (Dolomites)"
          src="photo-1542287098-172e30e21d21"
        />

        <SectionHeading heading="My History">
          <SectionHeading.Title>
            I&apos;m 25, from Italy <Emoji symbol="🍕" />
          </SectionHeading.Title>
          <SectionHeading.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sagittis arcu suscipit, mollis risus non, venenatis tellus. Duis
            congue luctus vulputate. Aliquam ut feugiat eros. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Nulla ut porttitor dolor, ut ultrices quam. Proin
            tincidunt ligula eget tortor accumsan porta. Praesent consequat
            laoreet sodales. Mauris tristique urna eu suscipit luctus. Donec
            egestas feugiat neque, lacinia accumsan felis tincidunt at. Mauris
            scelerisque erat in tincidunt rhoncus. Cras sed ipsum sed tortor
            dignissim aliquam. Ut pellentesque at mauris feugiat pellentesque.
            Cras tincidunt molestie condimentum. Donec magna enim, dictum vitae
            ligula at, porttitor vestibulum tortor. Vestibulum non leo sit amet
            lectus scelerisque tempor non ac leo. Suspendisse massa quam,
            facilisis in pretium non, lacinia nec orci. Aenean ligula diam,
            auctor commodo faucibus eget, maximus id magna. Curabitur gravida
            ultrices placerat. Aliquam vel ipsum a ipsum bibendum iaculis in
            quis enim. Nulla facilisi. Vivamus pellentesque lorem consectetur
            ligula gravida ullamcorper.
          </SectionHeading.Description>
        </SectionHeading>
      </section>

      <section className="flex w-full flex-col py-24 space-y-10">
        <SectionHeading heading="Curiosities">
          <SectionHeading.Title>
            Some things i <Emoji symbol="❤️" />
          </SectionHeading.Title>
          <SectionHeading.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sagittis arcu suscipit, mollis risus non, venenatis tellus. Duis
            congue luctus vulputate. Aliquam ut feugiat eros.
          </SectionHeading.Description>
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <Hobby title="Travels" icon={PaperAirplaneIcon}>
            Since my first solo travel in Norway, i literally falled in love to
            grab my backpack, take the first plane and live another experience.
          </Hobby>

          <Hobby title="Javascript" icon={DesktopComputerIcon}>
            I have worked and experimented with many programming languages
            ​​along my way, and although I hated it in high school, with its
            ecosystem it has become my favorite language. Now I want to master
            it.
          </Hobby>

          <Hobby title="Hiking" icon={StarIcon}>
            I am lucky enough to live close enough to the paradise of the
            Dolomites, and it happens very often that I visit them with a few
            walks, I always leave my lungs there but the view is incredible.
          </Hobby>
        </div>
      </section>

      <section className="flex flex-col w-full py-24 space-y-10">
        <SectionHeading heading="Writings">
          <SectionHeading.Title>
            Have a look at my articles <Emoji symbol="📚" />
          </SectionHeading.Title>
          <SectionHeading.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sagittis arcu suscipit, mollis risus non, venenatis tellus. Duis
            congue luctus vulputate. Aliquam ut feugiat eros.
          </SectionHeading.Description>
        </SectionHeading>

        <Articles>
          {latestArticles.map((article) => (
            <Articles.Article key={article.id} {...article} />
          ))}
        </Articles>
      </section>
    </Layout>
  );
}
