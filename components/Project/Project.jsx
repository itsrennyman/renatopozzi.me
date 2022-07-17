const Project = ({ id, title, description, href }) => {
  return (
    <li className="border-b border-b-zinc-800 py-3 text-zinc-100 hover:text-sky-500 transition-all">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <h4 className="text-xl tracking-tight font-semibold ">{title}</h4>
        <p className="text-md text-zinc-400 tracking-tight mt-1">
          {description}
        </p>
      </a>
    </li>
  );
};

export { Project };
