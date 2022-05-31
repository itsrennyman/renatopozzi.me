import NextLink from "next/link";
import styles from "./Article.module.css";

export const Article = ({ id, title, description }) => {
  const excerpt = description.split(" ").slice(0, 20).join(" ") + "...";

  return (
    <NextLink href="/articles/[id]" as={`/articles/${id}`} passHref>
      <a className={styles.article}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.article__image}
          src="/assets/icons/javascript.svg"
          alt="JavaScript"
        />

        <div className={styles.article__data}>
          <h3 className={styles.article__data__title}>{title}</h3>
          <p className={styles.article__data__excerpt}>{excerpt}</p>
        </div>
      </a>
    </NextLink>
  );
};
