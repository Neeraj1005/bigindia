import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer-1 bg-blue-100 py-6 sm:py-6">
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="text-lg text-blue-900 font-semibold mb-4">
              Customer Services
            </h5>
            <ul className="list-none footer-links">
              <li className="mb-1">
                <a
                  href="#"
                  className="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500"
                >
                  Contact Us
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500"
                >
                  Privacy Policies
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500"
                >
                  Terms & conditions
                </a>
              </li>

              <li className="mb-1">
                <a
                  href="#"
                  className="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="text-lg text-blue-900 font-semibold mb-4">
              Services
            </h5>
            <ul className="list-none footer-links">
              <li className="mb-1">
                <a
                  href="#"
                  className="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500"
                >
                  Buyer
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500"
                >
                  Seller
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500"
                >
                  Become a seller
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500"
                >
                  Post Your Requirements
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-lg text-blue-900 font-semibold mb-4">
              About Us
            </h5>
            <ul className="list-none footer-links">
              <li className="mb-1">
                <Link href="/category">
                  <a className="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500">
                    Pricing
                  </a>
                </Link>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500"
                >
                  About Us
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500"
                >
                  Career
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-lg text-blue-900 font-semibold mb-4">
              Bigindia.com
            </h5>
            <ul className="list-none footer-links">
              <li className="mb-1">
                <Link href="/category">
                  <a className="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500">
                    All categories
                  </a>
                </Link>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500"
                >
                  CRM Software
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500"
                >
                  Advertise
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500"
                >
                  Site map
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
            <h5 className="text-lg text-blue-900 font-semibold mb-4 sm:text-center xl:text-left">
              Subscribe newsletter
            </h5>
            <div className="flex sm:justify-center xl:justify-start text-gray-600">
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
                  height={35}
                />
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
        <div className="sm:-mx-4 mt-2 py-4 sm:mt-2 sm:pt-2 bg-white">
          <div className="sm:w-full px-4 text-center">
            © 2016-2021 Bigindia.com. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
