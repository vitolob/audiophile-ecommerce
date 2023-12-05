import TextInput from "@/components/atoms/TextInput";
import { render, screen } from "@testing-library/react";

describe("<TextInput />", () => {
  it("applies error styling when errorState is true", () => {
    const { rerender } = render(
      <TextInput fieldLabel="Test Label" errorState={true} />,
    );
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("focus:outline-[#CD2C2C]");

    // Rerender with errorState false and check for normal styling
    rerender(<TextInput fieldLabel="Test Label" errorState={false} />);
    expect(input).toHaveClass("focus:outline-orange");
  });

  it("displays the correct label", () => {
    const label = "Test Label";
    render(<TextInput fieldLabel={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it("passes additional props to input element", () => {
    const placeholderText = "Enter text";
    render(<TextInput fieldLabel="Test Label" placeholder={placeholderText} />);
    expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });
});
