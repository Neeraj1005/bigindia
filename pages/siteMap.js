import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
export default function SiteMap() {
    return (
        <>
            <Layout>
            <Head>
                <title>Site Map</title>
            </Head>
            <div className="text-gray-700 body-font">
  <div class="container mx-auto flex px-40 pb-20 pt-7 md:flex-row flex-col">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Site Map
        
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white getStarted border-0 py-2 px-6 focus:outline-none hover:shadow-lg rounded text-lg">Get started</button>
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