import Link from "next/link";

const ProductBrand = ({ productBrandLists }) => {
  return (
    <div className="blueBg py-10">
      <h1 className="text-4xl font-extrabold text-white text-center">
        Browse products by Brands
      </h1>
      <div className="max-w-4xl p-8 mx-auto">
        <div className="grid grid-cols-2 gap-4 sm:gap-8 sm:grid-cols-3 md:grid-cols-6">
          {productBrandLists.map((brand) => (
            <div key={brand.vendor}>
              <Link href="#brand">
                <a className="text-white hover:text-indigo-300">
                  <div className="block object-fill w-30 h-30 rounded-full border-2 border-orange-500 p-1 bg-orange-600">
                    {/* <img
                    className="block object-fill w-30 h-30 rounded-full border-2 border-orange-500 p-1 bg-orange-600"
                    src="images/brand1.jpg"
                    alt="Thumbnail"
                  /> */}
                    {brand.vendor}
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductBrand;
