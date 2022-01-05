import { SEOData } from "../SEOData";
import { Navbar } from "../UI/Navbar";
import { Footer } from "../UI/Footer";
import { Container } from "../UI/Container";

import { Twitter } from "../Icons/Twitter";
import { Github } from "../Icons/Github";
import { Instagram } from "../Icons/Instagram";

export function Main({ seo, ...props }) {
  return (
    <>
      <SEOData {...seo} />

      <Navbar>
        <Navbar.Logo href="/">Renato Pozzi</Navbar.Logo>
        <Navbar.Divider />
        <Navbar.Items>
          <Navbar.Item href="/">About Me</Navbar.Item>
          <Navbar.Item href="/articles">Articles</Navbar.Item>
          <Navbar.Item href="/dashboard">Dashboard</Navbar.Item>
        </Navbar.Items>
      </Navbar>

      <Container {...props} />

      <FooterLayout />
    </>
  );
}

function FooterLayout() {
  return (
    <Footer>
      <div className="text-gray-500 space-y-4 xl:col-span-1">
        <Footer.Logo>Renato Pozzi</Footer.Logo>
        <Footer.Bio>
          Software Developer, with a passion for the world and its extraordinary
          beauty.
        </Footer.Bio>
        <Footer.SocialIcons>
          <Footer.SocialIcon
            isExternal={true}
            href="https://twitter.com/imarenny"
            label="Twitter"
            icon={Twitter}
          />
          <Footer.SocialIcon
            isExternal={true}
            href="https://github.com/itsrennyman"
            label="Github"
            icon={Github}
          />
          <Footer.SocialIcon
            isExternal={true}
            href="https://www.instagram.com/renatopozzi_/"
            label="Instagram"
            icon={Instagram}
          />
        </Footer.SocialIcons>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
        <div className="md:grid md:grid-cols-2 md:gap-8 md:col-end-3">
          <Footer.Menu className="md:text-right">
            <Footer.MenuTitle>Resources</Footer.MenuTitle>
            <Footer.MenuItems>
              <Footer.MenuItem href="/articles">Articles</Footer.MenuItem>
              <Footer.MenuItem href="/">About Me</Footer.MenuItem>
              <Footer.MenuItem href="/dashboard">Dashboard</Footer.MenuItem>
            </Footer.MenuItems>
          </Footer.Menu>

          <Footer.Menu className="mt-12 md:mt-0 md:text-right">
            <Footer.MenuTitle>Community</Footer.MenuTitle>
            <Footer.MenuItems>
              <Footer.MenuItem
                isExternal={true}
                href="https://twitter.com/imarenny"
              >
                Twitter
              </Footer.MenuItem>
              <Footer.MenuItem
                isExternal={true}
                href="https://github.com/itsrennyman"
              >
                Github
              </Footer.MenuItem>
              <Footer.MenuItem
                isExternal={true}
                href="https://www.instagram.com/renatopozzi_/"
              >
                Instagram
              </Footer.MenuItem>
              <Footer.MenuItem
                isExternal={true}
                href="https://unsplash.com/@itsrennyman"
              >
                Unsplash
              </Footer.MenuItem>
            </Footer.MenuItems>
          </Footer.Menu>
        </div>
      </div>
    </Footer>
  );
}
