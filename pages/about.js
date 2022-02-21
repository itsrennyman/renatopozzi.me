import { Project } from "../components/Project";
import { Container, Flex, Grid, Text } from "../components/UI";
import projects from "../lib/data/projects";

export default function Home() {
  const seo = {
    title: "Renato Pozzi | About Me",
  };

  const projectsList = projects.map((project, index) => {
    return <Project key={index} {...project} />;
  });

  return (
    <Container seo={seo}>
      <Flex as="section" direction="column" gap="6">
        <Text as="h1" color="glowing" size="5xl" weight="semibold">
          About Me
        </Text>

        <Text size="lg" weight="medium" css={{ lineHeight: "2rem" }}>
          Bringing kindness & knowledge to other people.
        </Text>

        <Text size="lg" weight="medium" css={{ lineHeight: "2rem" }}>
          I&apos;m a software developer currently based in Milan, Italy 🇮🇹 I
          used to work as a Full-Stack Developer, now I&apos;m discovering my
          love for Front-End Engineering.
        </Text>

        <Text size="lg" weight="medium" css={{ lineHeight: "2rem" }}>
          I love Javascript and its ecosystem, most of my projects are made in
          React & Next.js. Usually, I share pieces of my experiences through
          LinkedIn or Twitter and although I&apos;m quite introverted in the
          first meeting, I love to get in touch with other devs! :) I built also
          a couple of open-source projects, available on my Github profile, and
          probably the list will grow in the future.
        </Text>

        <Text size="lg" weight="medium" css={{ lineHeight: "2rem" }}>
          I tend to read every day, at least 10 pages of entrepreneurship and
          personal-growth books, Jack Ma and Simon Sinek are currently my
          inspiration. I love watching them talk about their experiences.
        </Text>

        <Text size="lg" weight="medium" css={{ lineHeight: "2rem" }}>
          Sometimes I&apos;m also a gamer, fallen in love with Pokemon since
          I&apos;m a child, and also some more competitive games like Rocket
          League.
        </Text>
      </Flex>

      <Flex direction="column" gap="5" css={{ marginTop: "5rem" }}>
        <Text size="2xl" weight="semibold">
          Projects
        </Text>
        <Grid columns={{ "@initial": "1", "@bp1": "2" }} gap={5}>
          {projectsList}
        </Grid>
      </Flex>
    </Container>
  );
}
