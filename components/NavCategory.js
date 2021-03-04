import React from "react";
import Link from "next/link";

const NavCat = ({ categoriesLists }) => {
  const [dropdownMenu, setdropdownMenu] = React.useState(false);
  return (
    <div className="flex items-center flex-wrap mx-auto shadow-lg">
      <div className="flex">
        <ul className="flex">
          <span className="flex material-icons text-lg items-center text-gray-400">
            filter_alt
          </span>
          <li className="hoverable hover:bg-white hover:text-gray-600">
            <button
              className="items-center block px-4 lg:p-3 text-xs xs:text-base font-bold hover:bg-white hover:text-gray-500 text-gray-500 uppercase"
              onClick={() => setdropdownMenu(!dropdownMenu)}
            >
              Categories
            </button>
            {dropdownMenu ? (
              <>
                <div className="mega-menu mb-16 sm:mb-0 border-t shadow bg-white">
                  <div className="container w-full flex flex-wrap justify-between mx-2">
                    {categoriesLists.map((catLists, index, arr) => (
                      <ul
                        className={`px-10 max-w-screen sm:w-1/2 lg:w-1/6  border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3`
                        }
                      >
                      {/* <ul
                        className={
                          index === arr.length - 1
                            ? "px-10 w-full sm:w-1/2 lg:w-1/6 border-gray-600 pb-6 pt-6 lg:pt-3"
                            : "px-10 max-w-screen sm:w-1/2 lg:w-1/6  border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3"
                        }
                      > */}
                        <div className="flex items-center">
                          <h3 className="font-semibold text-gray-900 mb-2">
                            <Link href={`category/${catLists.slug}`}>
                              <a>{catLists.category}</a>
                            </Link>
                          </h3>
                        </div>

                        {catLists.tbl_product_subcategory.map((subCat) => (
                          <p className="text-gray-800 text-sm leading-7">
                            <Link href={`subcategory/${subCat.slug}`}>
                              <a className="hover:text-blue-500" href="#">
                                {subCat.category}
                              </a>
                            </Link>
                          </p>
                        ))}

                        <div className="flex items-center py-3">
                          <a
                            href="#"
                            className="font-semibold text-sm text-gray-900 hover:text-blue-500"
                          >
                            All categories...
                          </a>
                        </div>
                      </ul>
                    ))}
                  </div>
                </div>
              </>
            ) : null}
          </li>
        </ul>
      </div>

      <div className="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col">
        {categoriesLists.map((catList) => (
          <span
            key={catList.procat_id}
            className="lg:inline-flex lg:w-auto lg:pb-3 w-auto px-4 py-2"
          >
            <Link href={`/category/${catList.slug}`}>
              <a className="text-gray-800 hover:text-gray-600">
                {catList.category}
              </a>
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default NavCat;
