import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
export default function Pricing() {
    return (
        <>
            <Layout>
            <Head>
                <title>Pricing Bigindia</title>
            </Head>
            <div className="text-gray-700 body-font">
            <div class="container mx-auto px-40 py-10">
  
  <header class="text-center mb-16">
    <h1 class="text-5xl mb-4">Our Plans</h1>
    <p class="leading-normal text-grey-dark md:w-1/2 md:mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aperiam, repellat expedita velit incidunt laborum consequuntur iure quisquam blanditiis. Voluptate.</p>
  </header>
  
  <div class="lg:flex lg:items-center lg:-mx-2">
    
    <div class="mb-4 lg:mb-0 lg:w-1/3 lg:px-2">
      <div class="text-center border border-gray-300 p-10 rounded">
        <h2 class="text-lg mb-4">FREE</h2>
        <div class="mb-6">
          <span class="block text-5xl pb-2">0.00</span>
          <span class="text-sm text-grey">First Year</span>
        </div>
        <ul class="text-grey leading-loose list-reset mb-6">
          <li>5 Products</li>
          <li>10 Leads monthly</li>
          <li>5GB Storage</li>
        </ul>
        <a class="text-sm tracking-wide uppercase inline-block bg-white border postProduct font-bold w-full p-3 rounded no-underline" href="#">Get started</a>
      </div>
    </div>
    
    <div class="mb-4 lg:mb-0 lg:w-1/3 lg:px-2">
      <div class="text-center border border-gray-300 p-10 lg:py-16 rounded lg:shadow-lg">
        <h2 class="text-lg mb-4">POPULAR</h2>
        <div class="mb-6">
          <span class="block text-5xl pb-2 text-gray-800"><span className="text-gray-400">₹</span>99</span>
          <span class="text-sm text-grey">Monthly</span>
        </div>
        <ul class="text-grey-dark leading-loose list-reset mb-6">
          <li>20 Products</li>
          <li>Company Profile Page</li>
          <li>100 Leads Monthly</li>
        </ul>
        <a class="text-sm tracking-wide uppercase inline-block border text-white lg:border-none getStarted lg:hover:shadow-xl lg:text-white font-bold w-full p-3 rounded no-underline" href="#">Get started</a>
      </div>
    </div>
    
    <div class="mb-4 lg:mb-0 lg:w-1/3 lg:px-2">
      <div class="text-center border border-gray-300 p-10 rounded">
        <h2 class="text-lg mb-4">ENTERPRISE</h2>
        <div class="mb-6">
        <span class="block text-5xl pb-2 text-gray-800"><span className="text-gray-400">₹</span>199</span>
          <span class="text-sm text-grey">Monthly</span>
        </div>
        <ul class="text-grey leading-loose list-reset mb-6">
          <li>Unlimited Products</li>
          <li>Company Profile Page</li>
          <li>Free CRM Software</li>
          <li>Unlimited Leads</li>
        </ul>
        <a class="text-sm tracking-wide uppercase inline-block bg-white border postProduct font-bold w-full p-3 rounded no-underline" href="#">Get started</a>
      </div>
    </div>
    
  </div>
</div>
</div>
    </Layout>
            </>
    )
}