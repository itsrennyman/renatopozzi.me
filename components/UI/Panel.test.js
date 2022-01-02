import { render, screen } from "@testing-library/react";
import { Panel } from "./Panel";

it("renders a panel", () => {
  render(<Panel>Hello</Panel>);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});
