const Project = ({ id, title, description, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col md:flex-row md:items-center gap-2 border-b border-b-zinc-800 py-6 transform hover:scale-[1.01] transition-all">
        <h4 className="md:basis-56 text-lg font-bold text-zinc-100">{title}</h4>
        <p className="text-md text-zinc-400">{description}</p>
      </div>
    </a>
  );
};

export { Project };
