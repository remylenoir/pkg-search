import { render, screen } from "framework";
import { SearchInput } from "./SearchInput";

describe("SearchInput", () => {
  it("should render the component and find its data-testid attribute", () => {
    render(<SearchInput />);

    const dataTestId = screen.getByTestId("search-input");

    expect(dataTestId).toBeInTheDocument();
  });
});
