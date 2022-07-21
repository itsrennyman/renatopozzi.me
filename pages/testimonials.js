import * as React from "react";
import { Container } from "../components/Container";

const Testimonial = ({ children, name, role }) => {
  return (
    <section className="p-10 bg-zinc-800 rounded-md">
      <div className="mx-auto text-center">
        <figure>
          <svg
            className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-2xl font-medium text-white">{children}</p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6">
            <div className="flex items-center divide-x-2 divide-gray-700">
              <div className="pr-3 font-medium text-white">{name}</div>
              <div className="pl-3 text-sm font-light text-gray-400">
                {role}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

const seo = {
  title: "Renato Pozzi | Testimonials",
  description:
    "These are the words of some of those who have taken my advice and received actual results from their efforts.",
};

export default function Testimonials() {
  return (
    <Container seo={seo}>
      <div className="flex flex-col gap-4 mt-12 mb-24 md:my-24">
        <h1 className="text-6xl text-center font-black text-zinc-100 tracking-tight">
          Testimonials
        </h1>
        <h2 className="text-xl sm:text-2xl text-center font-medium text-zinc-400 max-w-3xl leading-snug tracking-tight">
          These are the words of some of those who have taken my advice and
          received actual results from their efforts.
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        <Testimonial name="Jonatan Segovia" role="Front-End Developer">
          "Renato helped me a lot when I was struggling with how to advance in
          my front-end career. He explained to me what would be the best way to
          achieve my goals, and that is working for me at the moment!"
        </Testimonial>
      </div>
    </Container>
  );
}
