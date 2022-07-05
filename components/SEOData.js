import Head from "next/head";
import { useRouter } from "next/router";

export function SEOData(props) {
  const router = useRouter();

  const defaults = {
    title: "Renato Pozzi",
    description:
      "I am an Italian software engineer who currently is located in Milan. I used to work with a full-stack environment, but now I'm discovering my true passion for front-end engineering.",
    image:
      "https://i.microlink.io/https%3A%2F%2Fcards.microlink.io%2F%3Fpreset%3Dsimple%26caption%3DFrontend%2BEngineering%2BEnthusiast%2B%25F0%259F%2590%25B3%250A%26headline%3DRenato%2BPozzi%26p%3DDwPgUABBwDIJYDsDWkoQBYCcCmAzAvAOToAuJADgM4BcA9LbgPYImUB0A5o4xwDbYBDcnHYBjRgFtaoypQBMAflwCJcXgE98AJUYAjRiUbUA7h1IABAIwAGawG4AzLbsAWZwHZbAMgAmI8rwCmrq8jKJIhKhQOLxElCTq-JTo2NgkkVC04FDAAGL8AB5REJQF%252BADe5cVQArxwHAgAkiTYEjQQhKLYLNiYhAA01RAAVgCu8XC46gDCzC0s1B1dPX2DaGi4hQAicDiiJHDMi52MvKMSCANDuhyLAI6jvepsN2vrEOKhmPePmM%252BfjEwxQAvsDUNk0MAACrYAokIalCpVd4bOa5FRqdTHHT6QxXFFQJgsADKcAAXthFu43iiiSQAOrYeqkKm2Iag4oQ9blB5PNgpAQ%252BOoIbBg9bAWgwuFc6BS%252BEoxGVIaEtEYjTYvQGRj4gl00kUxYAVhp7zpjOZJEWTms7LFaBlUB5v3%252BQgOzDtOUlsJIEIl%252BVh4AlICAA",
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
      <link rel="icon" type="image/png" href="/favicon.png" />

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

      {rest.author && <meta name="author" content={rest.author} />}

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
