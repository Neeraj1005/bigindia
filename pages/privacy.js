import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
export default function Privacy() {
    return (
        <>
            <Layout>
            <Head>
                <title>Bigindia.com Privacy Policy</title>
            </Head>
            <div className="text-gray-700 body-font">
  <div class="container mx-auto flex px-40 pb-20 pt-7 md:flex-row flex-col">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Privacy Policy
        
      </h1>
      <p class="mb-8 leading-relaxed">Protecting the privacy of your data and personal information is our top priority. We ensure the security, confidentiality, and privacy of all data being transferred to us via website, email, ftp or other means.</p>

      <p class="mb-8 leading-relaxed">All data and information provided to us will be confidential and strictly the property of the client. We have implemented appropriate technical and managerial procedures to insure that the data is secure.</p>

      <p class="mb-8 leading-relaxed">Strict Non-Disclosure and Non-Compete Agreements (NDA) bind all employees. It is our goal to protect and secure the quality and integrity of your information. If you have any questions about this privacy statement, the policies of the company, or your dealings, you can contact: info@ejobsitesoftware.com</p>

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