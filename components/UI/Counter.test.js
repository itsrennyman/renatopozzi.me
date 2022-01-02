import { render, screen } from "@testing-library/react";
import { server } from "../../mocks/server";
import { Counter } from "./Counter";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it("renders a counter", async () => {
  render(
    <Counter
      url="http://localhost/api/counter?number=50"
      duration={0}
      value="counter"
    />
  );
  const element = await screen.findByText("50");
  expect(element).toBeInTheDocument();
});

it("renders a counter with a dash in case of error", async () => {
  render(
    <Counter
      url="http://localhost/api/counter?fail=1"
      duration={0}
      value="counter"
    />
  );
  const element = await screen.findByText("_");
  expect(element).toBeInTheDocument();
});
