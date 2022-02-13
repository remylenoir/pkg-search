import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { SearchProvider } from "../../search";

const AllTheProviders: FC = ({ children }) => {
  return <SearchProvider>{children}</SearchProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
