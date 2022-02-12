import { Arr } from "core/array";
import { useDebounce, x } from "framework";
import React, { FC, useEffect, useState } from "react";

type SearchResult = Partial<{
  dependent_repos_count: number;
  dependents_count: number;
  deprecation_reason: string;
  description: string;
  forks: number;
  homepage: string;
  keywords: string;
  language: string;
  latest_download_url: string;
  latest_release_number: string;
  latest_release_published_at: string;
  latest_stable_release_number: string;
  latest_stable_release_published_at: string;
  license_normalized: boolean;
  licenses: string;
  name: string;
  normalized_licenses: string[];
  package_manager_url: string;
  platform: string;
  rank: number;
  repository_license: string;
  repository_url: string;
  stars: number;
  status: string;
  versions: {
    number: string;
    published_at: string;
    spdx_expression: string;
    original_license: string;
    researched_at: string;
    repository_sources: string[];
  }[];
}>;

const SEARCH_PAGE_SIZE = 5;
const SEARCH_SORT_BY = "stars";

export const App: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const debouncedQuery = useDebounce<string>(searchQuery, 500);

  useEffect(() => {
    (async () => {
      await fetch(
        `https://libraries.io/api/bower-search?q=${debouncedQuery}&page=${currentPage}&sort=${SEARCH_SORT_BY}`
      )
        .then((response) => response.json() as unknown as SearchResult[])
        .then((data) => {
          if (data.length) {
            setTotalPages(Math.ceil(data.length / SEARCH_PAGE_SIZE));
          }

          setIsLoading(false);
          setSearchResults(data);
        });
    })();
  }, [debouncedQuery, currentPage]);

  useEffect(() => {
    setIsLoading(true);
  }, [searchQuery]);

  const sortResults = (sort: "asc" | "desc") => {
    setSearchResults(
      Arr.sortBy((result: SearchResult) => result.stars, sort)(searchResults)
    );
  };

  return (
    <>
      {/* HEADER */}
      <x.header h={160} m="0 auto" backgroundColor="blue-gray-200">
        <x.div
          maxWidth={1280}
          h="100%"
          m="0 auto"
          display="grid"
          gap={2}
          justifyContent="center"
          alignContent="center"
        >
          <x.h1 textAlign="center">PKG-SEARCH</x.h1>

          {/* SEARCH */}
          <form onSubmit={(event) => event.preventDefault()}>
            <input
              type="search"
              placeholder="Search packages"
              defaultValue={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </form>
        </x.div>
      </x.header>

      <x.section
        w="100%"
        h="100%"
        maxWidth={1280}
        m="0 auto"
        mt={3}
        px={{ xs: 3 }}
      >
        <x.div
          id="content"
          display="grid"
          gap={{ xs: 4, sm: 8 }}
          gridTemplateRows={{ xs: "auto auto", sm: 1 }}
          gridTemplateColumns={{ sm: "200px auto" }}
        >
          {/* SIDEBAR */}
          <x.aside h="100px" backgroundColor="blue-gray-200">
            {/* SORTING */}
            Sidebar
          </x.aside>

          {/* MAIN */}

          <x.main
            p={3}
            borderColor="blue-gray-300"
            borderWidth={1}
            display="grid"
            gap={2}
          >
            {!isLoading && searchResults.length > 0 && (
              <x.div>
                Sort by stars:
                <button onClick={() => sortResults("asc")}>Asc</button> |{" "}
                <button onClick={() => sortResults("desc")}>Desc</button>
              </x.div>
            )}

            {/* RESULTS */}
            {!isLoading && searchResults.length > 0 ? (
              Arr.paginate(searchResults, SEARCH_PAGE_SIZE, currentPage).map(
                (result: SearchResult, i) => {
                  return (
                    <x.div
                      key={result.name + "-" + i.toString()}
                      backgroundColor="blue-gray-300"
                    >
                      {result.name} - {result.stars}
                    </x.div>
                  );
                }
              )
            ) : (
              <x.div>
                {isLoading ? (
                  <p>Loading search results...</p>
                ) : (
                  <p>No results, please try different query</p>
                )}
              </x.div>
            )}

            {/* PAGINATION */}
            {!isLoading && searchResults.length > 0 && totalPages > 1 && (
              <x.div
                display="grid"
                gap={2}
                gridAutoFlow="column"
                gridFlow="columns"
              >
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage <= 1}
                >
                  Previous page
                </button>

                <button
                  onClick={() => {
                    setCurrentPage(currentPage + 1);
                  }}
                  disabled={currentPage >= totalPages}
                >
                  Next page
                </button>
              </x.div>
            )}
          </x.main>
        </x.div>

        {/* FOOTER */}
        <x.footer mt={3} pt={3} borderTop={1} borderTopColor="blue-gray-200">
          <p>Footer</p>
        </x.footer>
      </x.section>
    </>
  );
};

export default App;
