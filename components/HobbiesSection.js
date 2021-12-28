import {
  PaperAirplaneIcon,
  DesktopComputerIcon,
  StarIcon,
} from "@heroicons/react/outline";
import { Emoji } from "./Emoji";

export function HobbiesSection(props) {
  return (
    <section className="flex w-full flex-col py-24">
      <div className="flex flex-col justify-center">
        <p className="font-medium tracking-wide text-cyan-500 dark:text-cyan-400 uppercase">
          Curiosities
        </p>
        <h2 className="relative max-w-lg mt-5 mb-10 text-4xl font-semibold tracking-tight leading-tight lg:text-5xl text-black dark:text-white transition duration-200">
          Some things i <Emoji symbol="❤️" />
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div className="p-8 rounded-lg bg-gray-100 dark:bg-gray-800">
          <PaperAirplaneIcon className="h-8 w-8 text-black dark:text-white" />
          <h3 className="text-black dark:text-white font-bold text-2xl mt-8">
            Travels
          </h3>
          <div className="text-gray-500 dark:text-gray-400 tracking-tight text-lg mt-2">
            Since my first solo travel in Norway, i literally falled in love to
            grab my backpack, take the first plane and live another experience.
          </div>
        </div>

        <div className="p-8 rounded-lg bg-gray-100 dark:bg-gray-800">
          <DesktopComputerIcon className="h-8 w-8 text-black dark:text-white" />
          <h3 className="text-black dark:text-white font-bold text-2xl mt-8">
            Javascript
          </h3>
          <div className="text-gray-500 dark:text-gray-400 tracking-tight text-lg mt-2">
            I have worked and experimented with many programming languages
            ​​along my way, and although I hated it in high school, with its
            ecosystem it has become my favorite language. Now I want to master
            it.
          </div>
        </div>

        <div className="p-8 rounded-lg bg-gray-100 dark:bg-gray-800">
          <StarIcon className="h-8 w-8 text-black dark:text-white" />
          <h3 className="text-black dark:text-white font-bold text-2xl mt-8">
            Hiking
          </h3>
          <div className="text-gray-500 dark:text-gray-400 tracking-tight text-lg mt-2">
            I am lucky enough to live close enough to the paradise of the
            Dolomites, and it happens very often that I visit them with a few
            walks, I always leave my lungs there but the view is incredible.
          </div>
        </div>
      </div>
    </section>
  );
}
