import { Project } from "./Project";

const ProjectList = ({ data = [], className = "" }) => {
  const projects = data.map((project) => {
    return <Project key={project.title} {...project} />;
  });

  return (
    <section className={className}>
      <h3 className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 bg-clip-text text-transparent text-4xl font-black tracking-tight">
        OSS Projects
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-lg mt-2 leading-snug tracking-tight">
        Some of my projects are open-source, come and have a look at them!
      </p>
      <ul className="mt-5">{projects}</ul>
    </section>
  );
};

export { ProjectList };
