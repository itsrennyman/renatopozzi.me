import { render, screen } from "@testing-library/react";
import { NavBar } from "./NavBar";

it("renders a navbar", () => {
  render(<NavBar>Hello</NavBar>);
  const element = screen.getByRole("navigation");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Hello");
});

it("renders the navbar logo", () => {
  render(<NavBar.Logo>This is the logo</NavBar.Logo>);
  const element = screen.getByRole("link");
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute("href", "/");
});

it("renders the navbar logo with custom href", () => {
  render(<NavBar.Logo href="/foo">This is the logo</NavBar.Logo>);
  const element = screen.getByRole("link");
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute("href", "/foo");
});

it("renders the navbar items", () => {
  render(<NavBar.Items>These are the items</NavBar.Items>);
  const element = screen.getByRole("list");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("These are the items");
});

it("renders the navbar item", () => {
  render(<NavBar.Item href="/">This is the item</NavBar.Item>);

  const li = screen.getByRole("listitem");
  expect(li).toBeInTheDocument();

  const link = screen.getByRole("link");
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/");
  expect(link).toHaveTextContent("This is the item");
});

it("renders the navbar item with custom href", () => {
  render(<NavBar.Item href="/foo">This is the item</NavBar.Item>);
  const element = screen.getByRole("link");
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute("href", "/foo");
  expect(element).toHaveTextContent("This is the item");
});
