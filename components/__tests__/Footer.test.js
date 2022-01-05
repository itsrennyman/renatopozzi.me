import { render, screen } from "@testing-library/react";
import { Footer } from "../UI/Footer";

it("renders a footer", () => {
  render(<Footer>Hello</Footer>);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});

it("renders the footer bio", () => {
  render(<Footer.Bio>This is the bio</Footer.Bio>);
  expect(screen.getByText("This is the bio")).toBeInTheDocument();
});

it("renders the footer logo", () => {
  render(<Footer.Logo>This is the logo</Footer.Logo>);
  const element = screen.getByText("This is the logo");
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute("href", "/");
});

it("renders the footer menu", () => {
  render(<Footer.Menu className="dummy">This is the menu</Footer.Menu>);
  const element = screen.getByText("This is the menu");
  expect(element).toBeInTheDocument();
  expect(element).toHaveClass("dummy");
});

it("renders the footer menu title", () => {
  render(<Footer.MenuTitle>This is the menu title</Footer.MenuTitle>);
  const element = screen.getByRole("heading");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("This is the menu title");
});

it("renders the footer menu items", () => {
  render(<Footer.MenuItems>These are the menu items</Footer.MenuItems>);
  const element = screen.getByRole("list");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("These are the menu items");
});

it("renders the footer menu item", () => {
  render(<Footer.MenuItem href="/foo">This is the menu item</Footer.MenuItem>);

  const li = screen.getByRole("listitem");
  expect(li).toBeInTheDocument();

  const element = screen.getByRole("link");
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute("href", "/foo");
  expect(element).toHaveTextContent("This is the menu item");
});

it("renders the footer social icons", () => {
  render(<Footer.SocialIcons>These are the social icons</Footer.SocialIcons>);
  const element = screen.getByText("These are the social icons");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("These are the social icons");
});

it("renders the footer social icon", () => {
  render(
    <Footer.SocialIcon
      icon={() => <span>This is the icon</span>}
      href="/foo"
      label="This is the label"
    />
  );
  const element = screen.getByRole("link");
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute("href", "/foo");
  expect(element).toHaveTextContent("This is the icon");
});
