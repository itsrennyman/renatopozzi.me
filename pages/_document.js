import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    let pirsch = null;

    if (process.env.PIRSCH_DATA_CODE) {
      pirsch = (
        <script
          defer
          type="text/javascript"
          src="https://api.pirsch.io/pirsch.js"
          id="pirschjs"
          data-code={process.env.PIRSCH_DATA_CODE}
        />
      );
    }

    return (
      <Html lang="en">
        <Head>{pirsch}</Head>
        <body className="bg-zinc-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
