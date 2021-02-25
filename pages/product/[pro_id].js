import Link from "next/link";
import { useRouter } from "next/router";

const Product = ({ product }) => {
  const item = product.product;
  // const categoryName = item.tbl_productcategory.category;
  // const subCategoryName = item.tbl_product_subcategory.category;
  const currencyCode = product.user.currency.html_code;
  const slidePics = product.slidePics;
  return (
      <div key={item.pro_id} className="bg-white flex-grow pb-4 px-4" id="main-content">
        <nav className="container">
          <ol className="list-reset py-4 pl-4 rounded flex text-gray-400">
            <li className="px-2">
              <Link href="/" className="no-underline text-indigo">
                <a>Home</a>
              </Link>
            </li>
            <li>/</li>
            <li className="px-2">
              <Link 
                href="/product" 
                className="no-underline text-indigo">
                <a>Products</a>
              </Link>
            </li>
            <li>/</li>
            <li className="px-2">
              <Link href="#" className="no-underline text-indigo">
                {/* <a>{categoryName}</a> */}
                <a>Catd</a>
              </Link>
            </li>
            <li>/</li>
            <li className="px-2">subcat</li>
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
              <p className="mt-4">
                <span className="border border-gray-400 rounded-full py-1 px-3">
                  {item.tbl_productcategory.category}
                </span>
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/6">
            <a
              href="#"
              className="block bg-red-700 text-white text-xl py-4 px-4 text-center rounded hover:bg-red-600"
            >
              Contact Supplier
            </a>
          </div>
        </div>
      </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`https://digitalcrm.com/crm/api/get/products/list`);
  const listProduct = await res.json();
  const ids = listProduct.map((prod) => prod.pro_id);
  const paths = ids.map((id) => ({ params: { pro_id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://digitalcrm.com/crm/api/get/product/details/${params.pro_id}`
  );
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

export default Product;
