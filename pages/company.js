import Link from "next/link";
import Head from "next/head";
export default function companyProfile() {
    return (
        <>
            <Head>
                <title>Company Profile</title>
            </Head>
            <div class="bg-white border max-w-5xl mx-auto mt-5 rounded-lg shadow mb-5 pb-1">
   <div class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-5 rounded-t-lg h-48 company-image">
      &nbsp;
   </div>
   <div class="absolute w-32 h-32 bg-white shadow-xl p-2 -mt-20 ml-8 ">
      <img src="/images/logo.png" alt="Logo" class="company-logo mx-auto" />
   </div>
   <div class="relative mt-16 ml-8">
      <h1 class="text-2xl font-semibold text-gray-700 mb-1">Intel Corporation</h1>
      <p class="text-gray-600">440 Terry Avenue North Seattle, WA 98109 USA</p>
      <p class="text-gray-600">GST - 07AAFCK0468G1ZL</p>
      <div class="flex mt-2 text-lg">
         <p class="text-gray-600 mr-4"><i class="fas fa-phone-alt text-gray-400"></i> 09856256325</p>
         <p class="text-gray-600"><i class="fab fa-whatsapp text-green-600"></i> 09856256325</p>
      </div>
   </div>
   <div class="mt-3 mb-4 ml-8 flex">
      <button class="bg-blue-500 shadow text-white rounded-3xl px-4 py-1 hover:bg-blue-600 mr-2"><a>Send enquiry</a></button>
      <button class="bg-white shadow border-2 border-blue-800 text-blue-800 rounded-3xl px-4 py-1 hover:bg-blue-100 mr-2"><a>Download Catalogue</a></button>
      <button class="bg-white shadow border-2 border-gray-400 text-gray-500 rounded-3xl px-4 py-1 hover:bg-gray-100"><a>More</a></button>
      <div class="ml-auto pr-8 flex">
         <p class=""><a href="" class="facebook rounded-full w-8 h-8 block text-center text-white hover:facebook mr-3 transform transition duration-500 hover:scale-125"><i class="fab fa-facebook-f"></i></a></p>
         <p class=""><a href="" class="twitter rounded-full w-8 h-8 block text-center text-white hover:bg-blue-500 mr-3 transform transition duration-500 hover:scale-125"><i class="fab fa-twitter leading-8"></i></a></p>
         <p class=""><a href="" class="youtube rounded-full w-8 h-8 block text-center text-white hover:bg-blue-500 mr-3 transform transition duration-500 hover:scale-125"><i class="fab fa-youtube leading-8"></i></a></p>
         <p class=""><a href="" class="instagram rounded-full w-8 h-8 block text-center text-white hover:bg-blue-500 transform transition duration-500 hover:scale-125"><i class="fab fa-instagram leading-8"></i></a></p>
      </div>
   </div>
   <hr />
   <nav class="flex items-center justify-between flex-wrap  px-6 py-2">
      <label class=" lg:hidden cursor-pointer flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" for="menu-toggle">
         <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
      </label>
      <input class="hidden" type="checkbox" id="menu-toggle" />
      <div class="hidden w-full flex-grow lg:flex lg:items-center lg:w-auto" id="menu">
         <div class="text-md lg:flex-grow">
            <a href="#responsive-header" class="text-lg text-gray-700 hover:bg-gray-100 px-5 py-3">
            Products
            </a>
            <a href="#responsive-header" class="text-lg text-gray-700 hover:bg-gray-100 px-5 py-3">
            About Us
            </a>
            <a href="#responsive-header" class="text-lg text-gray-700 hover:bg-gray-100 px-5 py-3">
            Contact us
            </a>
         </div>
      </div>
   </nav>
</div>
<div class="bg-white border max-w-5xl mx-auto rounded-lg shadow mb-5 px-8 py-4">
   <div class="text-2xl font-bold text-gray-600">Our Products</div>
   <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500 hover:scale-105">
         <article class="overflow-hidden rounded-lg border shadow">
            <a href="#">
            <img alt="Placeholder" class="block h-auto w-full px-5 pt-3" src="/images/featured1.jpg" />
            </a>
            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
               <h1 class="text-lg">
                  <a class="no-underline hover:text-gray-500 text-black" href="#">
                  Hyundai Luxary Car
                  </a>
               </h1>
            </header>
         </article>
      </div>
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500 hover:scale-105">
         <article class="overflow-hidden rounded-lg border shadow">
            <a href="#">
            <img alt="Placeholder" class="block h-auto w-full px-5 pt-3" src="/images/featured2.jpg" />
            </a>
            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
               <h1 class="text-lg">
                  <a class="no-underline hover:text-gray-500 text-black" href="#">
                  Hyundai Luxary Car
                  </a>
               </h1>
            </header>
         </article>
      </div>
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500 hover:scale-105">
         <article class="overflow-hidden rounded-lg border shadow">
            <a href="#">
            <img alt="Placeholder" class="block h-auto w-full px-5 pt-3" src="/images/featured3.jpg" />
            </a>
            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
               <h1 class="text-lg">
                  <a class="no-underline hover:text-gray-500 text-black" href="#">
                  Hyundai Luxary Car
                  </a>
               </h1>
            </header>
         </article>
      </div>
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500 hover:scale-105">
         <article class="overflow-hidden rounded-lg border shadow">
            <a href="#">
            <img alt="Placeholder" class="block h-auto w-full px-5 pt-3" src="/images/featured4.jpg" />
            </a>
            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
               <h1 class="text-lg">
                  <a class="no-underline hover:text-gray-500 text-black" href="#">
                  Hyundai Luxary Car
                  </a>
               </h1>
            </header>
         </article>
      </div>
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500 hover:scale-105">
         <article class="overflow-hidden rounded-lg border shadow">
            <a href="#">
            <img alt="Placeholder" class="block h-auto w-full px-5 pt-3" src="/images/featured5.jpg" />
            </a>
            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
               <h1 class="text-lg">
                  <a class="no-underline hover:text-gray-500 text-black" href="#">
                  Hyundai Luxary Car
                  </a>
               </h1>
            </header>
         </article>
      </div>
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500 hover:scale-105">
         <article class="overflow-hidden rounded-lg border shadow">
            <a href="#">
            <img alt="Placeholder" class="block h-auto w-full px-5 pt-3" src="/images/featured1.jpg" />
            </a>
            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
               <h1 class="text-lg">
                  <a class="no-underline hover:text-gray-500 text-black" href="#">
                  Hyundai Luxary Car
                  </a>
               </h1>
            </header>
         </article>
      </div>
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500 hover:scale-105">
         <article class="overflow-hidden rounded-lg border shadow">
            <a href="#">
            <img alt="Placeholder" class="block h-auto w-full px-5 pt-3" src="/images/featured5.jpg" />
            </a>
            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
               <h1 class="text-lg">
                  <a class="no-underline hover:text-gray-500 text-black" href="#">
                  Hyundai Luxary Car
                  </a>
               </h1>
            </header>
         </article>
      </div>
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500 hover:scale-105">
         <article class="overflow-hidden rounded-lg border shadow">
            <a href="#">
            <img alt="Placeholder" class="block h-auto w-full px-5 pt-3" src="/images/featured1.jpg" />
            </a>
            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
               <h1 class="text-lg">
                  <a class="no-underline hover:text-gray-500 text-black" href="#">
                  Hyundai Luxary Car
                  </a>
               </h1>
            </header>
         </article>
      </div>
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500 hover:scale-105">
         <article class="overflow-hidden rounded-lg border shadow">
            <a href="#">
            <img alt="Placeholder" class="block h-auto w-full px-5 pt-3" src="/images/featured2.jpg" />
            </a>
            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
               <h1 class="text-lg">
                  <a class="no-underline hover:text-gray-500 text-black" href="#">
                  Hyundai Luxary Car
                  </a>
               </h1>
            </header>
         </article>
      </div>
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500 hover:scale-105">
         <article class="overflow-hidden rounded-lg border shadow">
            <a href="#">
            <img alt="Placeholder" class="block h-auto w-full px-5 pt-3" src="/images/featured3.jpg" />
            </a>
            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
               <h1 class="text-lg">
                  <a class="no-underline hover:text-gray-500 text-black" href="#">
                  Hyundai Luxary Car
                  </a>
               </h1>
            </header>
         </article>
      </div>
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500 hover:scale-105">
         <article class="overflow-hidden rounded-lg border shadow">
            <a href="#">
            <img alt="Placeholder" class="block h-auto w-full px-5 pt-3" src="/images/featured4.jpg" />
            </a>
            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
               <h1 class="text-lg">
                  <a class="no-underline hover:text-gray-500 text-black" href="#">
                  Hyundai Luxary Car
                  </a>
               </h1>
            </header>
         </article>
      </div>
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 transform transition duration-500 hover:scale-105">
         <article class="overflow-hidden rounded-lg border shadow">
            <a href="#">
            <img alt="Placeholder" class="block h-auto w-full px-5 pt-3" src="/images/featured5.jpg" />
            </a>
            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
               <h1 class="text-lg">
                  <a class="no-underline hover:text-gray-500 text-black" href="#">
                  Hyundai Luxary Car
                  </a>
               </h1>
            </header>
         </article>
      </div>
   </div>
</div>
<div class="bg-white border max-w-5xl mx-auto rounded-lg shadow mb-5 px-8 py-4">
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
</div>
<div class="bg-white border max-w-5xl mx-auto rounded-lg shadow mb-5">
   <div class="container mx-auto">
      <div class="items-center flex flex-wrap">
         <div class="w-full md:w-6/12">
            <img
               alt="..."
               class="max-w-full shadow-lg rounded-l-lg"
               src="/images/amazon.jpg"
               />
         </div>
         <div class="w-full md:w-6/12 ml-auto mr-auto px-8">
            <div class="md:pr-12">
               <h3 class="text-2xl font-bold text-gray-600">Company profile</h3>
               <p class="mt-4 text-gray-600">
                  Green Revolution is an organization that markets world class product nationwide. Our extensive producrange is of exceptional standard as they seek innovative supplies from all across the world. We specialize in providing a wide range of products for the home.
               </p>
               <p class="mt-4 text-gray-500">
                  By basing our self on the ecologically benign cleaning technologies demanded the world over, we have acquired the marketing rights for innovative, user-friendly products that are available to a wide spectrum.
               </p>
            </div>
         </div>
      </div>
   </div>
</div>
<div>
   <h3 class="text-2xl font-bold text-gray-600 text-center mb-3">Our Video</h3>
   <div class="bg-white border max-w-5xl mx-auto rounded-lg shadow mb-5">
      <div class="container mx-auto">
         <div class="items-center">
            <iframe class="rounded-lg" width="100%" height="500" src="https://www.youtube.com/embed/vTEDm248lt0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
      </div>
   </div>
</div>
<div class=" bg-blue-500 text-white border max-w-5xl mx-auto rounded-lg shadow mb-5 py-5">
   <div class="container mx-auto">
      <div class="flex flex-wrap">
         <div class="w-full md:w-6/12">
            <div class="w-full mr-auto px-8">
               <div class="md:pr-12 mb-10">
                  <h3 class="text-2xl font-bold">Contact us</h3>
                  <p class="mt-2 text-xl">
                     Amazon prime Limited
                  </p>
                  <p class="mb-4 text-blue-200">
                     440 Terry Avenue North Seattle, WA 98109 USA
                  </p>
                  <div class="mb-4">
                     <p class="text-xl font-bold">Contact person</p>
                     <p class="text-lg text-blue-200"><i class="fas fa-user-circle"></i> Sunny Singhal (Marketing Head)</p>
                  </div>
                  <p class="text-xl font-bold text-blue-200 mb-2"><i class="fas fa-phone-alt"></i> Call 08048949866</p>
                  <p class="text-xl font-bold text-blue-200"><i class="fab fa-whatsapp"></i> Call 08048949866</p>
                  <div class="flex mt-5">
                     <button class="sm:ml-1 text-green-900 font-bold px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 bg-green-300 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg mr-3"><i class="fas fa-comment-alt"></i> Send SMS</button>
                     <button class="sm:ml-1 text-blue-900 font-bold px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 bg-blue-300 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"><i class="fas fa-envelope"></i> Send Email</button>
                  </div>
               </div>
            </div>
         </div>
         <div class="w-full md:w-6/12 ml-auto mr-auto px-8">
            <div class="md:pr-12">
               <div class="flex">
                  <h3 class="text-2xl font-bold mr-3">Leave a Message</h3>
                  <p class="text-blue-200 mb-4 leading-8">we will call you back</p>
               </div>
               <form class="mb-4" action="/" method="post">
                  <div class="mb-4 md:w-full">
                     <input class="text-gray-700 w-full rounded py-2 px-4 text-xl outline-none focus:shadow-outline border border-white" type="text" name="password" id="password" placeholder="Your mobile" />
                  </div>
                  <div class="mb-4 md:w-full">
                     <input class="text-gray-700 w-full  rounded py-2 px-4 text-xl outline-none focus:shadow-outline border border-white" type="email" name="email" id="email" placeholder="Your name" />
                  </div>
                  <div class="mb-4 md:w-full">
                     <textarea class="text-gray-700 w-full rounded py-2 px-4 text-xl outline-none focus:shadow-outline border border-white" type="email" name="email" id="email" placeholder="Your Requirement"></textarea>
                  </div>
                  <button class="w-full sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg">Submit Requirement</button>
               </form>
            </div>
         </div>
      </div>
   </div>
</div>
<div class="mb-10">
   <h3 class="text-2xl font-bold text-gray-600 text-center mb-3">Reach us</h3>
   <div class="bg-white border max-w-5xl mx-auto rounded-lg shadow mb-5">
      <div class="container mx-auto">
         <div class="items-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.484095901417!2d77.1667734148303!3d28.70507538754533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d022181578a41%3A0xee0ee1ec7380273c!2sAynsoft.com!5e0!3m2!1sen!2sin!4v1614858653657!5m2!1sen!2sin" class="rounded-lg border-none" width="100%" height="500" allowfullscreen="" loading="lazy"></iframe>
         </div>
      </div>
   </div>
</div>
<hr />
<p class="text-center py-3 bg-white text-gray-500">Developed and Managed by: BigIndia Pvt. Ltd.</p>
<script src="https://kit.fontawesome.com/a2189951ff.js"></script>
        </>
    )
}
