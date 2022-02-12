import { x } from "framework";
import React from "react";

function App() {
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
          <x.input type="search" placeholder="Search packages" />
        </x.div>
      </x.header>

      <x.section w="100%" h="100%" maxWidth={1280} m="0 auto" mt={3}>
        <x.div
          id="content"
          display="grid"
          px={{ xs: 3 }}
          gap={{ xs: 4, sm: 8 }}
          gridTemplateRows={{ xs: "auto auto ", sm: 1 }}
          gridTemplateColumns={{ sm: "200px auto" }}
        >
          {/* SIDEBAR */}
          <x.aside h="100px" backgroundColor="blue-gray-200">
            {/* SORTING */}
            Sidebar
          </x.aside>

          {/* MAIN */}
          <x.div display="grid" gap={3}>
            <x.main
              h="100px"
              p={3}
              borderColor="blue-gray-300"
              borderWidth={1}
              display="grid"
              gap={2}
            >
              {/* RESULTS */}
              <x.div backgroundColor="blue-gray-300">Foo</x.div>

              <x.div backgroundColor="blue-gray-300">Bar</x.div>
              {/* PAGINATION */}
            </x.main>

            {/* FOOTER */}
            <x.footer borderTop={1} borderTopColor="blue-gray-200" pt={3}>
              <p>
                Est irure in qui qui tempor enim aliquip excepteur. Qui Lorem
                consequat dolore Lorem ullamco tempor fugiat. Veniam est aliqua
                aliqua ea excepteur id veniam duis est cillum tempor ad
                adipisicing. Aliquip elit proident excepteur ea. Reprehenderit
                ipsum excepteur mollit exercitation cupidatat velit. Lorem
                cillum irure officia consequat veniam excepteur est ea quis.
              </p>
            </x.footer>
          </x.div>
        </x.div>
      </x.section>
    </>
  );
}

export default App;
