import { createGenericContext } from "../helpers/create-generic-context";
import { FC, useState } from "react";

type SearchContext = Readonly<{
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}>;

type SearchProviderProps = Readonly<{}>;

const [useSearch, SearchContextProvider] =
  createGenericContext<SearchContext>();

export const SearchProvider: FC<SearchProviderProps> = ({
  children,
}): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");

  const ctx: SearchContext = {
    searchQuery,
    setSearchQuery,
  };

  return <SearchContextProvider value={ctx}>{children}</SearchContextProvider>;
};

export { useSearch };
