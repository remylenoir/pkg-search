import { SearchInput } from "components/search/input/SearchInput";
import { x } from "framework";
import React, { FC } from "react";

export const Header: FC = () => {
  return (
    <x.header
      h={{ xs: "auto", md: 160 }}
      m="0 auto"
      p={2}
      backgroundImage="gradient-to-r"
      gradientFrom="teal-400"
      gradientTo="blue-500"
      data-testid="header"
    >
      <x.div
        maxWidth={1280}
        h="100%"
        m="0 auto"
        display="grid"
        gap={2}
        justifyContent="center"
        alignContent="center"
        textAlign="center"
      >
        <x.h1
          color="white"
          fontWeight="black"
          fontSize={{ xs: "2xl", sm: "3xl", md: "5xl" }}
        >
          PKG-SEARCH
        </x.h1>

        <SearchInput />
      </x.div>
    </x.header>
  );
};
