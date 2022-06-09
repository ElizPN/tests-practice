import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Test App", () => {
  test("renders learn react link", () => {
    render(<App />);
    const helloWorld = screen.getByText(/hello world/i);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/input value/i);

    expect(helloWorld).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });
  test("renders learn react link", () => {
    render(<App />);
    // const helloWorld = screen.queryByText(/kjkjkk/i);
    // expect(helloWorld).toBeNull;
    const helloWorld = screen.findByText(/data/i);
    expect(helloWorld).toBeNull;
  });
});
