import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
export default function Career() {
    return (
        <>
            <Layout>
            <Head>
                <title>We are Hiring</title>
            </Head>
            <div className="text-gray-700 body-font">
  <div class="container mx-auto flex px-40 pb-20 pt-7 md:flex-row flex-col">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">We are Hiring
        
      </h1>
      <p class="mb-8 leading-relaxed">Ejobsitesoftware.com is a leading end-to-end solutions provider for the recruitment industry The company has developed an advanced online software for setting up a specialized job board We are based in Delhi, India and have over 300 clients across the world Find out information about our company values, careers and personal development View Job Openings and build a successful career with us Apply to Ejobsitesoftware.com Jobs Now !</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white getStarted border-0 py-2 px-6 focus:outline-none hover:shadow-lg rounded text-lg">Submit Resume</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <img className="object-cover object-center rounded" alt="hero" src="/images/additional.png" />
    </div>
  </div>
</div>
    </Layout>
            </>
    )
}