import Link from "next/link";
import ProductFilterSidebar from "../../components/ProductFilterSidebar";
import Head from "next/head";
import NavCat from "../../components/NavCategory";

const productBySubcategory = ({ bySubcategory, categoriesLists, categoryFilter }) => {
  return (
    <>
      <Head>
        <title>product by subcategory</title>
      </Head>
      {/* <NavCat categoryFilter={categoryFilter} /> */}
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
              <li>/</li>
              <li className="px-2"></li>
            </ol>
          </nav>

          <div className="container mb-12 mx-auto px-4">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              {bySubcategory.data.map((product) => (
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
                  <article className="overflow-hidden rounded-lg border shadow">
                    <Link href={`/product/${product.slug}`}>
                      <a>
                        <img
                          alt="Placeholder"
                          className="block h-auto w-full cardImg"
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
                          {/* <span
                            dangerouslySetInnerHTML={{
                              __html: product.currency.html_code,
                            }}
                          /> */}<span>$</span>
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
  const ids = listProduct.data.map((prod) => prod.subcategory_slug);
  const paths = ids.map((slug) => ({ params: { slug: slug.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://digitalcrm.com/crm/api/get/products/subcategory/${params.slug}`
  );

  const res1 = await fetch(
    `https://digitalcrm.com/crm/api/get/products/category/list/0/10`
  );
  const resCatFilter = await fetch(
    `https://digitalcrm.com/crm/api/get/products/category/list/0/6`
  );
  const categoryFilter = await resCatFilter.json();
  const categoriesLists = await res1.json();

  const bySubcategory = await res.json();

  if (!categoriesLists) {
    return {
      notFound: true,
    };
  }
  if (!categoryFilter) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      bySubcategory,
      categoriesLists,
      categoryFilter,
    },
  };
}
export default productBySubcategory;
