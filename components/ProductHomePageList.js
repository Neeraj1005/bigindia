import Image from "next/image";
import Link from "next/link";

const ProductHomeList = ({ products }) => {
  return (
    <>
      <div className="container mb-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {products.map((product) => (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
              <article className="overflow-hidden rounded-lg border shadow">
                <Link href={`/product/${product.pro_id}`}>
                  <a>
                    <Image
                      alt={product.slug}
                      className="block h-auto w-full img-fluid"
                      src={product.picture ? product.picture : "/#"}
                      width="150"
                      height="150"
                    />
                    {/* <img
                    alt={product.slug}
                    className="block h-auto w-full"
                    src={product.picture ? product.picture : "/#"}
                    // src="https://digitalcrm.com/crm/uploads/products/1611043175.jpg"
                  /> */}
                  </a>
                </Link>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <Link
                      className="no-underline hover:underline text-black"
                      href={`/product/${product.pro_id}`}
                    >
                      <a>
                        {product.name}
                      </a>
                    </Link>
                    <p className="text-gray-400">${product.price}</p>
                  </h1>
                </header>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a
                    className="flex items-center no-underline hover:underline text-black"
                    href="#"
                  >
                    <p className="text-sm text-gray-400">
                      {(product.vendor) ? 'By: ' + product.vendor : ''}
                    </p>
                  </a>
                  <a
                    className="no-underline text-grey-darker hover:text-red-dark"
                    href="#"
                  >
                    {/* <span className="material-icons">favorite_border</span> */}
                  </a>
                </footer>
              </article>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// export async function getStaticProps(context) {
//     const res = await fetch(`https://digitalcrm.com/crm/api/get/products/list`)
//     const products = await res.json()

//     if (!products) {
//       return {
//         notFound: true,
//       }
//     }

//     return {
//       props: {
//         products
//       },
//     }
//   }

export default ProductHomeList;
