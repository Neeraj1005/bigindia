import Link from "next/link";
import { NextSeo } from "next-seo";

const CompanyProfile = ({ company }) => {
  const companies = company.data;
  const {
    c_name,
    slug,
    logo,
    cover_img,
    c_cover,
    c_bio,
    address,
    country,
    c_mobileNum,
    c_whatsappNum,
    city,
    zipcode,
    c_gstNumber,
    c_webUrl,
    google_map_url,
    yt_video_link,
    fb_link,
    tw_link,
    yt_link,
    linkedin_link,
    tbl_countries,
    tbl_products,
  } = companies;
  return (
    <>
      <NextSeo
        title={`comp`}
        description={`des`}
        openGraph={{
          title: `company profile`,
          description: `hle`,
          //   images: [
          //     {
          //       url: `${product.picture}`,
          //       width: 800,
          //       height: 600,
          //       alt: `${item.slug}`,
          //     },
          //   ],
          site_name: "bigindia.com",
        }}
      />

      <div class="bg-white border max-w-5xl mx-auto mt-5 rounded-lg shadow mb-5 pb-1">
        <div
          style={{ backgroundImage: `url(${cover_img})` }}
          class={`bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-5 rounded-t-lg h-48 company-image`}
        >
          &nbsp;
        </div>
        <div class="absolute w-32 h-32 bg-white shadow-xl p-2 -mt-20 ml-8 ">
          <img src="/images/logo.png" alt="Logo" class="company-logo mx-auto" />
        </div>
        <div class="relative mt-16 ml-8">
          <h1 class="text-2xl font-semibold text-gray-700 mb-1">{c_name}</h1>
          <p class="text-gray-600">
            {address}, {tbl_countries.name}
          </p>
          <p class="text-gray-600">GST - {c_gstNumber}</p>
          <div class="flex mt-2 text-lg">
            <p class="text-gray-600 mr-4">
              <i class="fas fa-phone-alt text-gray-400"></i> {c_mobileNum}
            </p>
            <p class="text-gray-600">
              <i class="fab fa-whatsapp text-green-600"></i> {c_whatsappNum}
            </p>
          </div>
        </div>
        <div class="mt-3 mb-4 ml-8 flex">
          <button class="bg-blue-500 shadow text-white rounded-3xl px-4 py-1 hover:bg-blue-600 mr-2">
            <a>Send enquiry</a>
          </button>
          <button class="bg-white shadow border-2 border-blue-800 text-blue-800 rounded-3xl px-4 py-1 hover:bg-blue-100 mr-2">
            <a>Download Catalogue</a>
          </button>
          <button class="bg-white shadow border-2 border-gray-400 text-gray-500 rounded-3xl px-4 py-1 hover:bg-gray-100">
            <a>More</a>
          </button>
          <div class="ml-auto pr-8 flex">
            <p class="">
              <Link href={`${fb_link ? fb_link : "/#fb"}`}>
                <a class="facebook rounded-full w-8 h-8 block text-center text-white hover:facebook mr-3 transform transition duration-500 hover:scale-125">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </Link>
            </p>
            <p class="">
              <Link href={`${tw_link ? tw_link : "/#twitter"}`}>
                <a class="twitter rounded-full w-8 h-8 block text-center text-white hover:bg-blue-500 mr-3 transform transition duration-500 hover:scale-125">
                  <i class="fab fa-twitter leading-8"></i>
                </a>
              </Link>
            </p>
            <p class="youtube rounded-full w-8 h-8 block text-center text-white hover:bg-blue-500 mr-3 transform transition duration-500 hover:scale-125">
              <Link href={`${yt_link ? yt_link : "/#youtube"}`}>
                <a class="">
                  <i class="fab fa-youtube leading-8"></i>
                </a>
              </Link>
            </p>
            <p class="facebook rounded-full w-8 h-8 block text-center text-white hover:bg-blue-500 mr-3 transform transition duration-500 hover:scale-125">
              <Link href={`${linkedin_link ? linkedin_link : "/#linkedin"}`}>
                <a class="">
                  <i class="fab fa-linkedin leading-8"></i>
                </a>
              </Link>
            </p>
          </div>
        </div>

        <hr />
        <nav class="flex items-center justify-between flex-wrap  px-6 py-2">
          <label
            class=" lg:hidden cursor-pointer flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            for="menu-toggle"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </label>
          <input class="hidden" type="checkbox" id="menu-toggle" />
          <div
            class="hidden w-full flex-grow lg:flex lg:items-center lg:w-auto"
            id="menu"
          >
            <div class="text-md lg:flex-grow">
              <a
                href="#all-product"
                class="text-lg text-gray-700 hover:bg-gray-100 px-5 py-3"
              >
                Products
              </a>
              <a
                href="#about-us"
                class="text-lg text-gray-700 hover:bg-gray-100 px-5 py-3"
              >
                About Us
              </a>
              <a
                href="#contact-us"
                class="text-lg text-gray-700 hover:bg-gray-100 px-5 py-3"
              >
                Contact us
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div
        class="bg-white border max-w-5xl mx-auto rounded-lg shadow mb-5 px-8 py-4"
        id="all-product"
      >
        <div class="text-2xl font-bold text-gray-600">Our Products</div>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          {tbl_products
            ? tbl_products
                .map((products) => (
                  <div
                    key={products.pro_id}
                    class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500 hover:scale-105"
                  >
                    <article class="overflow-hidden rounded-lg border shadow">
                      <a href="#">
                        <img
                          alt="Placeholder"
                          class="block h-auto w-full px-5 pt-3 cardImg"
                          src={products.product_img}
                        />
                      </a>
                      <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                          <Link href={`/product/${products.slug}`}>
                            <a class="no-underline hover:text-gray-500 text-black">
                              {products.name}
                            </a>
                          </Link>
                        </h1>
                      </header>
                    </article>
                  </div>
                ))
                .reverse()
            : null}
        </div>
      </div>
      {/* <div class="bg-white border max-w-5xl mx-auto rounded-lg shadow mb-5 px-8 py-4">
        <div class="text-2xl font-bold text-gray-600">Browse by categories</div>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500">
            <h1 class="text-lg">
              <a class="no-underline hover:text-gray-500 text-black" href="#">
                Software
              </a>
            </h1>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500">
            <h1 class="text-lg">
              <a class="no-underline hover:text-gray-500 text-black" href="#">
                Electronics
              </a>
            </h1>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500">
            <h1 class="text-lg">
              <a class="no-underline hover:text-gray-500 text-black" href="#">
                Electrical
              </a>
            </h1>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500">
            <h1 class="text-lg">
              <a class="no-underline hover:text-gray-500 text-black" href="#">
                Apparels
              </a>
            </h1>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500">
            <h1 class="text-lg">
              <a class="no-underline hover:text-gray-500 text-black" href="#">
                Sports Goods
              </a>
            </h1>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500">
            <h1 class="text-lg">
              <a class="no-underline hover:text-gray-500 text-black" href="#">
                Agriculture
              </a>
            </h1>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500">
            <h1 class="text-lg">
              <a class="no-underline hover:text-gray-500 text-black" href="#">
                Chemical
              </a>
            </h1>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500">
            <h1 class="text-lg">
              <a class="no-underline hover:text-gray-500 text-black" href="#">
                Mobile Phones
              </a>
            </h1>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500">
            <h1 class="text-lg">
              <a class="no-underline hover:text-gray-500 text-black" href="#">
                Plastics
              </a>
            </h1>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500">
            <h1 class="text-lg">
              <a class="no-underline hover:text-gray-500 text-black" href="#">
                Mechanical
              </a>
            </h1>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500">
            <h1 class="text-lg">
              <a class="no-underline hover:text-gray-500 text-black" href="#">
                Agricultural Implements
              </a>
            </h1>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500">
            <h1 class="text-lg">
              <a class="no-underline hover:text-gray-500 text-black" href="#">
                Combine Harvesters
              </a>
            </h1>
          </div>
        </div>
      </div> */}
      <div
        class="bg-white border max-w-5xl mx-auto rounded-lg shadow mb-5"
        id="about-us"
      >
        <div class="container mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-6/12">
              <img
                alt="..."
                class="max-w-full shadow-lg rounded-l-lg"
                src={logo}
              />
            </div>
            <div class="w-full md:w-6/12 ml-auto mr-auto px-8">
              <div class="md:pr-12">
                <h3 class="text-2xl font-bold text-gray-600">
                  Company profile
                </h3>
                <p dangerouslySetInnerHTML={{ __html: c_bio }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {yt_video_link ? (
        <div>
          <h3 class="text-2xl font-bold text-gray-600 text-center mb-3">
            Our Video
          </h3>
          <div class="bg-white border max-w-5xl mx-auto rounded-lg shadow mb-5">
            <div class="container mx-auto">
              <div class="items-center">
                <iframe
                  class="rounded-lg"
                  width="100%"
                  height="500"
                  src={yt_video_link}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div
        class=" bg-blue-500 text-white border max-w-5xl mx-auto rounded-lg shadow mb-5 py-5"
        id="contact-us"
      >
        <div class="container mx-auto">
          <div class="flex flex-wrap">
            <div class="w-full md:w-6/12">
              <div class="w-full mr-auto px-8">
                <div class="md:pr-12 mb-10">
                  <h3 class="text-2xl font-bold">Contact us</h3>
                  <p class="mt-2 text-xl">Amazon prime Limited</p>
                  <p class="mb-4 text-blue-200">
                    440 Terry Avenue North Seattle, WA 98109 USA
                  </p>
                  <div class="mb-4">
                    <p class="text-xl font-bold">Contact person</p>
                    <p class="text-lg text-blue-200">
                      <i class="fas fa-user-circle"></i> Sunny Singhal
                      (Marketing Head)
                    </p>
                  </div>
                  <p class="text-xl font-bold text-blue-200 mb-2">
                    <i class="fas fa-phone-alt"></i> Call 08048949866
                  </p>
                  <p class="text-xl font-bold text-blue-200">
                    <i class="fab fa-whatsapp"></i> Call 08048949866
                  </p>
                  <div class="flex mt-5">
                    <button class="sm:ml-1 text-green-900 font-bold px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 bg-green-300 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg mr-3">
                      <i class="fas fa-comment-alt"></i> Send SMS
                    </button>
                    <button class="sm:ml-1 text-blue-900 font-bold px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 bg-blue-300 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg">
                      <i class="fas fa-envelope"></i> Send Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 ml-auto mr-auto px-8">
              <div class="md:pr-12">
                <div class="flex">
                  <h3 class="text-2xl font-bold mr-3">Leave a Message</h3>
                  <p class="text-blue-200 mb-4 leading-8">
                    we will call you back
                  </p>
                </div>
                <form class="mb-4" action="/" method="post">
                  <div class="mb-4 md:w-full">
                    <input
                      class="text-gray-700 w-full rounded py-2 px-4 text-xl outline-none focus:shadow-outline border border-white"
                      type="text"
                      name="password"
                      id="password"
                      placeholder="Your mobile"
                    />
                  </div>
                  <div class="mb-4 md:w-full">
                    <input
                      class="text-gray-700 w-full  rounded py-2 px-4 text-xl outline-none focus:shadow-outline border border-white"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your name"
                    />
                  </div>
                  <div class="mb-4 md:w-full">
                    <textarea
                      class="text-gray-700 w-full rounded py-2 px-4 text-xl outline-none focus:shadow-outline border border-white"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Requirement"
                    ></textarea>
                  </div>
                  <button class="w-full sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg">
                    Submit Requirement
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {google_map_url ? (
        <>
          <div class="mb-10">
            <h3 class="text-2xl font-bold text-gray-600 text-center mb-3">
              Reach us
            </h3>
            <div class="bg-white border max-w-5xl mx-auto rounded-lg shadow mb-5">
              <div class="container mx-auto">
                <div class="items-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.484095901417!2d77.1667734148303!3d28.70507538754533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d022181578a41%3A0xee0ee1ec7380273c!2sAynsoft.com!5e0!3m2!1sen!2sin!4v1614858653657!5m2!1sen!2sin"
                    class="rounded-lg border-none"
                    width="100%"
                    height="500"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </>
      ) : null}

      <p class="text-center py-3 bg-white text-gray-500">
        Developed and Managed by: BigIndia Pvt. Ltd.
      </p>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`https://digitalcrm.com/crm/api/companies`);
  const listCompanies = await res.json();
  const ids = listCompanies.data.map((company) => company.slug);
  const paths = ids.map((slug) => ({ params: { slug: slug.toString() } }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://digitalcrm.com/crm/api/companies/${params.slug}`
  );
  const company = await res.json();

  return {
    props: {
      company,
    },
    revalidate: 1,
  };
}
export default CompanyProfile;
