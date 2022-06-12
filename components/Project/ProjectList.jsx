import { Project } from "./Project";

const ProjectList = ({ data = [] }) => {
  const projects = data.map((project) => {
    return <Project key={project.title} {...project} />;
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-2xl font-bold text-zinc-100">
          Open Source Projects
        </h3>
        <a
          href="https://github.com/itsrennyman"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base text-zinc-100"
        >
          View Github
        </a>
      </div>

      <div className="flex flex-col">{projects}</div>
    </div>
  );
};

export { ProjectList };
