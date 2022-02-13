import { render, screen } from "framework";
import { searchResultsMock } from "../mock/search-results.mock";
import { SearchResult } from "./SearchResult";

describe("SearchResult", () => {
  it("should render the component and find its data-testid attribute", () => {
    render(<SearchResult {...searchResultsMock[0]} />);

    const dataTestId = screen.getByTestId(
      `search-result-${searchResultsMock[0].name}`
    );

    expect(dataTestId).toBeInTheDocument();
  });
});
