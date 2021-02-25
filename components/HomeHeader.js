const HomeHeader = () => {
  return (
    <div className="bg-gray-200 pt-10 mb-12">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
            <article className="overflow-hidden">
              <header className="items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-5xl font-extrabold text-gray-700 mb-5">
                  We connect Buyers & Sellers
                </h1>
                <div className="text-2xl text-gray-600 mb-10">
                  Bigindia.com is India's fastest online B2B marketplace,
                  connecting buyers with suppliers.
                </div>
                <a
                  className="text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-pink-500 active:bg-pink-600 uppercase text-sm shadow hover:shadow-lg"
                  href="#"
                >
                  get started
                </a>
              </header>
              <footer className="flex text-gray-700 leading-none p-2 md:p-4 text-center gap-x-16">
                <div className="py-3">
                  <p>
                    <span className="material-icons text-3xl">stars</span>
                  </p>
                  <p className="text-lg">Trusted Platform</p>
                </div>
                <div className="py-3">
                  <p>
                    <span className="material-icons text-3xl">
                      verified_user
                    </span>
                  </p>
                  <p className="text-lg">Safe & Secure</p>
                </div>
                <div className="py-3">
                  <p>
                    <span className="material-icons text-3xl">
                      speaker_notes
                    </span>
                  </p>
                  <p className="text-lg">Quick Assistance</p>
                </div>
              </footer>
            </article>
          </div>

          <div className="px-1 w-full md:w-1/2 lg:my-0 lg:px-4 lg:w-1/2">
            <div className="flex justify-end w-full">
              <img src="images/additional.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader