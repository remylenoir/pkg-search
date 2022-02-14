import { GitHub, Package, useSearch, x } from "framework";
import React, { FC } from "react";

type SearchResultProps = Package;

export const SearchResult: FC<SearchResultProps> = ({
  name,
  stars,
  repository_url,
  description,
}) => {
  //
  const { searchQuery } = useSearch();

  const owner = GitHub.getOwner(repository_url);
  const isSearchMatch = searchQuery === name;

  return (
    <x.article
      borderRadius={3}
      borderWidth={1}
      borderColor="blue-gray-400"
      transition
      transitionDuration={200}
      transform={{ _: "scale(1)", hover: "scale(1.02)" }}
      data-testid={`search-result-${name}`}
    >
      <x.a href={repository_url} target="blank" rel="noreferrer" color="black">
        <x.div
          p={2}
          display="grid"
          gap={2}
          gridAutoFlow={{ xs: "row", sm: "column" }}
          justifyContent="space-between"
        >
          <x.div display="grid" gap={2}>
            <x.div display="grid" gap={0.5}>
              <x.div
                display="grid"
                gap={1}
                gridTemplateColumns={
                  isSearchMatch ? "max-content max-content" : 1
                }
              >
                <x.h2 fontWeight="bold" color="blue-600">
                  {name}
                </x.h2>

                {isSearchMatch && (
                  <x.div
                    w="max-content"
                    p={0.5}
                    borderRadius={3}
                    backgroundColor="indigo-100"
                    fontFamily="mono"
                    fontSize="xs"
                  >
                    exact match
                  </x.div>
                )}
              </x.div>

              {owner && <x.span fontSize="sm">from {owner}</x.span>}
            </x.div>

            <x.p fontSize="sm">{description}</x.p>
          </x.div>

          <x.div>Stars: {Intl.NumberFormat("en-EN").format(stars)}</x.div>
        </x.div>
      </x.a>
    </x.article>
  );
};
