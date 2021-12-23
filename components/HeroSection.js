import { default as NextImage } from "next/image";
import { Emoji } from "./Emoji";

export function HeroSection(props) {
  return (
    <section className="grid grid-cols-3 gap-5 py-24">{props.children}</section>
  );
}

const Text = () => {
  return (
    <div className="col-span-2 flex w-full flex-col justify-center space-y-8">
      <h1 className="font-bolder tracking-tight text-4xl md:text-7xl leading-tight text-black dark:text-white transition duration-200">
        Hello!
        <br />
        I&apos;m{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Renato!
        </span>
        <br />
        Nice to Meet You! <Emoji symbol="👊" />
      </h1>

      <p className="text-gray-500 dark:text-gray-400 tracking-tight leading-tight max-w-xl text-4xl">
        I photograph landscapes as a hobby, and I create applications for making
        the web faster.
      </p>
    </div>
  );
};

const Image = () => {
  return (
    <div className="flex w-full flex-col space-y-2">
      <NextImage
        className="rounded-lg"
        alt="One of my picture at the Pragster Wildsee"
        src="https://images.unsplash.com/photo-1545400309-2956297d66f5?q=80&w=800"
        width={800}
        height={1200}
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
  );
};

HeroSection.Text = Text;
HeroSection.Image = Image;
