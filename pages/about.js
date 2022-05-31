import { Container } from "../components/Container";
import { Project } from "../components/Project";
import projects from "../lib/data/projects";
import styles from "../styles/styles.module.css";

export default function Home() {
  const seo = {
    title: "Renato Pozzi | About Me",
  };

  const projectsList = projects.map((project, index) => {
    return <Project key={index} {...project} />;
  });

  return (
    <Container seo={seo}>
      <div className={styles.hero}>
        <h1>About</h1>
      </div>

      <div className="prose">
        <p>Bringing kindness & knowledge to other people.</p>
        <p>
          I&apos;m a software developer currently based in Milan, Italy 🇮🇹 I
          used to work as a Full-Stack Developer, now I&apos;m discovering my
          love for Front-End Engineering.
        </p>
        <p>
          I love Javascript and its ecosystem, most of my projects are made in
          React & Next.js. Usually, I share pieces of my experiences through
          LinkedIn or Twitter and although I&apos;m quite introverted in the
          first meeting, I love to get in touch with other devs! :) I built also
          a couple of open-source projects, available on my Github profile, and
          probably the list will grow in the future.
        </p>
        <p>
          I tend to read every day, at least 10 pages of entrepreneurship and
          personal-growth books, Jack Ma and Simon Sinek are currently my
          inspiration. I love watching them talk about their experiences.
        </p>
        <p>
          Sometimes I&apos;m also a gamer, fallen in love with Pokemon since
          I&apos;m a child, and also some more competitive games like Rocket
          League.
        </p>
      </div>
    </Container>
  );
}
