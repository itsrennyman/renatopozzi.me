import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { globalCss } from "../stitches.config";
import "./styles.css";

const globalCssFn = globalCss({
  "*": {
    margin: "0",
    padding: "0",
    outline: "none",
  },
  body: {
    backgroundColor: "$blue100",
    fontFamily: "'Lato', sans-serif",
  },
  a: {
    textDecoration: "none",
    color: "inherit",
  },
});

function MyApp({ Component, pageProps }) {
  globalCssFn();

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
