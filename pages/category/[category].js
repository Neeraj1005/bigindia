import Link from "next/link";

const productByCategory = ({ byCategory }) => {
  const name = "Nick";

  return (
    <>
      <div className="flex">
        <section
          className="bg-white border-r flex-shrink-0 w-2/12"
          id="left-side-panel"
        >
          <div className="mb-5">
            <p className="flex px-2 pt-2 text-gray-500">
              <span className="material-icons text-lg">filter_alt</span> Filters
            </p>
          </div>

          <div className="mb-5">
            <p className="block px-5 py-1 font-bold text-xs">CATEGORY</p>
            <a
              className="border-t block px-5 py-1 hover:bg-gray-100 text-gray-600"
              href="#"
            >
              Software
            </a>
            <a
              className="border-t block px-5 py-1 hover:bg-gray-100 text-gray-600"
              href="#"
            >
              Electronics
            </a>
            <a
              className="border-t block px-5 py-1 hover:bg-gray-100 text-gray-600"
              href="#"
            >
              Electrical
            </a>
            <a
              className="border-t block px-5 py-1 hover:bg-gray-100 text-gray-600"
              href="#"
            >
              Mechanical
            </a>
            <a
              className="border-t block px-5 py-1 hover:bg-gray-100 text-gray-600"
              href="#"
            >
              Other
            </a>
            <a
              className="border-t border-b block px-5 py-1 hover:bg-gray-100 text-gray-600"
              href="#"
            >
              Fashion
            </a>
          </div>

          <div className="mb-5">
            <p className="block px-5 py-1 font-bold text-xs">LOCATION</p>
            <a
              className="border-t block px-5 py-1 hover:bg-gray-100 text-gray-600"
              href="#"
            >
              New Delhi
            </a>
            <a
              className="border-t block px-5 py-1 hover:bg-gray-100 text-gray-600"
              href="#"
            >
              Chandigarh
            </a>
            <a
              className="border-t block px-5 py-1 hover:bg-gray-100 text-gray-600"
              href="#"
            >
              Mumbai
            </a>
            <a
              className="border-t block px-5 py-1 hover:bg-gray-100 text-gray-600"
              href="#"
            >
              Dehradun
            </a>
            <a
              className="border-t block px-5 py-1 hover:bg-gray-100 text-gray-600"
              href="#"
            >
              Haridwar
            </a>
            <a
              className="border-t border-b block px-5 py-1 hover:bg-gray-100 text-gray-600"
              href="#"
            >
              Rishikesh
            </a>
          </div>
        </section>

        <div className="bg-white flex-grow pb-4 px-4" id="main-content">
          <nav className="container">
            <ol className="list-reset py-4 pl-4 rounded flex text-gray-400">
              <li className="px-2">
                <Link href="/" className="no-underline text-indigo">
                  <a>Home</a>
                </Link>
              </li>
              {/* <li>/</li>
              <li className="px-2">
                <a href="#" className="no-underline text-indigo">
                  Library
                </a>
              </li>
              <li>/</li>
              <li className="px-2">Data</li> */}
            </ol>
          </nav>

          <div className="container mb-12 mx-auto px-4">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              {byCategory.map((product) => (
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
                  <article className="overflow-hidden rounded-lg border shadow">
                    <Link href={`/product/${product.pro_id}`}>
                      <a>
                        <img
                          alt="Placeholder"
                          className="block h-auto w-full"
                          src={product.picture ? product.picture : ""}
                        />
                      </a>
                    </Link>
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg">
                        <p className="text-sm text-gray-500">
                          {product.vendor ? product.vendor : ""}
                        </p>
                        <a
                          className="no-underline hover:underline text-black"
                          href="#"
                        >
                          {product.name}
                        </a>
                        <p className="text-gray-400">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: product.currency.html_code,
                            }}
                          />
                          {product.price}
                        </p>
                      </h1>
                    </header>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
    const res = await fetch(`https://digitalcrm.com/crm/api/get/products/list`);
    const listProduct = await res.json();
    const ids = listProduct.map((prod) => prod.slug);
    const paths = ids.map((slug) => ({ params: { category: slug.toString() } }));
  
    return {
      paths,
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }) {
    const res = await fetch(
      `https://digitalcrm.com/crm/api/search/products/category/${params.category}`
    );
    const byCategory = await res.json();
  
    return {
      props: {
        byCategory,
      },
    };
  }
export default productByCategory;
