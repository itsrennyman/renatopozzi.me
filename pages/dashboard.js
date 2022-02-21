import { Counter } from "../components/Counter";
import { Stats } from "../components/Stats";
import { Container, Flex, Grid, Text } from "../components/UI";

export default function Dashboard() {
  const seo = {
    title: "Renato Pozzi | Dashboard",
    description:
      "This is a personal statistics dashboard. I use this to track various metrics across platforms like Unsplash.",
  };

  return (
    <Container seo={seo}>
      <Flex as="section" direction="column" gap="6">
        <Text as="h1" color="glowing" size="5xl" weight="semibold">
          Dashboard
        </Text>
        <Text size="lg" weight="medium" css={{ lineHeight: "2rem" }}>
          This is a personal statistics dashboard. I use this to track various
          metrics across platforms like Unsplash.
        </Text>
      </Flex>

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
