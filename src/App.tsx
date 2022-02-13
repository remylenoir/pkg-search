import { Footer, Header, SearchResultList, Sidebar } from "components";
import {
  Package,
  SEARCH_MAX_PER_PAGE,
  SEARCH_PAGE_SIZE,
  SEARCH_SORT_BY,
  useDebounce,
  useSearch,
  x,
} from "framework";
import React, { FC, useEffect, useState } from "react";

export const App: FC = () => {
  // Search states
  const { searchQuery } = useSearch();
  const [searchResults, setSearchResults] = useState<Package[] | undefined>(
    undefined
  );

  // Debouncing the search input to avoid too many API calls
  const debouncedSearchQuery = useDebounce<string>(searchQuery, 500);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Getting the data after query debounce
  useEffect(() => {
    (async () => {
      await fetch(
        `https://libraries.io/api/bower-search?q=${debouncedSearchQuery}&per_page=${SEARCH_MAX_PER_PAGE}&page=${currentPage}&sort=${SEARCH_SORT_BY}`
      )
        .then((response) => response.json() as unknown as Package[])
        .then((data) => {
          if (data.length) {
            setTotalPages(Math.ceil(data.length / SEARCH_PAGE_SIZE));
          }

          setSearchResults(data);
        });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchQuery]);

  // Resetting the states when query changes
  useEffect(() => {
    setSearchResults(undefined);
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <>
      <Header />

      <x.section
        w="100%"
        h="100%"
        maxWidth={980}
        m="0 auto"
        mt={3}
        px={{ xs: 3 }}
      >
        <x.div
          display="grid"
          gap={{ xs: 3 }}
          gridTemplateRows={{ xs: "auto auto", sm: 1 }}
          gridTemplateColumns={{ sm: "200px auto" }}
        >
          <Sidebar />

          <x.main display="grid" gap={2} pb={{ xs: 10, sm: 0 }}>
            <SearchResultList
              results={searchResults}
              pagination={{ totalPages, currentPage, setCurrentPage }}
            />

            <Footer />
          </x.main>
        </x.div>
      </x.section>
    </>
  );
};

export default App;
