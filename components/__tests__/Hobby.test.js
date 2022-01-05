import { render, screen } from "@testing-library/react";
import { Hobby } from "../UI/Hobby";

it("renders an hobby", () => {
  const Icon = () => <svg data-testid="svg">Icon</svg>;
  render(
    <Hobby title="Hello" icon={Icon}>
      This is my hobby
    </Hobby>
  );

  expect(screen.getByTestId("svg")).toBeInTheDocument();

  const h3 = screen.getByRole("heading");
  expect(h3).toBeInTheDocument();
  expect(h3).toHaveTextContent("Hello");

  const p = screen.getByText("This is my hobby");
  expect(p).toBeInTheDocument();
});
