import Link from "next/link";
import ProductFilterSidebar from "../../components/ProductFilterSidebar";
import Head from "next/head";

const productByCategory = ({ byCategory, categoriesLists }) => {
  return (
    <>
     <Head>
        <title>product by category</title>
      </Head>
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
                <a href="/product" className="no-underline text-indigo">
                  Product
                </a>
              </li>
              <li>/</li>
              <li className="px-2"></li>
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
  const res = await fetch(`https://digitalcrm.com/crm/api/get/products/all`);
  const listProduct = await res.json();
  const ids = listProduct.map((prod) => prod.tbl_productcategory.slug);
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

  const res1 = await fetch(
    `https://digitalcrm.com/crm/api/get/products/category/list`
  );
  
  const byCategory = await res.json();

  const categoriesLists = await res1.json();

  if (!categoriesLists) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      byCategory,
      categoriesLists,
    },
  };
}
export default productByCategory;
