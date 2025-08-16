import { render, screen } from "@testing-library/react";
import Sample from "@/components/sample/Sample";

describe("Hello component", () => {
  it("renders with given name", () => {
    render(<Sample name="Mochiken" />);
    expect(screen.getByText("Hello, Mochiken")).toBeInTheDocument();
  });
});