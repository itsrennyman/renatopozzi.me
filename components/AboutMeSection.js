import { default as NextImage } from "next/image";
import { Emoji } from "./Emoji";

export function AboutMeSection(props) {
  return (
    <section className="flex w-full flex-col py-48">
      <div className="grid grid-cols-2 gap-16">
        <div>
          <NextImage
            className="rounded-lg"
            alt="This is me and my friends at Drei Zinnen (Dolomites)"
            src="https://images.unsplash.com/photo-1542287098-172e30e21d21?q=80&w=700"
            width={800}
            height={1200}
          />
        </div>
        <div>
          <p className="font-medium tracking-wide text-cyan-500 dark:text-cyan-400 uppercase">
            About me
          </p>
          <h2 className="max-w-lg mt-5 mb-10 text-4xl font-semibold tracking-tight leading-tight lg:text-5xl text-black dark:text-white transition duration-200">
            I'm 25, from Italy <Emoji symbol="🍕" />
          </h2>

          <div className="prose xl:prose-xl dark:prose-inverse max-w-prose text-gray-500 dark:text-gray-400">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sagittis arcu suscipit, mollis risus non, venenatis tellus. Duis
              congue luctus vulputate. Aliquam ut feugiat eros. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Nulla ut porttitor dolor, ut ultrices quam.
              Proin tincidunt ligula eget tortor accumsan porta. Praesent
              consequat laoreet sodales. Mauris tristique urna eu suscipit
              luctus. Donec egestas feugiat neque, lacinia accumsan felis
              tincidunt at. Mauris scelerisque erat in tincidunt rhoncus. Cras
              sed ipsum sed tortor dignissim aliquam. Ut pellentesque at mauris
              feugiat pellentesque. Cras tincidunt molestie condimentum.
            </p>
            <p>
              Donec magna enim, dictum vitae ligula at, porttitor vestibulum
              tortor. Vestibulum non leo sit amet lectus scelerisque tempor non
              ac leo. Suspendisse massa quam, facilisis in pretium non, lacinia
              nec orci. Aenean ligula diam, auctor commodo faucibus eget,
              maximus id magna. Curabitur gravida ultrices placerat. Aliquam vel
              ipsum a ipsum bibendum iaculis in quis enim. Nulla facilisi.
              Vivamus pellentesque lorem consectetur ligula gravida ullamcorper.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
