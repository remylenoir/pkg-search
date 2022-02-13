import { render, screen } from "framework";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  it("should render the component and find its data-testid attribute", () => {
    render(<Sidebar />);

    const dataTestId = screen.getByTestId("sidebar");

    expect(dataTestId).toBeInTheDocument();
  });
});
