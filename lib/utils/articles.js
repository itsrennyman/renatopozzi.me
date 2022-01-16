import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export function sanitizeDate(date) {
  if (!date) {
    return null;
  }

  return new Date(date).toISOString();
}

export async function getArticleData(fileName) {
  const dir = path.join(process.cwd(), "/lib/articles");
  const file = fs.readFileSync(path.join(dir, fileName), "utf-8");
  const { content, data } = matter(file);
  const serialized = await serialize(content);
  return {
    fm: { ...data, createdAt: sanitizeDate(data.createdAt) },
    content: serialized,
  };
}

export function getArticles() {
  const dir = path.join(process.cwd(), "/lib/articles");
  const files = fs.readdirSync(dir);
  return files;
}
