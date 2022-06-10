import Markdoc from "@markdoc/markdoc";
import fs from "fs";
import yaml from "js-yaml";
import path from "path";

export async function getArticleData(fileName) {
  const dir = path.join(process.cwd(), "/lib/articles");
  const file = fs.readFileSync(path.join(dir, fileName), "utf-8");
  const ast = Markdoc.parse(file);

  const frontmatter = ast.attributes.frontmatter
    ? yaml.load(ast.attributes.frontmatter)
    : {};

  return {
    fm: frontmatter,
    file: file,
  };
}

export async function getArticleList() {
  const dir = path.join(process.cwd(), "/lib/articles");
  const files = fs.readdirSync(dir);

  const articles = [];

  for (const file of files) {
    const { fm } = await getArticleData(file);

    if (fm.isDraft) continue;

    articles.push({
      ...fm,
      id: file.replace(/\.mdx$/, ""),
    });
  }

  return articles;
}
