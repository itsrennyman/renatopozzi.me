import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export async function getArticleData(fileName) {
  const dir = path.join(process.cwd(), "/lib/articles");
  const file = fs.readFileSync(path.join(dir, fileName), "utf-8");
  const { content, data } = matter(file);

  // Convert Date to serialize
  data.createdAt = data.createdAt ? data.createdAt.toLocaleString() : null;

  const serialized = await serialize(content);
  return { fm: data, content: serialized };
}

export function getArticles() {
  const dir = path.join(process.cwd(), "/lib/articles");
  const files = fs.readdirSync(dir);
  return files;
}
