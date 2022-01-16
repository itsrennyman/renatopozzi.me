import Head from "next/head";
import { useRouter } from "next/router";

export function SEOData(props) {
  const router = useRouter();

  const defaults = {
    title: "Renato Pozzi | Software Developer",
    description:
      "I photograph landscapes as a hobby, and I create applications for making the web faster.",
    image:
      "https://og-image.vercel.app/**Renato**%20**Pozzi**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg",
    type: "website",
  };

  const { title, description, image, type, ...rest } = {
    ...defaults,
    ...props,
  };

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="follow, index" />
      <meta content={description} name="description" />
      <meta
        property="og:url"
        content={`https://renatopozzi.me${router.asPath}`}
      />
      <link rel="canonical" href={`https://renatopozzi.me${router.asPath}`} />
      <link rel="icon" type="image/png" href="/favicon.png" hrefLang="en-us" />

      {/* Generic Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Renato Pozzi" />
      <meta
        name="description"
        property="og:description"
        content={description}
      />
      <meta name="title" property="og:title" content={title} />
      <meta name="image" property="og:image" content={image} />

      {/* Articles Open Graph */}
      {rest.publishDate && (
        <meta
          name="publish_date"
          property="og:publish_date"
          content={rest.publishDate}
        />
      )}

      {rest.author && (
        <meta name="author" property="og:author" content={rest.author} />
      )}

      {/* Twitter Open Graph */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@imarenny" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Google Search Console */}
      <meta
        name="google-site-verification"
        content="OTcNZRBUsfWMToQm_8s8fnmnHywpz4M2tDgcOzvLnLQ"
      />
    </Head>
  );
}
