import Link from "next/link";
import { Project } from "./Project";

const ProjectList = ({ data = [] }) => {
  const projects = data.map((project, index) => {
    return <Project key={project.id} {...project} />;
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-2xl font-bold text-zinc-100">Latest Projects</h3>
        <Link href="/projects" passHref>
          <a className="text-base text-zinc-100">View All</a>
        </Link>
      </div>

      <div className="flex flex-col">{projects}</div>
    </div>
  );
};

export { ProjectList };
