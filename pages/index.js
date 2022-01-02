import { Link } from "../components/UI/Link";
import { Emoji } from "../components/UI/Emoji";
import { Image } from "../components/UI/Image";
import { Hobby } from "../components/Hobby";
import { Main } from "../components/Layout/Main";
import { Articles } from "../components/Articles";
import { SectionHeading } from "../components/UI/SectionHeading";
import { getArticleData, getArticles } from "../lib/utils/articles";
import {
  PaperAirplaneIcon,
  DesktopComputerIcon,
  StarIcon,
  BeakerIcon,
} from "@heroicons/react/outline";

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
    <Main>
      <section className="grid grid-cols-3 gap-5 py-24">
        <div className="col-span-3 sm:col-span-2 flex w-full flex-col justify-center space-y-8">
          <div className="font-semibold tracking-tight text-5xl leading-snug md:text-7xl md:leading-tight space-y-3 text-black dark:text-white transition duration-200">
            Hello! <br /> I&apos;m{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Renato!
            </span>
            <br />
            Nice to Meet You! <Emoji symbol="👊" />
          </div>

          <p className="text-gray-500 dark:text-gray-400 tracking-tight max-w-xl text-3xl leading-snug md:text-4xl md:leading-tight">
            I photograph landscapes as a hobby, and I create applications for
            making the web faster.
          </p>
        </div>

        <div className="hidden sm:block w-full space-y-2">
          <Image
            width={450}
            height={655}
            alt="One of my picture at the Pragster Wildsee"
            src="photo-1545400309-2956297d66f5"
            priority={true}
          />

          <div className="text-gray-500 dark:text-gray-400 text-sm text-center">
            View it on{" "}
            <Link
              className="underline"
              isExternal={true}
              href="https://unsplash.com/photos/5KZQspbJwig"
            >
              Unsplash
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-10 py-24">
        <div className="hidden sm:block">
          <Image
            height={800}
            width={588}
            alt="This is me and my friends at Drei Zinnen (Dolomites)"
            src="photo-1542287098-172e30e21d21"
          />
        </div>

        <SectionHeading
          heading="My History"
          className="col-span-2 sm:col-span-1 flex justify-center"
        >
          <SectionHeading.Title>
            I&apos;m 25, from Italy <Emoji symbol="🍕" />
          </SectionHeading.Title>
          <SectionHeading.Description>
            I&apos;m a software developer, and I&apos;m passionate about web
            development. Since high school, I&apos;ve been starting to code some
            little static websites, and at my 18 years old, I&apos;ve started to
            learn how to code in a professional environment thanks to my first
            colleagues, becoming a full-stack developer working with a lot of
            different technologies. Lately, this path didn&apos;t give me more
            stimuli, so I decided to quit my job and undertake a phase of
            personal development by traveling around the world, and studying a
            specific technology: Javascript. I love this programming language
            and its ecosystem, and I have pleasantly rediscovered how
            specializing in one area is much more personally rewarding than
            having a mediocre knowledge of many topics. Oh, and I&apos;m also an
            hobbist landscapes photographer, and... yes, if you were wondering
            this on the left is me and a couple of friends at about 2500mt
            sleeping with the Tre Cime di Lavaredo in the background, in the
            Dolomites. It was very cold!
          </SectionHeading.Description>
        </SectionHeading>
      </section>

      <section className="flex w-full flex-col py-24 space-y-10">
        <SectionHeading heading="Curiosities">
          <SectionHeading.Title>
            Some things i <Emoji symbol="❤️" />
          </SectionHeading.Title>
          <SectionHeading.Description>
            There is a long list, these are some of the things I&apos;ve been so
            excited about it lately. <br />
            Maybe you like something among them too!
          </SectionHeading.Description>
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <Hobby title="Travels" icon={PaperAirplaneIcon}>
            Since my first solo travel to Norway, I fell in love to grab my
            backpack, take the first plane and live another beautiful
            experience. Traveling trains my mind to be sociable and communicate
            with strangers.
          </Hobby>

          <Hobby title="Javascript" icon={DesktopComputerIcon}>
            I have worked and experimented with many programming languages
            ​​along my way, and although I hated it in high school, with its
            ecosystem it has become my favorite language. Now I want to master
            it.
          </Hobby>

          <Hobby title="Beer" icon={BeakerIcon}>
            I&apos;m a beer lover. Beer is the best way to spend time with
            someone, refreshing and relaxing. It is one of the best tools for
            healthy networking with people. Did you know that beer helps fight
            depression when drunk in moderate doses?
          </Hobby>

          <Hobby title="Hiking" icon={StarIcon}>
            I am lucky enough to live close enough to the paradise of the The
            Dolomites, and it happens very often that I visit them with a few
            walks, and my trusty Canon 60D. I always leave my lungs there but
            the view is incredible.
          </Hobby>
        </div>
      </section>

      <section className="flex flex-col w-full py-24 space-y-10">
        <SectionHeading heading="Writings">
          <SectionHeading.Title>
            Have a look at my articles <Emoji symbol="📚" />
          </SectionHeading.Title>
          <SectionHeading.Description>
            I love sharing my thoughts and experiences with others, sometimes I
            write an article about it. There are a lot of topics there, personal
            growth and coding are included!
          </SectionHeading.Description>
        </SectionHeading>

        <Articles>
          {latestArticles.map((article) => (
            <Articles.Article key={article.id} {...article} />
          ))}
        </Articles>
      </section>
    </Main>
  );
}
