import { render, screen } from "@testing-library/react";
import Home from "../../src/app/page";

describe("Home", () => {
  it("renders a button", () => {
    render(<Home />);

    const buttonText = screen.getAllByRole("button", {
      name: /See Product/i,
    })[0];

    expect(buttonText).toBeInTheDocument();
  });
});
