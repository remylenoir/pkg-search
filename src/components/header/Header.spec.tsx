import { render, screen } from "framework";
import { Header } from "./Header";

describe("Header", () => {
  it("should render the component and find its data-testid attribute", () => {
    render(<Header />);

    const dataTestId = screen.getByTestId("header");

    expect(dataTestId).toBeInTheDocument();
  });
});
