import Image from "next/image";
import Link from "next/link";

export const Article = ({ id, title, description }) => {
  const excerpt = description.split(" ").slice(0, 20).join(" ") + "...";

  return (
    <Link href="/articles/[id]" as={`/articles/${id}`} passHref>
      <a className="flex flex-row gap-3 border-b border-b-zinc-800 py-6 transform hover:scale-[1.01] transition-all">
        <Image
          height={22}
          width={22}
          src="/assets/icons/javascript.svg"
          alt="JavaScript"
        />

        <div className="flex flex-col">
          <h4 className="text-lg font-bold text-zinc-100">{title}</h4>
          <p className="text-md text-zinc-400">{excerpt}</p>
        </div>
      </a>
    </Link>
  );
};
