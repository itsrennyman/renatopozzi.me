import { render, screen } from "@testing-library/react";
import { Navbar } from "../UI/Navbar";

it("renders a navbar", () => {
  render(<Navbar>Hello</Navbar>);
  const element = screen.getByRole("navigation");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Hello");
});

it("renders the navbar logo", () => {
  render(<Navbar.Logo>This is the logo</Navbar.Logo>);
  const element = screen.getByRole("link");
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute("href", "/");
});

it("renders the navbar logo with custom href", () => {
  render(<Navbar.Logo href="/foo">This is the logo</Navbar.Logo>);
  const element = screen.getByRole("link");
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute("href", "/foo");
});

it("renders the navbar items", () => {
  render(<Navbar.Items>These are the items</Navbar.Items>);
  const element = screen.getByRole("list");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("These are the items");
});

it("renders the navbar item", () => {
  render(<Navbar.Item href="/">This is the item</Navbar.Item>);

  const li = screen.getByRole("listitem");
  expect(li).toBeInTheDocument();

  const link = screen.getByRole("link");
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/");
  expect(link).toHaveTextContent("This is the item");
});

it("renders the navbar item with custom href", () => {
  render(<Navbar.Item href="/foo">This is the item</Navbar.Item>);
  const element = screen.getByRole("link");
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute("href", "/foo");
  expect(element).toHaveTextContent("This is the item");
});
