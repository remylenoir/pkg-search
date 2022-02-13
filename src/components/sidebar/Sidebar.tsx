import { x } from "framework";
import React, { FC } from "react";

export const Sidebar: FC = () => {
  return (
    <x.aside
      p={1}
      borderRadius={3}
      h={{ xs: "auto", sm: "320px" }}
      textAlign={{ xs: "center", sm: "left" }}
      backgroundColor="blue-gray-100"
      data-testid="sidebar"
    >
      Sidebar
    </x.aside>
  );
};
