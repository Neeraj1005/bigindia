const HomeCategory = ({ categoriesLists }) => {
  return (
    <>
      <div className="container mt-5 mx-auto px-4 md:px-12 text-2xl font-bold text-gray-800">
        All Category
      </div>
      <div className="container mb-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {categoriesLists.map((category) => (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
              <article className="overflow-hidden rounded-lg">
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black"
                      href="#"
                    >
                      {category.category}
                    </a>
                    {category.tbl_product_subcategory.map((subcategory) => (
                      <p className="text-gray-600 text-sm leading-7">
                        <a className="hover:text-indigo-500" href="#">{subcategory.category}</a>
                      </p>
                    ))}
                  </h1>
                </header>
              </article>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeCategory;
