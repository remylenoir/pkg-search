import { render, screen } from "framework";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("should render the component and find its data-testid attribute", () => {
    render(<Footer />);

    const dataTestId = screen.getByTestId("footer");

    expect(dataTestId).toBeInTheDocument();
  });
});
