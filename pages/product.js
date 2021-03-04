import Link from "next/link";
import ProductFilterSidebar from "../components/ProductFilterSidebar";
import Head from "next/head";
import NavCat from "../components/NavCategory";

const productLists = ({ allProducts, categoriesLists }) => {
  const myProducts = allProducts.data;
  return (
    <>
      <Head>
        <title>All Products</title>
      </Head>
      <NavCat categoriesLists={categoriesLists} />
      <div className="flex">
        <ProductFilterSidebar categoriesLists={categoriesLists} />

        <div className="bg-white flex-grow pb-4 px-4" id="main-content">
          <nav className="container">
            <ol className="list-reset py-4 pl-4 rounded flex text-gray-400">
              <li className="px-2">
                <Link href="/" className="no-underline text-indigo">
                  <a>Home</a>
                </Link>
              </li>
              <li>/</li>
              <li className="px-2">
                <Link href="/product">
                  <a className="no-underline text-indigo">Product</a>
                </Link>
              </li>
            </ol>
          </nav>

          <div className="container mb-12 mx-auto px-4">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              {myProducts.map((product) => (
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
                  <article className="overflow-hidden rounded-lg border shadow">
                    <Link href={`/product/${product.slug}`}>
                      <a>
                        <img
                          alt="Placeholder"
                          className={`block h-auto w-full cardImg`}
                          src={product.picture ? product.picture : ""}
                        />
                      </a>
                    </Link>
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg">
                        <p className="text-sm text-gray-500">
                          {product.vendor ? product.vendor : ""}
                        </p>
                        <Link href={`/product/${product.slug}`}>
                          <a className="no-underline hover:underline text-black">
                            {product.name}
                          </a>
                        </Link>
                        <p className="text-gray-400">
                          <span>$</span>
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

export async function getStaticProps() {
  const res = await fetch(`https://digitalcrm.com/crm/api/get/products/list`);

  const res1 = await fetch(
    `https://digitalcrm.com/crm/api/get/products/category/list/0/10`
  );

  const allProducts = await res.json();
  const categoriesLists = await res1.json();

  if (!allProducts) {
    return {
      notFound: true,
    };
  }

  if (!categoriesLists) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      allProducts,
      categoriesLists,
    },
  };
}
export default productLists;
