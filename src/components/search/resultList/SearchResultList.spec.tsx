import { render, screen } from "framework";
import { searchResultsMock } from "../mock/search-results.mock";
import { SearchResultList } from "./SearchResultList";

const pagination = {
  totalPages: 2,
  currentPage: 1,
  setCurrentPage: () => null,
};

describe("SearchResultList", () => {
  it("should render the component and find its data-testid attribute", () => {
    render(
      <SearchResultList results={searchResultsMock} pagination={pagination} />
    );

    const searchResultList = screen.queryByTestId(`search-result-list`);
    const isLoading = screen.queryByTestId("loading");
    const noResults = screen.queryByTestId("no-results");

    expect(noResults).not.toBeInTheDocument();
    expect(isLoading).not.toBeInTheDocument();
    expect(searchResultList).toBeInTheDocument();
  });

  it("should render the loading state of the search result list", () => {
    render(<SearchResultList results={undefined} pagination={pagination} />);

    const searchResultList = screen.queryByTestId(`search-result-list`);
    const isLoading = screen.queryByTestId("loading");
    const noResults = screen.queryByTestId("no-results");

    expect(noResults).not.toBeInTheDocument();
    expect(isLoading).toBeInTheDocument();
    expect(searchResultList).not.toBeInTheDocument();
  });

  it("should render the no results state of the search result list", () => {
    render(<SearchResultList results={[]} pagination={pagination} />);

    const searchResultList = screen.queryByTestId(`search-result-list`);
    const isLoading = screen.queryByTestId("loading");
    const noResults = screen.queryByTestId("no-results");

    expect(noResults).toBeInTheDocument();
    expect(isLoading).not.toBeInTheDocument();
    expect(searchResultList).not.toBeInTheDocument();
  });
});
