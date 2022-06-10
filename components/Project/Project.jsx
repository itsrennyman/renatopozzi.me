import NextLink from "next/link";
import styles from "./Project.module.css";

export const Project = ({ id, title, description }) => {
  return (
    <NextLink href="/projects/[id]" as={`/projects/${id}`} passHref>
      <a className={styles.project}>
        <div className={styles.project__data}>
          <h3 className={styles.project__data__title}>{title}</h3>
          <p className={styles.project__data__excerpt}>{description}</p>
        </div>
      </a>
    </NextLink>
  );
};
