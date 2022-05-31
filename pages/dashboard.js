import { Container } from "../components/Container";
import { Counter } from "../components/Counter";
import { Stats } from "../components/Stats";
import { Grid } from "../components/UI";
import styles from "../styles/styles.module.css";

export default function Dashboard() {
  const seo = {
    title: "Renato Pozzi | Dashboard",
    description:
      "This is a personal statistics dashboard. I use this to track various metrics across platforms like Unsplash.",
  };

  return (
    <Container seo={seo}>
      <div className={styles.hero}>
        <h1>Dashboard</h1>
      </div>

      <section>
        <Grid
          columns={{ "@initial": "1", "@bp1": "2" }}
          gap={5}
          css={{ marginTop: "2rem" }}
        >
          <Stats
            title="Github Stars"
            value={<Counter url="/api/github" value="stars" />}
          />
          <Stats
            title="Github Followers"
            value={<Counter url="/api/github" value="followers" />}
          />
          <Stats
            title="Unsplash Views"
            value={<Counter url="/api/unsplash" value="views" />}
          />
          <Stats
            title="Unsplash Downloads"
            value={<Counter url="/api/unsplash" value="downloads" />}
          />
          <Stats
            title="Twitter Followers"
            value={<Counter url="/api/twitter" value="followers_count" />}
          />
          <Stats
            title="Ether Price"
            value={<Counter url="/api/ether" value="ethusd" />}
          />
        </Grid>
      </section>
    </Container>
  );
}
