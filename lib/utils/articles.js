import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export async function getArticleData(fileName) {
  const dir = path.join(process.cwd(), "/lib/articles");
  const file = fs.readFileSync(path.join(dir, fileName), "utf-8");
  const { content, data } = matter(file);

  data.createdAt = data.createdAt
    ? new Date(data.createdAt).toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  console.log("data", data.createdAt);

  const serialized = await serialize(content);
  return { fm: data, content: serialized };
}

export function getArticles() {
  const dir = path.join(process.cwd(), "/lib/articles");
  const files = fs.readdirSync(dir);
  return files;
}
