import Link from 'next/link'

const Nav = () => {
    return (
        <>
        <nav className="flex items-center bg-white flex-wrap mx-auto border-b p-2">
        <span className="flex items-center justify-between text-3xl text-gray-500 font-black tracking-wide uppercase pl-5">
            <Link href="/">
                <a><span className="logoColor">Big</span><span className="logoColors">India</span></a>
            </Link>
        </span>
        <button className="text-gray-400 inline-flex p-3 hover:bg-blue-900 rounded lg:hidden ml-auto nav-toggler"
            data-target="#navigation">
            <span className="material-icons">menu</span></button>

        <form className="w-full md:mb-0 md:w-2/5 lg:ml-20">
            <div className="flex items-center">
                <div className="absolute flex pl-3 text-gray-400 focus-within:text-gray-600">
                    <span className="material-icons h-5 w-5">
                        search
                    </span>
                </div>
                <input
                    className="py-2 px-4 bg-white placeholder-gray-500 text-md font-semibold text-gray-900 rounded-full border border-gray-500 appearance-none pl-12 focus:outline-none w-full "
                    placeholder="What are you looking for..." type="text" id="fname" name="fname" />
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
                    <a href="#">Advertise</a>
                </span>
            </div>

        </div>
    </nav>
    </>
    )
}


export default Nav