import { SessionProvider } from "next-auth/react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../styles/fonts.css";
import "../styles/globals.css";
import "../styles/normalize.css";
import "../styles/styles.css";
import "../styles/typography.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}

export default MyApp;
