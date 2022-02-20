import { MDXRemote } from "next-mdx-remote";
import { Code } from "../../components/MDX/Code";
import { Text } from "../../components/UI";
import { getArticleData, getArticles } from "../../lib/utils/articles";

export function getStaticPaths() {
  const files = getArticles();

  const paths = files.map((article) => {
    return {
      params: { id: article.replace(/\.mdx$/, "") },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;

  const fileName = `${id}.mdx`;
  const attributes = await getArticleData(fileName);

  return {
    props: { ...attributes },
  };
}

const Paragraph = (props) => (
  <Text
    as="p"
    size="2"
    css={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
    {...props}
  />
);
const H1 = (props) => (
  <Text as="h1" size="4" {...props} css={{ marginBottom: "2rem" }} />
);
const H2 = (props) => (
  <Text
    as="h2"
    size="3"
    css={{ marginTop: "1.5555556em", marginBottom: "0.8888889em" }}
    {...props}
  />
);

export default function Show({ content, fm }) {
  return (
    <>
      <section>
        <Text as="h1" color="glowing" size="4" css={{ marginBottom: "2rem" }}>
          {fm.title}
        </Text>
      </section>

      <MDXRemote
        {...content}
        components={{ code: Code, p: Paragraph, h1: H1, h2: H2 }}
      />
    </>
  );
}
