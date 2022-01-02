import { render, screen } from "@testing-library/react";
import { Emoji } from "./Emoji";

it("renders an emoji", () => {
  render(<Emoji symbol="😀" label="smile" />);
  const element = screen.getByLabelText("smile");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("😀");
  expect(element).toHaveAttribute("role", "img");
  expect(element).toHaveAttribute("aria-label", "smile");
  expect(element).toHaveAttribute("aria-hidden", "false");
});
