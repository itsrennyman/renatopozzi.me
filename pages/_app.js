//import '../styles/globals.css'
import { globalCss } from "../stitches.config";

const globalCssFn = globalCss({
  "*": {
    margin: "0",
    padding: "0",
  },
  body: {
    backgroundColor: "$blue100",
    fontFamily: "'Jost', sans-serif",
  },
});

function MyApp({ Component, pageProps }) {
  globalCssFn();
  return <Component {...pageProps} />;
}

export default MyApp;
