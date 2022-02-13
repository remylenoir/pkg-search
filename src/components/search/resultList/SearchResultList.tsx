import { Arr, Str } from "core";
import { SEARCH_PAGE_SIZE, x } from "framework";
import React, { FC } from "react";
import { SearchResult } from "../result/SearchResult";
import { Package } from "framework";
import { Pagination } from "components";

type SearchResultListProps = {
  results: Package[] | undefined;
  pagination: {
    totalPages: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
  };
};

export const SearchResultList: FC<SearchResultListProps> = ({
  results,
  pagination,
}) => {
  const { totalPages, currentPage, setCurrentPage } = pagination;
  const isLoading = results === undefined;

  return (
    <>
      {!isLoading && results && results.length > 0 ? (
        <x.div display="grid" gap={2} data-testid="search-result-list">
          <x.p fontWeight="bold">
            {results.length} {Str.pluralise(results.length, "result", "s")}{" "}
            found
          </x.p>

          {Arr.paginate(results, SEARCH_PAGE_SIZE, currentPage).map(
            (result, i) => (
              <SearchResult key={result.repository_url + i} {...result} />
            )
          )}

          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </x.div>
      ) : (
        <x.div textAlign={{ xs: "center", sm: "left" }}>
          {isLoading ? (
            <p data-testid="loading">Loading search results...</p>
          ) : (
            <p data-testid="no-results">
              No results, please try different query
            </p>
          )}
        </x.div>
      )}
    </>
  );
};
