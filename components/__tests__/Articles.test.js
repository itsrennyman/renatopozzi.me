import { render, screen } from "@testing-library/react";
import { Articles } from "../Articles";

it("renders the articles", () => {
  render(<Articles>Hello</Articles>);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});

it("renders the article", () => {
  render(
    <Articles.Article
      id="XX01"
      title="This is a title"
      thumbnail="https://via.placeholder.com/150"
      createdAt="Today"
    />
  );

  const element = screen.getByRole("link");
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute("href", "/articles/XX01");

  const h3 = screen.getByRole("heading");
  expect(h3).toBeInTheDocument();
  expect(h3).toHaveTextContent("This is a title");

  const createdAt = screen.getByText("Today");
  expect(createdAt).toBeInTheDocument();

  const img = screen.getByRole("img");
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute("alt", "This is a title");
});
