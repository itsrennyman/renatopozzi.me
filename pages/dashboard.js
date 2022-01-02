import { Main } from "../components/Layout/Main";
import { Panel } from "../components/UI/Panel";
import { Github } from "../components/Icons/Github";
import { Unsplash } from "../components/Icons/Unsplash";
import { Twitter } from "../components/Icons/Twitter";
import { Ether } from "../components/Icons/Ether";
import { Counter } from "../components/UI/Counter";

export default function Index() {
  return (
    <Main>
      <section className="flex flex-col w-full py-24">
        <div className="mb-24 space-y-8">
          <h1 className="font-semibold tracking-tight text-4xl md:text-7xl space-y-3 text-black dark:text-white transition duration-200">
            Dashboard
          </h1>
          <h2 className="text-gray-500 dark:text-gray-400 tracking-tight max-w-xl leading-snug md:leading-tight text-3xl md:text-4xl">
            This is a personal statistics dashboard. I use this to track various
            metrics across platforms like Unsplash.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <Panel>
            <Github className="h-10 w-10 text-black dark:text-white" />
            <h3 className="text-black dark:text-white font-semibold text-2xl mt-8">
              Github Stars
            </h3>
            <div className="text-black dark:text-white font-bold tracking-tight text-6xl mt-2">
              <Counter url="/api/github" value="stars" />
            </div>
          </Panel>

          <Panel>
            <Github className="h-10 w-10 text-black dark:text-white" />
            <h3 className="text-black dark:text-white font-semibold text-2xl mt-8">
              Github Followers
            </h3>
            <div className="text-black dark:text-white font-bold tracking-tight text-6xl mt-2">
              <Counter url="/api/github" value="followers" />
            </div>
          </Panel>

          <Panel>
            <Unsplash className="h-10 w-10 text-black dark:text-white" />
            <h3 className="text-black dark:text-white font-semibold text-2xl mt-8">
              Unsplash Views
            </h3>
            <div className="text-black dark:text-white font-bold tracking-tight text-6xl mt-2">
              <Counter url="/api/unsplash" value="views" />
            </div>
          </Panel>

          <Panel>
            <Unsplash className="h-10 w-10 text-black dark:text-white" />
            <h3 className="text-black dark:text-white font-semibold text-2xl mt-8">
              Unsplash Downloads
            </h3>
            <div className="text-black dark:text-white font-bold tracking-tight text-6xl mt-2">
              <Counter url="/api/unsplash" value="downloads" />
            </div>
          </Panel>

          <Panel>
            <Twitter className="h-10 w-10 text-black dark:text-white" />
            <h3 className="text-black dark:text-white font-semibold text-2xl mt-8">
              Twitter Followers
            </h3>
            <div className="text-black dark:text-white font-bold tracking-tight text-6xl mt-2">
              <Counter url="/api/twitter" value="followers_count" />
            </div>
          </Panel>

          <Panel>
            <Ether className="h-10 w-10 text-black dark:text-white" />
            <h3 className="text-black dark:text-white font-semibold text-2xl mt-8">
              Ether Price
            </h3>
            <div className="text-black dark:text-white font-bold tracking-tight text-6xl mt-2">
              <Counter url="/api/ether" value="ethusd" />
            </div>
          </Panel>
        </div>
      </section>
    </Main>
  );
}
