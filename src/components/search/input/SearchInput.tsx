import { useSearch, x } from "framework";
import React, { FC, ChangeEvent } from "react";

export const SearchInput: FC = () => {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <x.input
      py={1}
      px={1.5}
      borderRadius={3}
      borderWidth={1}
      borderColor="blue-300"
      type="search"
      placeholder="Search packages"
      data-testid="search-input"
      defaultValue={searchQuery}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        setSearchQuery(event.target.value)
      }
    />
  );
};
