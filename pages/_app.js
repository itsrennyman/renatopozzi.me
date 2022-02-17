//import '../styles/globals.css'
import { globalCss } from "../stitches.config";
import { Container } from "../components/UI/Container";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const globalCssFn = globalCss({
  "*": {
    margin: "0",
    padding: "0",
  },
  body: {
    backgroundColor: "$blue100",
    fontFamily: "'Jost', sans-serif",
  },
  a: {
    textDecoration: "none",
    color: "inherit",
  },
});

function MyApp({ Component, pageProps }) {
  globalCssFn();
  return (
    <Container>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Container>
  );
}

export default MyApp;
