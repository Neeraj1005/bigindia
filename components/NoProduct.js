import Link from "next/link";
import Head from "next/head";
const NoProduct = ({ errorMessage }) => {
  return (
    <>
      <Head>
        <title>{errorMessage.message}</title>
      </Head>
      <div className="mx-auto">
        <p className="text-2xl md:text-3xl font-light leading-normal">
          {errorMessage.message}
        </p>
        <p className="mb-8">
          But dont worry, you can find plenty of other things on our homepage.
        </p>
        <p className="space-x-2">
          <Link href="/">
            <a className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
              Homepage
            </a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NoProduct;
