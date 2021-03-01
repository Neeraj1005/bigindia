import Link from "next/link";
import Head from "next/head";
import React from "react";

const Product = ({ product }) => {
  const item = product.product;
  const [showModal, setShowModal] = React.useState(false);
  const currencyCode = product.user.currency.html_code;
  const slidePics = product.slidePics;
  return (
    <>
      <Head>
        <title>{item.slug}</title>
        <meta property="og:title" content={item.name} />
      </Head>
      <div
        key={item.pro_id}
        className="bg-white flex-grow pb-4 px-4"
        id="main-content"
      >
        <nav className="container">
          <ol className="list-reset py-4 pl-4 rounded flex text-gray-400">
            <li className="px-2">
              <Link href="/" className="no-underline text-indigo">
                <a>Home</a>
              </Link>
            </li>
            <li>/</li>
            <li className="px-2">
              <Link href="/product" className="no-underline text-indigo">
                <a>Products</a>
              </Link>
            </li>
            <li>/</li>
            <li className="px-2">
              <Link
                href={`/category/${
                  item.tbl_productcategory ? item.tbl_productcategory.slug : ""
                }`}
                className="no-underline text-indigo"
              >
                {/* <a>{categoryName}</a> */}
                <a>
                  {item.tbl_productcategory
                    ? item.tbl_productcategory.category
                    : ""}
                </a>
              </Link>
            </li>
            <li>/</li>
            {/* <li className="px-2">{subCategoryName}</li> */}
            <li className="px-2">
              {item.tbl_product_subcategory
                ? item.tbl_product_subcategory.category
                : ""}
            </li>
          </ol>
        </nav>

        <div className="mb-8 p-2 w-full flex flex-wrap">
          <div className="w-full lg:w-1/3">
            {slidePics.map((img) => (
              <img src={img} alt="" width="400" />
            ))}
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 pr-16">
            <p className="text-2xl font-extrabold">{item.name}</p>
            <a href="#" className="text-xl text-blue-500 my-3 block">
              {item.vendor ? item.vendor : ""}
            </a>
            <p className="text-red-600 font-bold text-xl my-2">
              <span dangerouslySetInnerHTML={{ __html: currencyCode }} />
              {item.price}
            </p>
            <p className="text-gray-600">
              <span className="mr-5">
                Size: {item.size ? item.size + item.tbl_units.sortname : "null"}
              </span>{" "}
              <span>Units: {item.tbl_units.name}</span>
            </p>
            <div>
              <p className="text-xl mt-5 mb-2">Product Details</p>
              <p
                className="text-gray-500"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              <Link href={`/category/${item.tbl_productcategory.slug}`}>
                <a>
                  <p className="mt-4">
                    <span className="border border-gray-400 rounded-full py-1 px-3">
                      {item.tbl_productcategory.category}
                    </span>
                  </p>
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6">
            <button
              className="block w-full focus:outline-none border border-transparent py-4 px-4 rounded-lg shadow-sm text-center text-white bg-blue-500 hover:bg-blue-600 font-medium"
              onClick={() => setShowModal(true)}
            >
              Contact Supplier
            </button>
          </div>
          {showModal ? (
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                    <h3 className="text-3xl font-semibold block">
                      Contact this supplier
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span class="material-icons text-gray-400">
                        highlight_off
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <div class="flex -mx-2">
                      <div class="mb-5 w-1/3 px-2">
                        <label
                          for="firstname"
                          class="font-bold mb-1 text-gray-700 block"
                        >
                          Quantity
                        </label>
                        <input
                          type="text"
                          class="border border-gray-300 w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                          placeholder="10"
                        />
                      </div>
                      <div class="mb-5 w-1/3 px-2">
                        <label
                          for="firstname"
                          class="font-bold mb-1 text-gray-700 block"
                        >
                          Price
                        </label>
                        <input
                          type="text"
                          class="border bg-gray-300 border-gray-300 w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                          placeholder="1999"
                          readonly
                        />
                      </div>
                      <div class="mb-5 w-1/3 px-2">
                        <label
                          for="firstname"
                          class="font-bold mb-1 text-gray-700 block"
                        >
                          Total amount
                        </label>
                        <input
                          type="text"
                          class="border bg-gray-300 border-gray-300 w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                          placeholder="1999"
                          readonly
                        />
                      </div>
                    </div>

                    <div class="flex -mx-2">
                      <div class="mb-5 w-1/3 px-2">
                        <label
                          for="firstname"
                          class="font-bold mb-1 text-gray-700 block"
                        >
                          Contact name
                        </label>
                        <input
                          type="text"
                          class="border border-gray-300 w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                          placeholder=""
                        />
                      </div>
                      <div class="mb-5 w-1/3 px-2">
                        <label
                          for="firstname"
                          class="font-bold mb-1 text-gray-700 block"
                        >
                          Email ID
                        </label>
                        <input
                          type="text"
                          class="border border-gray-300 w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                          placeholder=""
                        />
                      </div>

                      <div class="mb-5 w-1/3 px-2">
                        <label
                          for="firstname"
                          class="font-bold mb-1 text-gray-700 block"
                        >
                          Mobile
                        </label>
                        <input
                          type="text"
                          class="border border-gray-300 w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div class="flex -mx-2">
                      <div class="mb-5 w-full px-2">
                        <label
                          for="firstname"
                          class="font-bold mb-1 text-gray-700 block"
                        >
                          Delivery address
                        </label>
                        <input
                          type="text"
                          class="border border-gray-300 w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div class="flex -mx-2">
                      <div class="mb-5 w-1/2 px-2">
                        <label
                          for="firstname"
                          class="font-bold mb-1 text-gray-700 block"
                        >
                          Country
                        </label>
                        <select
                          class="border border-gray-300 w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                          name="country"
                          id="country"
                        >
                          <option value="0">Select Country</option>
                          <option value="1">Afghanistan - AF</option>
                          <option value="2">Albania - AL</option>
                          <option value="3">Algeria - DZ</option>
                          <option value="4">American Samoa - AS</option>
                        </select>
                      </div>
                      <div class="mb-5 w-1/2 px-2">
                        <label
                          for="firstname"
                          class="font-bold mb-1 text-gray-700 block"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          class="border border-gray-300 w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div class="flex -mx-2">
                      <div class="mb-5 w-full px-2">
                        <label
                          for="firstname"
                          class="font-bold mb-1 text-gray-700 block"
                        >
                          Message
                        </label>
                        <textarea
                          type="text"
                          class="border border-gray-300 w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                          placeholder=""
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="text-white bg-blue-500 active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`https://digitalcrm.com/crm/api/get/products/list`);
  const listProduct = await res.json();
  const ids = listProduct.data.map((prod) => prod.slug);
  const paths = ids.map((id) => ({ params: { slug: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://digitalcrm.com/crm/api/get/product/details/${params.slug}`
  );
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

export default Product;
