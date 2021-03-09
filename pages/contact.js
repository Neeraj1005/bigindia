import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
export default function Contact() {
    return (
        <>
            <Layout>
            <Head>
                <title>Contact us</title>
            </Head>
            <div className="text-gray-700 body-font">
  <div class="container mx-auto flex px-5 pb-20 pt-7 md:flex-row flex-col">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Contact Us
        
      </h1>
      <p class="mb-8 leading-relaxed">We provide software products and services that cover the entire spectrum of recruitment sector. To request additional information on Job Board software or applicant tracking software, please contact us or fill in the form below.</p>
      <div class="flex items-center w-full ">
      <div class="w-full">
      <span class="block w-full text-xl font-bold mb-4">Tell us about your requirements.</span>      
        <form class="mb-4" action="/" method="post">
          <div class="mb-4 md:w-full">
            <input class="border border-gray-300 shadow w-full  rounded p-3 outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="Your Name" />
          </div>
          <div class="mb-4 md:w-full">
            <input class="w-full border-gray-300 border shadow rounded p-3 outline-none focus:shadow-outline" type="text" name="password" id="password" placeholder="Your Email" />
          </div>
		      <div class="mb-5 md:w-full">
            <input class="w-full border-gray-300 shadow border rounded p-3 outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="Subject " />
          </div>
          <div class="mb-5 md:w-full">
            <textarea class="w-full border-gray-300 shadow border rounded p-3 outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="Your Message " />
          </div>
          <button class="w-full sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 getStarted uppercase text-sm shadow hover:shadow-lg">Contact us</button>
        </form>
    </div>
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