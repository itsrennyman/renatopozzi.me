import { Container } from "../components/Container";
import { NewsletterForm } from "../components/NewsletterForm";

export default function Dashboard() {
  const seo = {
    title: "Renato Pozzi | Newsletter",
    description:
      "An opinonated newsletter rich of resources for web developers.",
  };

  return (
    <Container seo={seo}>
      <div className="hero">
        <h1 className="text-5xl font-black leading-snug bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
          Newsletter
        </h1>
      </div>

      <NewsletterForm />
    </Container>
  );
}
