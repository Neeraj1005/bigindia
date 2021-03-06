import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
const NotFound = () => {
  const router = useRouter();
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    const timer =
      counter > 0 &&
      setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    if (counter === 0) {
      router.push('/');
    }
  });

  return (
    
    <>
    <Layout>
      <div className="h-screen w-screen bg-white flex items-center">
        <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
          <div className="max-w-md">
            <div className="text-5xl font-dark font-bold">404</div>
            <p className="text-2xl md:text-3xl font-light leading-normal">
              Sorry we couldn't find this page.{" "}
            </p>
            <p className="mb-8">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <p className="space-x-2">
              <span>Going back to the</span>
              <Link href="/">
                <a className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
                  Homepage
                </a>
              </Link>
              <span>in {counter} seconds...</span>
            </p>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default NotFound;
