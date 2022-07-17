import Link from "next/link";

export const Article = ({ id, title, createdAt }) => {
  const published = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <li className="py-3 border-b border-b-zinc-800">
      <Link href="/articles/[id]" as={`/articles/${id}`} passHref>
        <a className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
          <div className="text-xl tracking-tight font-bold text-zinc-200 hover:text-sky-500 transition-all">
            {title}
          </div>
          <div className="text-md text-zinc-400 tracking-tight">
            {published}
          </div>
        </a>
      </Link>
    </li>
  );
};
