import Link from 'next/link'

const ProductFilterSidebar = ({ categoriesLists }) => {
  return (
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
        {categoriesLists.map((cat) => (
          <Link href={`/category/${cat.slug}`}>
            <a className="border-t block px-5 py-1 hover:bg-gray-100 text-gray-600">
              {cat.category}
            </a>
          </Link>
        ))}
      </div>

      {/* <div className="mb-5">
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
      </div> */}
    </section>
  );
};

// export async function getStaticProps() {
//   const res = await fetch(
//     `https://digitalcrm.com/crm/api/get/products/category/list`
//   );

//   const categoriesLists = await res.json();

//   if (!categoriesLists) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       categoriesLists,
//     },
//   };
// }

export default ProductFilterSidebar;
