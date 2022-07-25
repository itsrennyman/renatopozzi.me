import { SessionProvider } from "next-auth/react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../styles/fonts.css";
import "../styles/globals.css";
import "../styles/normalize.css";
import "../styles/styles.css";
import "../styles/typography.css";

const OfferAlert = () => {
  return (
    <a
      href="https://itsrennyman.gumroad.com/l/150-front-end-development-learning-resources/HAPPY-DEVELOPER"
      className="p-4 block text-center text-base bg-zinc-700 text-zinc-100"
      role="alert"
    >
      <span className="font-semibold">SPECIAL OFFER:</span> Obtain 150+
      Front-End Development Resources with a{" "}
      <span className="font-semibold">30% Discount</span>! CLICK HERE!
    </a>
  );
};

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
