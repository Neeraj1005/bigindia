import Link from 'next/link'

const Nav = () => {
    return (
        <>
        <nav className="flex items-center bg-white flex-wrap mx-auto border-b p-2">
        <span className="flex items-center justify-between text-3xl text-gray-500 font-bold tracking-wide uppercase pl-5">
            <Link href="/">
                <a><span className="text-red-700">Big</span><span className="text-blue-700">India</span></a>
            </Link>
        </span>
        <button className="text-gray-400 inline-flex p-3 hover:bg-blue-900 rounded lg:hidden ml-auto nav-toggler"
            data-target="#navigation">
            <span className="material-icons">menu</span></button>

        <form className="w-full md:mb-0 md:w-1/4 lg:ml-20">
            <div className="flex items-center">
                <div className="absolute flex pl-3 text-gray-400 focus-within:text-gray-600">
                    <span className="material-icons h-5 w-5">
                        search
                    </span>
                </div>
                <input
                    className="py-3 px-4 bg-white placeholder-gray-400 text-gray-900 rounded-lg border border-gray-300 appearance-none pl-12 focus:outline-none w-full"
                    placeholder="What are you looking for..." type="text" id="fname" name="fname" />
            </div>
        </form>

        <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">

            <div className="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col">

                <span
                    className="lg:inline-flex lg:w-auto w-auto px-6 py-2 text-xs uppercase font-bold text-gray-800 hover:text-gray-600">
                    <a href="#">Login</a>
                </span>

                <span
                    className="lg:inline-flex lg:w-auto w-auto px-6 py-2 text-xs uppercase font-bold text-gray-800 hover:text-gray-600"><a
                        href="#">Register</a></span>

                <span
                    className="lg:inline-flex lg:w-auto w-auto px-6 py-2 text-xs uppercase font-bold text-gray-800 hover:text-gray-600">
                    <a href="#">Message</a>
                </span>
                <span
                    className="lg:inline-flex lg:w-auto w-auto px-6 py-2 text-xs uppercase font-bold text-gray-800 hover:text-gray-600">
                    <a href="#">RFQ</a>
                </span>
                <span
                    className="lg:inline-flex lg:w-auto w-auto px-6 py-2 text-xs uppercase font-bold text-gray-800 hover:text-gray-600">
                    <a href="#">Sell</a>
                </span>
            </div>

        </div>
    </nav>
    </>
    )
}


export default Nav