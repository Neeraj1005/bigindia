import Link from 'next/link'

const Nav = () => {
    return (
        <>
            <nav className="flex items-center bg-white flex-wrap mx-auto border-b py-3">
                <span className="flex items-center justify-between text-3xl text-gray-500 font-black tracking-wide uppercase pl-5">
                    <Link href="/">
                        <a><span className="logoColor">Big</span><span className="logoColors">India</span></a>
                    </Link>
                </span>
                <button className="text-gray-400 inline-flex p-3 hover:bg-blue-900 rounded lg:hidden ml-auto nav-toggler"
                    data-target="#navigation">
                    <span className="material-icons">menu</span></button>

                <form className="w-full md:mb-0 md:w-2/6 lg:ml-20">
                
                    <div>
                        <div class="flex relative rounded-md shadow-sm">
                            
                            <input type="text" name="price" id="price" class="rounded-l w-full py-2 pl-40 pr-12 placeholder-gray-500 text-md font-semibold text-gray-900 border border-gray-500 appearance-none focus:outline-none" placeholder="What are you looking for..." />
                            <button className="text-gray-600 inline-flex p-3 border border-gray-500 rounded-r border-l-0 hover:bg-gray-100"><span className="material-icons h-5 w-5">search</span></button>
                            <div class="absolute inset-y-0 left-0 flex items-center border-r border-gray-500">
                            
                                <label for="currency" class="sr-only">Location</label>
                                <select id="currency" name="currency" class="h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 text-md font-semibold">
                                    <option>Ahmedabad</option>
                                    <option>Bangalore</option>
                                    <option>Chennai</option>
                                    <option>Delhi</option>
                                    <option>Hyderabad</option>
                                    <option>Kolkata</option>
                                    <option>Mumbai</option>
                                    <option>Pune</option>
                                    <option>Chandigarh</option>
                                    <option>Coimbatore</option>
                                    <option>Ernakulam</option>
                                    <option>Goa</option>
                                    <option>Indore</option>
                                    <option>Jaipur</option>
                                    <option>Mysore</option>
                                </select>
                            </div>
                            
                        </div>
                    </div>

                </form>

                <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">

                    <div className="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col">

                        <span
                            className="lg:inline-flex lg:w-auto w-auto px-4 py-2 text-md text-gray-700 hover:text-blue-500">
                            <a href="#">Sign in</a>
                        </span>


                        <span
                            className="lg:inline-flex lg:w-auto w-auto px-4 py-2 text-md text-gray-700 hover:text-blue-500"><a
                                href="#">Become a seller</a></span>

                        <span
                            className="lg:inline-flex lg:w-auto w-auto px-4 py-2 text-md text-gray-700 hover:text-blue-500">
                            <a href="#">Messages</a>
                        </span>
                        <span
                            className="lg:inline-flex lg:w-auto w-auto px-4 py-2 text-md text-gray-700 hover:text-blue-500">
                            <Link href="/advertise"><a>Advertise</a></Link>
                        </span>
                    </div>

                </div>
            </nav>
        </>
    )
}


export default Nav