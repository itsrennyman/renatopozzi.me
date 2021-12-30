import Head from "next/head";
import { NavBar } from "./NavBar";
import { Container } from "./Container";
import { Footer } from "./Footer";
import { Twitter } from "../Icons/Twitter";
import { Github } from "../Icons/Github";
import { Instagram } from "../Icons/Instagram";

export function Layout({ title, ...props }) {
  return (
    <>
      <Head>
        <title>{title ?? "Renato Pozzi | Software Developer"}</title>
        <meta name="description"></meta>
      </Head>
      <NavBar>
        <div className="flex flex-1 space-x-8 items-center">
          <NavBar.Logo href="/">Renato Pozzi</NavBar.Logo>
          <NavBar.Divider />
          <NavBar.Items>
            <NavBar.Item href="/">About</NavBar.Item>
            <NavBar.Item href="/articles">Articles</NavBar.Item>
            <NavBar.Item href="/dashboard">Dashboard</NavBar.Item>
          </NavBar.Items>
        </div>
        <NavBar.ToggleTheme />
      </NavBar>

      <Container>{props.children}</Container>

      <Footer>
        <Footer.Logo>Renato Pozzi</Footer.Logo>
        <Footer.Sentence>
          © 2021 Renato Pozzi - All Rights Reserved.
        </Footer.Sentence>
        <Footer.Icons>
          <Footer.Icon href="/" label="Twitter" icon={Twitter} />
          <Footer.Icon href="/" label="Github" icon={Github} />
          <Footer.Icon href="/" label="Instagram" icon={Instagram} />
        </Footer.Icons>
      </Footer>
    </>
  );
}
