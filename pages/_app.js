import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../styles/fonts.css";
import "../styles/globals.css";
import "../styles/normalize.css";
import "../styles/typography.css";

// const globalCssFn = globalCss({
//   "*": {
//     margin: "0",
//     padding: "0",
//     outline: "none",
//   },
//   body: {
//     backgroundColor: "#0e141b",
//     fontFamily: "'Lato', sans-serif",
//   },
//   a: {
//     textDecoration: "none",
//     color: "inherit",
//   },
// });

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
