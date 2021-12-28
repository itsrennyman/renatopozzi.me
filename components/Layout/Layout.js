import { NavBar } from "./NavBar";
import { Container } from "./Container";
import { Footer } from "./Footer";
import { Twitter } from "../Icons/Twitter";
import { Github } from "../Icons/Github";
import { Instagram } from "../Icons/Instagram";

export function Layout(props) {
  return (
    <>
      <NavBar>
        <div className="flex flex-1 space-x-8 items-center">
          <NavBar.Logo href="/">Renato Pozzi</NavBar.Logo>
          <NavBar.Divider />
          <NavBar.Items>
            <NavBar.Item href="/articles">Articles</NavBar.Item>
            <NavBar.Item href="/about">About</NavBar.Item>
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
          <Footer.Icon
            href="/"
            label="Twitter"
            icon={<Twitter className="w-6 h-6" />}
          />
          <Footer.Icon
            href="/"
            label="Github"
            icon={<Github className="w-6 h-6" />}
          />
          <Footer.Icon
            href="/"
            label="Instagram"
            icon={<Instagram className="w-6 h-6" />}
          />
        </Footer.Icons>
      </Footer>
    </>
  );
}