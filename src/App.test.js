import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
  test("renders learn react link", async () => {
    render(<App />);
    // const helloWorld = screen.queryByText(/kjkjkk/i);
    // expect(helloWorld).toBeNull;
    screen.debug();
    const helloWorld = await screen.findByText(/data/i);
    expect(helloWorld).toBeInTheDocument();
    expect(helloWorld).toHaveStyle({ color: "red" });
    screen.debug();

    // const toggle = screen.getByTestId("toggle-elem");
    // expect(toggle).toBe(true);
  });

  test("Click event", () => {
    render(<App />);
    const btn = screen.getByTestId("toggle-btn");
    // Get element directly in expect, otherwice you will get initial value null
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
  });

  test("input", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId("value-elem")).toContainHTML("");
    // Artificial event
    fireEvent.input(input, {
      target: { value: "123123" },
    });
    // Same to real user's behaviour
    userEvent.type(input, "123123");
    expect(screen.queryByTestId("value-elem")).toContainHTML("123123");
  });
});
