import { render, screen } from "@testing-library/react";
import { Container } from "./Container";

it("renders a container", () => {
  render(<Container>Hello</Container>);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});
