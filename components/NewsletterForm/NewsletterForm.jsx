import * as React from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./NewsletterForm.module.css";

const NewsletterForm = () => {
  const [message, setMessage] = React.useState(null);

  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const formRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(null);
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
      const response = await res.json();

      if (res.ok) {
        setMessage(response.message);
        formRef.current.reset();
      } else {
        setMessage(`Error: ${response.message}`);
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
        <Input type="text" placeholder="Your Name" ref={nameRef} />
        <Input type="email" placeholder="Your Email" ref={emailRef} />
        <Button type="submit" onClick={handleSubmit}>
          Get Access!
        </Button>
      </form>

      {message && <div>{message}</div>}
    </section>
  );
};

export { NewsletterForm };
