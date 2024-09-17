import TransactSvgBlack from '../assets/logo_transact_sinfondo_black.png';



const Footer = () => {

    return (
        <>
            {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

            <footer className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2">
                        <div
                            className="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16"
                        >
                            <div className="block text-teal-600 lg:hidden">

                            </div>

                            <div className="mt-8 space-y-4 lg:mt-0">
                                <span className="hidden h-1 w-10 rounded bg-gradient-to-r from-black to-[#403d39] lg:block"></span>
                                <div>
                                    <h2 className="text-2xl font-medium text-gray-900">
                                        Request a quote
                                    </h2>

                                    <p className="mt-4 max-w-lg text-gray-500">

                                        You can ask about my services or quote your application based on your requirements.
                                    </p>
                                </div>

                                <form className="mt-6 w-full">
                                    <label htmlFor="UserEmail" className="sr-only"> Email </label>

                                    <div
                                        className="rounded-md border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4"
                                    >
                                        <input
                                            type="email"
                                            id="UserEmail"
                                            placeholder="john@rhcp.com"
                                            className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                                        />

                                        <button
                                            className="mt-1 w-full rounded bg-gradient-to-r from-black to-[#7a756e] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0"
                                        >
                                            Send
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="py-8 lg:py-16 lg:pe-16">
                            <div className='max-lg:hidden'>
                                <img
                                    src={TransactSvgBlack}
                                    alt="My Icon"
                                    className="w-12 h-12 ml-2 cursor-pointer"
                                ></img>
                            </div>


                            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                                <div>
                                    <p className="font-medium text-gray-900">Services</p>

                                    <ul className="mt-6 space-y-4 text-sm">
                                        <li>
                                            <a className="text-gray-700 transition hover:opacity-75"> UI/UX Design </a>
                                        </li>

                                        <li>
                                            <a className="text-gray-700 transition hover:opacity-75"> Advice on design and requirements </a>
                                        </li>

                                        <li>
                                            <a className="text-gray-700 transition hover:opacity-75"> Frontend development </a>
                                        </li>

                                        <li>
                                            <a className="text-gray-700 transition hover:opacity-75"> Backend development </a>

                                        </li>

                                        <li>
                                            <a className="text-gray-700 transition hover:opacity-75"> Backend integrations </a>

                                        </li>
                                    </ul>
                                </div>




                            </div>

                            <div className="mt-8 border-t border-gray-100 pt-8">
                                <ul className="flex flex-wrap gap-4 text-xs">
                                    <li>
                                        <a className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-500 transition hover:opacity-75"> Cookies </a>
                                    </li>
                                </ul>

                                <p className="mt-8 text-xs text-gray-500">&copy; 2024. Angelica Julieth Toloza Franco. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )

}

export default Footer;