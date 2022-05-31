import { SEOData } from "../SEOData";
import styles from "./Container.module.css";

const Container = ({ children, seo }) => {
  return (
    <div className={styles.container}>
      <SEOData {...seo} />
      {children}
    </div>
  );
};

export { Container };
