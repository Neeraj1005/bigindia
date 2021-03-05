const HomeHeader = () => {
  return (
    <div className="bg-white mb-5 border-b">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
            <article className="overflow-hidden">
              <header className="items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-4xl font-extrabold text-gray-700 mb-2">
                  We connect Buyers & Sellers
                </h1>
                <div className="text-xl text-gray-600 mb-8">
                  Bigindia.com is India's fastest online B2B marketplace,
                  connecting buyers with suppliers.
                </div>
                <a
                  className="text-white font-bold px-6 py-3 rounded-full outline-none focus:outline-none mr-3 mb-1 hover:bg-orange-300 getStarted uppercase text-sm shadow hover:shadow-lg"
                  href="#"
                >
                  Become a seller
                </a>
                <a
                  className="font-bold px-6 py-3 border-2 rounded-full outline-none focus:outline-none mb-1 postProduct uppercase text-sm shadow hover:shadow-lg"
                  href="#"
                >
                  Post your product
                </a>
              </header>
              <footer className="flex text-gray-700 leading-none p-2 md:p-4 text-center gap-x-16">
                <div className="pt-3">
                  <p>
                    <span className="material-icons text-3xl">stars</span>
                  </p>
                  <p className="text-lg">Trusted Platform</p>
                </div>
                <div className="pt-3">
                  <p>
                    <span className="material-icons text-3xl">
                      verified_user
                    </span>
                  </p>
                  <p className="text-lg">Safe & Secure</p>
                </div>
                <div className="pt-3">
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
            <div className="flex justify-end">
              <img className="mt-3" src="images/additional.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader