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
      <div className="flex flex-col gap-4 mt-12 mb-24 md:my-24">
        <h1 className="text-6xl text-center font-black text-zinc-100 tracking-tight">
          Newsletter
        </h1>
      </div>

      <NewsletterForm />
    </Container>
  );
}
