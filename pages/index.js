import Head from 'next/head'
import NavCat from '../components/NavCategory'
import ProductHomeList from '../components/ProductHomePageList'

export default function Home({products}) {
  // console.log(products)
  return (
    <>
    <Head>
      <title>Welcome</title>
    </Head>
    <NavCat />
    <div class="bg-gray-200 pt-10 mb-12">
        <div class="container mx-auto px-4 md:px-12">
            <div class="flex flex-wrap -mx-1 lg:-mx-4">
                
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
                    
                    <article class="overflow-hidden">
                        <header class="items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-5xl font-extrabold text-gray-700 mb-5">
                                We connect Buyers & Sellers
                            </h1>
                            <div class="text-2xl text-gray-600 mb-10">Bigindia.com is India's fastest online B2B
                                marketplace, connecting buyers with suppliers.
                            </div>
                            <a class="text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-pink-500 active:bg-pink-600 uppercase text-sm shadow hover:shadow-lg"
                                href="#">get started</a>
                        </header>
                        <footer class="flex text-gray-700 leading-none p-2 md:p-4 text-center gap-x-16">
                            <div class="py-3">
                                <p><span class="material-icons text-3xl">stars</span></p>
                                <p class="text-lg">Trusted Platform</p>
                            </div>
                            <div class="py-3">
                                <p><span class="material-icons text-3xl">verified_user</span></p>
                                <p class="text-lg">Safe & Secure</p>
                            </div>
                            <div class="py-3">
                                <p><span class="material-icons text-3xl">speaker_notes</span></p>
                                <p class="text-lg">Quick Assistance</p>
                            </div>
                        </footer>

                    </article>
                </div>

                <div class="px-1 w-full md:w-1/2 lg:my-0 lg:px-4 lg:w-1/2">
                    <div class="flex justify-end w-full">
                        <img src="img/additional.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    </div>

    <ProductHomeList products={products} />

    <div class="container mt-5 mx-auto px-4 md:px-12 text-2xl font-bold text-gray-800">Transportation & Logistics</div>
    <div class="container mb-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Community
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
                
            </div>
            

            
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Events
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
                
            </div>
            

            
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                For Rent
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
                
            </div>
            

            
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                For Sale
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
                
            </div>
            

            
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Matrimonial
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
                
            </div>
            

            
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Personals
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
                
            </div>
            
        </div>
    </div>



    <div class="container mt-5 mx-auto px-4 md:px-12 text-2xl font-bold text-gray-800">Apparel, Clothing & Garments
    </div>
    <div class="container mb-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Community
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
                
            </div>
            

            
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Events
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
                
            </div>
            

            
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                For Rent
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
                
            </div>
            

            
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                For Sale
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
                
            </div>
            

            
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Matrimonial
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
                
            </div>
            

            
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Personals
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
                
            </div>
            
        </div>
    </div>


    <div class="bg-blue-500 py-10 mb-12">
        <div class="container mx-auto px-4 md:px-12">
            <div class="flex flex-wrap -mx-1 lg:-mx-4">
                
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
                    
                    <article class="overflow-hidden text-white">
                        <header class="items-center justify-between leading-tight">
                            <h1 class="text-4xl font-semibold">
                                One Request, Multiple Quotes
                            </h1>
                            <div class="text-2xl mt-3">Get free quotes from multiple sellers</div>
                        </header>
                        <footer class="leading-none p-2 md:p-4">
                            <div class="flex gap-5 py-3">
                                <p><span class="material-icons text-4xl">stars</span></p>
                                <p class="font-bold text-xl">Tell us what You Need</p>
                            </div>
                            <div class="flex gap-5 py-3">
                                <p><span class="material-icons text-4xl">verified_user</span></p>
                                <p class="font-bold text-xl">Receive free quotes from sellers</p>
                            </div>
                            <div class="flex gap-5 py-3">
                                <p><span class="material-icons text-4xl">speaker_notes</span></p>
                                <p class="font-bold text-xl">Final the Deal</p>
                            </div>
                        </footer>

                    </article>
                    
                </div>
                

                
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
                    
                    <div class="flex items-center w-full text-white">
                        <div class="w-full p-8">
                            <span class="block w-full text-xl uppercase font-bold mb-4">Tell us your Requirement</span>
                            <form class="mb-4" action="/" method="post">
                                <div class="mb-4 md:w-full">
                                    <input
                                        class="w-full border border-white rounded p-2 outline-none focus:shadow-outline"
                                        type="email" name="email" id="email" placeholder="Enter product / Service name" />
                                </div>
                                <div class="mb-6 md:w-full">
                                    <input
                                        class="w-full border border-white rounded p-2 outline-none focus:shadow-outline"
                                        type="text" name="password" id="password" placeholder="Enter your mobile" />
                                    <div class="text-xs mt-1">Seller will contact you on this number</div>
                                </div>
                                <div class="mb-4 md:w-full">
                                    <input
                                        class="w-full border border-white rounded p-2 outline-none focus:shadow-outline"
                                        type="email" name="email" id="email" placeholder="Your name" />
                                </div>
                                <button
                                    class="w-full sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg">Request
                                    for Quotation</button>
                            </form>
                        </div>
                    </div>
                    
                </div>
                

            </div>
        </div>
    </div>



    <div class="container mt-5 mx-auto px-4 md:px-12 text-2xl font-bold text-gray-800">Industrial Plants, Machinery &
        Equipment</div>
    <div class="container mb-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Community
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
                
            </div>
            

            
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Events
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
                
            </div>
            

            
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                For Rent
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
                
            </div>
            

            
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                For Sale
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
                
            </div>
            

            
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Matrimonial
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
                
            </div>
            

            
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Personals
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
                
            </div>
            
        </div>
    </div>



    <div class="container mt-5 mx-auto px-4 md:px-12 text-2xl font-bold text-gray-800">Consumer Electronics</div>
    <div class="container mb-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Community
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
            </div>

            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Events
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
            </div>

            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                For Rent
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
            </div>

            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                For Sale
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
            </div>

            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Matrimonial
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
            </div>

            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Personals
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
            </div>
        </div>
    </div>


    <div class="bg-blue-500 py-10 mb-12">
        <h1 class="text-4xl font-extrabold text-white text-center">Choose your suppliers by cities</h1>
        <div class="max-w-4xl p-8 mx-auto">
            <div class="grid grid-cols-2 gap-4 sm:gap-8 sm:grid-cols-3 md:grid-cols-5">


                <div>
                    <a class="text-white hover:text-blue-100" href="#">
                        <div>
                            <img class="block object-fill w-30 h-30 rounded-full border-2 border-white p-1"
                                src="img/delhi.jpg" alt="Thumbnail" />
                        </div>
                        <p class="text-center mt-3 text-xl">Delhi</p>
                    </a>
                </div>

                <div>
                    <a class="text-white hover:text-blue-100" href="#">
                        <div>
                            <img class="block object-fill w-30 h-30 rounded-full border-2 border-white p-1"
                                src="img/bengaluru.jpg" alt="Thumbnail" />
                        </div>
                        <p class="text-center mt-3 text-xl">Bengaluru</p>
                    </a>
                </div>

                <div>
                    <a class="text-white hover:text-blue-100" href="#">
                        <div>
                            <img class="block object-fill w-30 h-30 rounded-full border-2 border-white p-1"
                                src="img/chennai.jpg" alt="Thumbnail" />
                        </div>
                        <p class="text-center mt-3 text-xl">Chennai</p>
                    </a>
                </div>

                <div>
                    <a class="text-white hover:text-blue-100" href="#">
                        <div>
                            <img class="block object-fill w-30 h-30 rounded-full border-2 border-white p-1"
                                src="img/mumbai.jpg" alt="Thumbnail" />
                        </div>
                        <p class="text-center mt-3 text-xl">Mumbai</p>
                    </a>
                </div>

                <div>
                    <a class="text-white hover:text-blue-100" href="#">
                        <div>
                            <img class="block object-fill w-30 h-30 rounded-full border-2 border-white p-1"
                                src="img/ahmedabad.jpg" alt="Thumbnail" />
                        </div>
                        <p class="text-center mt-3 text-xl">Ahmedabad</p>
                    </a>
                </div>

                <div>
                    <a class="text-white hover:text-blue-100" href="#">
                        <div>
                            <img class="block object-fill w-30 h-30 rounded-full border-2 border-white p-1"
                                src="img/kolkata.jpg" alt="Thumbnail" />
                        </div>
                        <p class="text-center mt-3 text-xl">Kolkata</p>
                    </a>
                </div>

                <div>
                    <a class="text-white hover:text-blue-100" href="#">
                        <div>
                            <img class="block object-fill w-30 h-30 rounded-full border-2 border-white p-1"
                                src="img/pune.jpg" alt="Thumbnail" />
                        </div>
                        <p class="text-center mt-3 text-xl">Pune</p>
                    </a>
                </div>

                <div>
                    <a class="text-white hover:text-blue-100" href="#">
                        <div>
                            <img class="block object-fill w-30 h-30 rounded-full border-2 border-white p-1"
                                src="img/surat.jpg" alt="Thumbnail" />
                        </div>
                        <p class="text-center mt-3 text-xl">Surat</p>
                    </a>
                </div>

                <div>
                    <a class="text-white hover:text-blue-100" href="#">
                        <div>
                            <img class="block object-fill w-30 h-30 rounded-full border-2 border-white p-1"
                                src="img/jaipur.jpg" alt="Thumbnail" />
                        </div>
                        <p class="text-center mt-3 text-xl">Jaipur</p>
                    </a>
                </div>

                <div>
                    <a class="text-white hover:text-blue-100" href="#">
                        <div>
                            <img class="block object-fill w-30 h-30 rounded-full border-2 border-white p-1"
                                src="img/hyderabad.jpg" alt="Thumbnail" />
                        </div>
                        <p class="text-center mt-3 text-xl">Hyderabad</p>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-5 mx-auto px-4 md:px-12 text-2xl font-bold text-gray-800">Vehicle & Accessories</div>
    <div class="container mb-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Community
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
            </div>

            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Events
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
            </div>

            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                For Rent
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
            </div>

            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                For Sale
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
            </div>

            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Matrimonial
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
            </div>

            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Personals
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
            </div>
        </div>
    </div>



    <div class="container mt-5 mx-auto px-4 md:px-12 text-2xl font-bold text-gray-800">Industrial & Engineering Products
    </div>
    <div class="container mb-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Community
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
            </div>

            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Events
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
            </div>

            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                For Rent
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
            </div>

            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                For Sale
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
            </div>

            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Matrimonial
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
            </div>

            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
                <article class="overflow-hidden rounded-lg">
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                Personals
                            </a>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Unisex
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Kids
                                    Dresses</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Winter
                                    Wear</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Animal
                                    Clothing</a></p>
                            <p class="text-gray-600 text-sm leading-7"><a class="hover:text-indigo-500" href="#">Socks,
                                    Leggings</a></p>
                        </h1>
                    </header>
                </article>
            </div>
        </div>
    </div>



    <div class="bg-blue-500 py-10">
        <h1 class="text-4xl font-extrabold text-white text-center">Browse products by Brands</h1>
        <div class="max-w-4xl p-8 mx-auto">
            <div class="grid grid-cols-2 gap-4 sm:gap-8 sm:grid-cols-3 md:grid-cols-6">


                <div>
                    <a class="text-white hover:text-indigo-300" href="#">
                        <div>
                            <img class="block object-fill w-30 h-30 rounded-full border-2 border-orange-500 p-1 bg-orange-600"
                                src="img/brand1.jpg" alt="Thumbnail" />
                        </div>
                    </a>
                </div>

                <div>
                    <a class="text-white hover:text-indigo-300" href="#">
                        <div>
                            <img class="block object-fill w-30 h-30 rounded-full border-2 border-orange-500 p-1 bg-orange-600"
                                src="img/brand2.jpg" alt="Thumbnail" />
                        </div>
                    </a>
                </div>

                <div>
                    <a class="text-white hover:text-indigo-300" href="#">
                        <div>
                            <img class="block object-fill w-30 h-30 rounded-full border-2 border-orange-500 p-1 bg-orange-600"
                                src="img/brand3.jpg" alt="Thumbnail" />
                        </div>
                    </a>
                </div>

                <div>
                    <a class="text-white hover:text-indigo-300" href="#">
                        <div>
                            <img class="block object-fill w-30 h-30 rounded-full border-2 border-orange-500 p-1 bg-orange-600"
                                src="img/brand4.jpg" alt="Thumbnail" />
                        </div>
                    </a>
                </div>

                <div>
                    <a class="text-white hover:text-indigo-300" href="#">
                        <div>
                            <img class="block object-fill w-30 h-30 rounded-full border-2 border-orange-500 p-1 bg-orange-600"
                                src="img/brand5.jpg" alt="Thumbnail" />
                        </div>
                    </a>
                </div>

                <div>
                    <a class="text-white hover:text-indigo-300" href="#">
                        <div>
                            <img class="block object-fill w-30 h-30 rounded-full border-2 border-orange-500 p-1 bg-orange-600"
                                src="img/brand6.jpg" alt="Thumbnail" />
                        </div>
                    </a>
                </div>

                <div>
                    <a class="text-white hover:text-indigo-300" href="#">
                        <div>
                            <img class="block object-fill w-30 h-30 rounded-full border-2 border-orange-500 p-1 bg-orange-600"
                                src="img/brand7.jpg" alt="Thumbnail" />
                        </div>
                    </a>
                </div>

                <div>
                    <a class="text-white hover:text-indigo-300" href="#">
                        <div>
                            <img class="block object-fill w-30 h-30 rounded-full border-2 border-orange-500 p-1 bg-orange-600"
                                src="img/brand8.jpg" alt="Thumbnail" />
                        </div>
                    </a>
                </div>

                <div>
                    <a class="text-white hover:text-indigo-300" href="#">
                        <div>
                            <img class="block object-fill w-30 h-30 rounded-full border-2 border-orange-500 p-1 bg-orange-600"
                                src="img/brand9.jpg" alt="Thumbnail" />
                        </div>
                    </a>
                </div>

                <div>
                    <a class="text-white hover:text-indigo-300" href="#">
                        <div>
                            <img class="block object-fill w-30 h-30 rounded-full border-2 border-orange-500 p-1 bg-orange-600"
                                src="img/brand10.jpg" alt="Thumbnail" />
                        </div>
                    </a>
                </div>

                <div>
                    <a class="text-white hover:text-indigo-300" href="#">
                        <div>
                            <img class="block object-fill w-30 h-30 rounded-full border-2 border-orange-500 p-1 bg-orange-600"
                                src="img/brand11.jpg" alt="Thumbnail" />
                        </div>
                    </a>
                </div>

                <div>
                    <a class="text-white hover:text-indigo-300" href="#">
                        <div>
                            <img class="block object-fill w-30 h-30 rounded-full border-2 border-orange-500 p-1 bg-orange-600"
                                src="img/brand12.jpg" alt="Thumbnail" />
                        </div>
                    </a>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`https://digitalcrm.com/crm/api/get/products/list`)
  const products = await res.json()

  if (!products) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      products
    },
  }
}