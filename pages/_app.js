import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../styles/fonts.css";
import "../styles/globals.css";
import "../styles/normalize.css";
import "../styles/typography.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
