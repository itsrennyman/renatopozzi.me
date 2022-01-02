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
        <meta
          name="description"
          content="This is a fake description, TODO: description"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="follow, index" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon.png"
          hrefLang="en-us"
        />
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
        <div className="text-gray-500 space-y-4 xl:col-span-1">
          <Footer.Logo>Renato Pozzi</Footer.Logo>
          <Footer.Bio>
            Software Developer, with a passion for the world and its
            extraordinary beauty.
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
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <Footer.Menu>
              <Footer.MenuTitle>Resources</Footer.MenuTitle>
              <Footer.MenuItems>
                <Footer.MenuItem href="/articles">Articles</Footer.MenuItem>
                <Footer.MenuItem href="/about">About Me</Footer.MenuItem>
                <Footer.MenuItem href="/dashboard">Dashboard</Footer.MenuItem>
              </Footer.MenuItems>
            </Footer.Menu>

            <Footer.Menu className="mt-12 md:mt-0">
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

          <div className="md:grid md:grid-cols-1 md:gap-8">
            <Footer.Menu className="mt-12 md:mt-0">
              <Footer.MenuTitle>Newsletter</Footer.MenuTitle>
              <Footer.MenuItems>
                <p className="text-base max-w-md text-gray-500 dark:text-gray-400">
                  Let&apos;s keep in touch! Sign up for our newsletter and be
                  the first to know about new articles, events, and more!
                </p>
                <input
                  className="bg-gray-100 dark:bg-gray-800 w-full rounded-lg px-4 py-4 outline-none ring-2 ring-gray-500 dark:ring-gray-400 ring-offset-white dark:ring-offset-gray-900 focus:ring-offset-4 transition duration-200"
                  placeholder="Name"
                />
                <input
                  className="bg-gray-100 dark:bg-gray-800 w-full rounded-lg px-4 py-4 outline-none ring-2 ring-gray-500 dark:ring-gray-400 ring-offset-white dark:ring-offset-gray-900 focus:ring-offset-4 transition duration-200"
                  placeholder="Email"
                />
              </Footer.MenuItems>
            </Footer.Menu>
          </div>
        </div>
      </Footer>
    </>
  );
}
