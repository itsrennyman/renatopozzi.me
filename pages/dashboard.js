import { Layout } from "../components/Layout/Layout";
import { Panel } from "../components/Layout/Panel";
import { Github } from "../components/Icons/Github";
import { Unsplash } from "../components/Icons/Unsplash";
import { Twitter } from "../components/Icons/Twitter";
import { Ether } from "../components/Icons/Ether";

export const formatter = (number) => {
  if (typeof number === "string") {
    number = Number(number);
  }

  if (number < 1000) {
    return number;
  }

  if (number < 1000000) {
    return `${(number / 1000).toFixed(1)}k`;
  }

  if (number < 1000000000) {
    return `${(number / 1000000).toFixed(1)}M`;
  }

  return `${(number / 1000000000).toFixed(1)}B`;
};

export default function Index(props) {
  return (
    <Layout>
      <section className="flex flex-col w-full py-24">
        <div className="mb-24 space-y-8">
          <h1 className="font-semibold tracking-tight text-4xl md:text-7xl space-y-3 text-black dark:text-white transition duration-200">
            Dashboard
          </h1>
          <h2 className="text-gray-500 dark:text-gray-400 tracking-tight leading-tight max-w-xl text-4xl">
            This is a personal statistics dashboard inspired on the Lee Robinson
            work. I use this dashboard to track various metrics across platforms
            like Unsplash and my GitHub projects.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <Panel>
            <Github className="h-10 w-10 text-black dark:text-white" />
            <h3 className="text-black dark:text-white font-semibold text-2xl mt-8">
              Github Stars
            </h3>
            <div className="text-black dark:text-white font-bold tracking-tight text-6xl mt-2">
              589
            </div>
          </Panel>

          <Panel>
            <Github className="h-10 w-10 text-black dark:text-white" />
            <h3 className="text-black dark:text-white font-semibold text-2xl mt-8">
              Github Followers
            </h3>
            <div className="text-black dark:text-white font-bold tracking-tight text-6xl mt-2">
              18
            </div>
          </Panel>

          <Panel>
            <Unsplash className="h-10 w-10 text-black dark:text-white" />
            <h3 className="text-black dark:text-white font-semibold text-2xl mt-8">
              Unsplash Views
            </h3>
            <div className="text-black dark:text-white font-bold tracking-tight text-6xl mt-2">
              {formatter(9759250)}
            </div>
          </Panel>

          <Panel>
            <Unsplash className="h-10 w-10 text-black dark:text-white" />
            <h3 className="text-black dark:text-white font-semibold text-2xl mt-8">
              Unsplash Downloads
            </h3>
            <div className="text-black dark:text-white font-bold tracking-tight text-6xl mt-2">
              {formatter(65718)}
            </div>
          </Panel>

          <Panel>
            <Twitter className="h-10 w-10 text-black dark:text-white" />
            <h3 className="text-black dark:text-white font-semibold text-2xl mt-8">
              Twitter Followers
            </h3>
            <div className="text-black dark:text-white font-bold tracking-tight text-6xl mt-2">
              {formatter(64)}
            </div>
          </Panel>

          <Panel>
            <Ether className="h-10 w-10 text-black dark:text-white" />
            <h3 className="text-black dark:text-white font-semibold text-2xl mt-8">
              Ether Price
            </h3>
            <div className="text-black dark:text-white font-bold tracking-tight text-6xl mt-2">
              {formatter(3748.78)}
            </div>
          </Panel>
        </div>
      </section>
    </Layout>
  );
}
