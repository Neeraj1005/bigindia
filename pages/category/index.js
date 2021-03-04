import Link from "next/link";

const allCategory = ({ allCategory }) => {
  return (
    <>
      {allCategory.map((category) => (
        <>
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

export async function getStaticProps() {
  const res = await fetch(
    `https://digitalcrm.com/crm/api/get/products/category/list/0/1000`
  );
  const allCategory = await res.json();

  if (!allCategory) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      allCategory,
    },
  };
}

export default allCategory;
