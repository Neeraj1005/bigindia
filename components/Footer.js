// import Link from "next/link";
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="footer-1 bg-gray-100 py-6 sm:py-6">
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="text-lg font-bold mb-6">Customer Services</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Privacy Policies
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="text-lg font-bold mb-6">About Us</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  About Bigindia.com
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Sitemap
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Sell
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Career
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-lg font-bold mb-6">Buy on Bigindia.com</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  All Categories
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Request for Quotation
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Become Member
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-lg font-bold mb-6">Our Products</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Job Board Software
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  CRM Software
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  CMS Software
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
            <h5 className="text-lg font-bold mb-6 sm:text-center xl:text-left">
              Subscribe newsletter
            </h5>
            <div className="flex sm:justify-center xl:justify-start">
              <p>
                Get the latest product trends and industry news sent to
                select2007@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-8 sm:grid-cols-3 md:grid-cols-2 border-t border-b py-4">
          <div className="flex">
            <span className="text-lg mr-4">Download: </span>
            <span className="mr-3">
              <a href="#">
                <Image
                    src="/images/ios.png"
                    alt="Picture of the ios"
                    width={108}
                    height={35}
                />
              </a>
            </span>
            <span>
              <a href="#">
                <Image 
                className="" 
                src="/images/android.png" 
                alt="Thumbnail"
                width={108}
                height={35} />
              </a>
            </span>
          </div>

          <div className="flex items-center justify-end">
            <div className="text-lg mr-4">Download:</div>
            <div className="flex sm:justify-center xl:justify-start">
              <a
                href=""
                className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
              >
                <span className="material-icons">facebook</span>
              </a>
              <a
                href=""
                className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
              >
                <span className="material-icons">facebook</span>
              </a>
              <a
                href=""
                className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600"
              >
                <span className="material-icons">facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="sm:-mx-4 mt-2 pt-2 sm:mt-2 sm:pt-2">
          <div className="sm:w-full px-4 text-center">
            © 2016-2021 Bigindia.com. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
