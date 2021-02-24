const productLists = () => {
  const name = "Nick";

  return (
    <>
      <div class="flex">
        <section
          class="bg-white border-r flex-shrink-0 w-2/12"
          id="left-side-panel"
        >
          <div class="mb-5">
            <p class="flex px-2 pt-2 text-gray-500">
              <span class="material-icons text-lg">filter_alt</span> Filters
            </p>
          </div>

          <div class="mb-5">
            <p class="block px-5 py-1 font-bold text-xs">CATEGORY</p>
            <a
              class="border-t block px-5 py-1 hover:bg-gray-100 text-gray-600"
              href="#"
            >
              Software
            </a>
            <a
              class="border-t block px-5 py-1 hover:bg-gray-100 text-gray-600"
              href="#"
            >
              Electronics
            </a>
            <a
              class="border-t block px-5 py-1 hover:bg-gray-100 text-gray-600"
              href="#"
            >
              Electrical
            </a>
            <a
              class="border-t block px-5 py-1 hover:bg-gray-100 text-gray-600"
              href="#"
            >
              Mechanical
            </a>
            <a
              class="border-t block px-5 py-1 hover:bg-gray-100 text-gray-600"
              href="#"
            >
              Other
            </a>
            <a
              class="border-t border-b block px-5 py-1 hover:bg-gray-100 text-gray-600"
              href="#"
            >
              Fashion
            </a>
          </div>

          <div class="mb-5">
            <p class="block px-5 py-1 font-bold text-xs">LOCATION</p>
            <a
              class="border-t block px-5 py-1 hover:bg-gray-100 text-gray-600"
              href="#"
            >
              New Delhi
            </a>
            <a
              class="border-t block px-5 py-1 hover:bg-gray-100 text-gray-600"
              href="#"
            >
              Chandigarh
            </a>
            <a
              class="border-t block px-5 py-1 hover:bg-gray-100 text-gray-600"
              href="#"
            >
              Mumbai
            </a>
            <a
              class="border-t block px-5 py-1 hover:bg-gray-100 text-gray-600"
              href="#"
            >
              Dehradun
            </a>
            <a
              class="border-t block px-5 py-1 hover:bg-gray-100 text-gray-600"
              href="#"
            >
              Haridwar
            </a>
            <a
              class="border-t border-b block px-5 py-1 hover:bg-gray-100 text-gray-600"
              href="#"
            >
              Rishikesh
            </a>
          </div>
        </section>

        <div class="bg-white flex-grow pb-4 px-4" id="main-content">
          <nav class="container">
            <ol class="list-reset py-4 pl-4 rounded flex text-gray-400">
              <li class="px-2">
                <a href="#" class="no-underline text-indigo">
                  Home
                </a>
              </li>
              <li>/</li>
              <li class="px-2">
                <a href="#" class="no-underline text-indigo">
                  Library
                </a>
              </li>
              <li>/</li>
              <li class="px-2">Data</li>
            </ol>
          </nav>

          <div class="container mb-12 mx-auto px-4">
            <div class="flex flex-wrap -mx-1 lg:-mx-4">
              <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
                <article class="overflow-hidden rounded-lg border shadow">
                  <a href="#">
                    <img
                      alt="Placeholder"
                      class="block h-auto w-full"
                      src="images/featured1.jpg"
                    />
                  </a>
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                      <p class="text-sm text-gray-500">Samsung</p>
                      <a
                        class="no-underline hover:underline text-black"
                        href="#"
                      >
                        Hyundai Luxary Car
                      </a>
                      <p class="text-gray-400">$100 / Pieces</p>
                    </h1>
                  </header>
                </article>
              </div>

              <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
                <article class="overflow-hidden rounded-lg border shadow">
                  <a href="#">
                    <img
                      alt="Placeholder"
                      class="block h-auto w-full"
                      src="images/featured2.jpg"
                    />
                  </a>
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                      <p class="text-sm text-gray-500">Samsung</p>
                      <a
                        class="no-underline hover:underline text-black"
                        href="#"
                      >
                        Hyundai Luxary Car
                      </a>
                      <p class="text-gray-400">$100 / Pieces</p>
                    </h1>
                  </header>
                </article>
              </div>

              <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
                <article class="overflow-hidden rounded-lg border shadow">
                  <a href="#">
                    <img
                      alt="Placeholder"
                      class="block h-auto w-full"
                      src="images/featured3.jpg"
                    />
                  </a>
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                      <p class="text-sm text-gray-500">Samsung</p>
                      <a
                        class="no-underline hover:underline text-black"
                        href="#"
                      >
                        Hyundai Luxary Car
                      </a>
                      <p class="text-gray-400">$100 / Pieces</p>
                    </h1>
                  </header>
                </article>
              </div>

              <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
                <article class="overflow-hidden rounded-lg border shadow">
                  <a href="#">
                    <img
                      alt="Placeholder"
                      class="block h-auto w-full"
                      src="images/featured4.jpg"
                    />
                  </a>
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                      <p class="text-sm text-gray-500">Samsung</p>
                      <a
                        class="no-underline hover:underline text-black"
                        href="#"
                      >
                        Hyundai Luxary Car
                      </a>
                      <p class="text-gray-400">$100 / Pieces</p>
                    </h1>
                  </header>
                </article>
              </div>

              <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
                <article class="overflow-hidden rounded-lg border shadow">
                  <a href="#">
                    <img
                      alt="Placeholder"
                      class="block h-auto w-full"
                      src="images/featured5.jpg"
                    />
                  </a>
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                      <p class="text-sm text-gray-500">Samsung</p>
                      <a
                        class="no-underline hover:underline text-black"
                        href="#"
                      >
                        Hyundai Luxary Car
                      </a>
                      <p class="text-gray-400">$100 / Pieces</p>
                    </h1>
                  </header>
                </article>
              </div>

              <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
                <article class="overflow-hidden rounded-lg border shadow">
                  <a href="#">
                    <img
                      alt="Placeholder"
                      class="block h-auto w-full"
                      src="images/featured1.jpg"
                    />
                  </a>
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                      <p class="text-sm text-gray-500">Samsung</p>
                      <a
                        class="no-underline hover:underline text-black"
                        href="#"
                      >
                        Hyundai Luxary Car
                      </a>
                      <p class="text-gray-400">$100 / Pieces</p>
                    </h1>
                  </header>
                </article>
              </div>

              <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
                <article class="overflow-hidden rounded-lg border shadow">
                  <a href="#">
                    <img
                      alt="Placeholder"
                      class="block h-auto w-full"
                      src="images/featured2.jpg"
                    />
                  </a>
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                      <p class="text-sm text-gray-500">Samsung</p>
                      <a
                        class="no-underline hover:underline text-black"
                        href="#"
                      >
                        Hyundai Luxary Car
                      </a>
                      <p class="text-gray-400">$100 / Pieces</p>
                    </h1>
                  </header>
                </article>
              </div>

              <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
                <article class="overflow-hidden rounded-lg border shadow">
                  <a href="#">
                    <img
                      alt="Placeholder"
                      class="block h-auto w-full"
                      src="images/featured3.jpg"
                    />
                  </a>
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                      <p class="text-sm text-gray-500">Samsung</p>
                      <a
                        class="no-underline hover:underline text-black"
                        href="#"
                      >
                        Hyundai Luxary Car
                      </a>
                      <p class="text-gray-400">$100 / Pieces</p>
                    </h1>
                  </header>
                </article>
              </div>

              <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
                <article class="overflow-hidden rounded-lg border shadow">
                  <a href="#">
                    <img
                      alt="Placeholder"
                      class="block h-auto w-full"
                      src="images/featured4.jpg"
                    />
                  </a>
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                      <p class="text-sm text-gray-500">Samsung</p>
                      <a
                        class="no-underline hover:underline text-black"
                        href="#"
                      >
                        Hyundai Luxary Car
                      </a>
                      <p class="text-gray-400">$100 / Pieces</p>
                    </h1>
                  </header>
                </article>
              </div>

              <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
                <article class="overflow-hidden rounded-lg border shadow">
                  <a href="#">
                    <img
                      alt="Placeholder"
                      class="block h-auto w-full"
                      src="images/featured5.jpg"
                    />
                  </a>
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                      <p class="text-sm text-gray-500">Samsung</p>
                      <a
                        class="no-underline hover:underline text-black"
                        href="#"
                      >
                        Hyundai Luxary Car
                      </a>
                      <p class="text-gray-400">$100 / Pieces</p>
                    </h1>
                  </header>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default productLists;
