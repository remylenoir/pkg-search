import { x } from "framework";
import React, { FC } from "react";

export const Footer: FC = () => {
  return (
    <x.footer
      mt={2}
      mb={2}
      pt={2}
      borderTop={1}
      borderTopColor="blue-gray-200"
      textAlign="center"
      data-testid="footer"
    >
      <p>Footer</p>
    </x.footer>
  );
};
