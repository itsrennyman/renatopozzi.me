import { render, screen } from "@testing-library/react";
import { Link } from "../UI/Link";

it("renders an internal link by default", () => {
  render(<Link href="/foo">Hello</Link>);
  const element = screen.getByRole("link");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Hello");
  expect(element).toHaveAttribute("href", "/foo");
  expect(element).not.toHaveAttribute("target");
  expect(element).not.toHaveAttribute("rel");
});

it("renders an external link", () => {
  render(
    <Link href="https://www.google.com" isExternal>
      Hello
    </Link>
  );
  const element = screen.getByRole("link");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Hello");
  expect(element).toHaveAttribute("href", "https://www.google.com");
  expect(element).toHaveAttribute("target", "_blank");
  expect(element).toHaveAttribute("rel", "noreferrer");
});

it("renders a link with custom classname", () => {
  render(
    <Link href="/foo" className="dummy">
      Hello
    </Link>
  );
  const element = screen.getByRole("link");
  expect(element).toHaveClass("dummy");
});
