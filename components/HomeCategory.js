import Link from "next/link";
import ProductLocation from "../components/ProductLocation";

const HomeCategory = ({ categoriesLists }) => {
  return (
    <>
      {categoriesLists.map((category, index, arr) => (
        <>
          {/* if index is 4 then show rfq form */}
          {index === 3 ? (
            <div className="bg-blue-500 py-10 mb-12">
              <div className="container mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                  <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
                    <article className="overflow-hidden text-white">
                      <header className="items-center justify-between leading-tight">
                        <h1 className="text-4xl font-semibold">
                          One Request, Multiple Quotes
                        </h1>
                        <div className="text-2xl mt-3">
                          Get free quotes from multiple sellers
                        </div>
                      </header>
                      <footer className="leading-none p-2 md:p-4">
                        <div className="flex gap-5 py-3">
                          <p>
                            <span className="material-icons text-4xl">
                              stars
                            </span>
                          </p>
                          <p className="font-bold text-xl">
                            Tell us what You Need
                          </p>
                        </div>
                        <div className="flex gap-5 py-3">
                          <p>
                            <span className="material-icons text-4xl">
                              verified_user
                            </span>
                          </p>
                          <p className="font-bold text-xl">
                            Receive free quotes from sellers
                          </p>
                        </div>
                        <div className="flex gap-5 py-3">
                          <p>
                            <span className="material-icons text-4xl">
                              speaker_notes
                            </span>
                          </p>
                          <p className="font-bold text-xl">Final the Deal</p>
                        </div>
                      </footer>
                    </article>
                  </div>

                  <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
                    <div className="flex items-center w-full text-white">
                      <div className="w-full p-8">
                        <span className="block w-full text-xl uppercase font-bold mb-4">
                          Tell us your Requirement
                        </span>
                        <form className="mb-4" action="/" method="post">
                          <div className="mb-4 md:w-full">
                            <input
                              className="w-full border border-white rounded p-2 outline-none focus:shadow-outline"
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Enter product / Service name"
                            />
                          </div>
                          <div className="mb-6 md:w-full">
                            <input
                              className="w-full border border-white rounded p-2 outline-none focus:shadow-outline"
                              type="text"
                              name="password"
                              id="password"
                              placeholder="Enter your mobile"
                            />
                            <div className="text-xs mt-1">
                              Seller will contact you on this number
                            </div>
                          </div>
                          <div className="mb-4 md:w-full">
                            <input
                              className="w-full border border-white rounded p-2 outline-none focus:shadow-outline"
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Your name"
                            />
                          </div>
                          <button className="w-full sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg">
                            Request for Quotation
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {/* if index is 7 */}

          {index === 6 ? <ProductLocation /> : null}

          <div
            key={category.procat_id}
            className="container my-3 mx-auto px-4 md:px-12 text-2xl font-bold text-gray-800"
          >
            <Link
              className="no-underline hover:underline text-black"
              href={`category/${category.slug}`}
            >
              <a>{category.category}</a>
            </Link>
          </div>
          <div className="container mb-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              {/* subcategory start */}
              {category.tbl_product_subcategory.map((subcategory) => (
                <div className="px-5 w-full md:w-1/2 lg:w-1/6">
                  <Link href={`subcategory/${subcategory.slug}`}>
                    <a className="hover:text-indigo-500">
                      {subcategory.category}
                    </a>
                  </Link>
                </div>
              ))}
              {/* subcategory end */}
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default HomeCategory;
