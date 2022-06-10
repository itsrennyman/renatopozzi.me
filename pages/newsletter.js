import * as React from "react";
import { Container } from "../components/Container";
import styles from "../styles/newsletter.module.css";

const NewsletterForm = () => {
  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const formRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;

    if (!name || !email) {
      alert("Please fill in all the fields");
      return;
    }

    fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(async (res) => {
      if (res.ok) {
        alert("You have been added to the newsletter!");
        formRef.current.reset();
      } else {
        alert("Something went wrong, please try again later");
      }
    });
  };

  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletter__header}>
        <h3>Get Access to Exclusive Content!</h3>
        <p>
          I&apos;m going to produce some great stuff exclusively for front-end
          developers. I&apos;ll post new content including tips, tutorials and
          early access to future resources. Just subscribe and you’ll get my
          best posts delivered right to your inbox. I promise you won’t regret.
        </p>
      </div>

      <form ref={formRef} className={styles.newsletter__input}>
        <input type="text" placeholder="Your Name" ref={nameRef} />
        <input type="email" placeholder="Your Email" ref={emailRef} />
        <button type="submit" onClick={handleSubmit}>
          Get Access!
        </button>
      </form>
    </section>
  );
};

export default function Dashboard() {
  const seo = {
    title: "Renato Pozzi | Newsletter",
    description:
      "An opinonated newsletter rich of resources for web developers.",
  };

  return (
    <Container seo={seo}>
      <div className="hero">
        <h1>Newsletter</h1>
      </div>

      <NewsletterForm />
    </Container>
  );
}
