import TransactSvgBlack from '../assets/logo_transact_sinfondo_black.png';
import Perfil from '../assets/perfil.png';
import React, { useState, useEffect, forwardRef } from 'react';


const Footer = () => {

    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission, 
        // such as sending the email to your backend
        console.log('Submitted email:', email);
        setIsSubmitted(true);
        setEmail('');
    };

    return (
        <>


            <footer className="bg-gradient-to-b from-[#fffcf2] to-white">
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

                                <div className="w-full">
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="space-y-2">
                                            <label htmlFor="UserEmail" className="text-sm font-medium text-gray-700"></label>
                                            <label
                                                htmlFor="helper-text"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Email Address
                                            </label>
                                            <div className="flex items-center space-x-2">
                                                <input
                                                    type="email"
                                                    id="helper-text"
                                                    aria-describedby="helper-text-explanation"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none"
                                                    placeholder="yourname@gmail.com"
                                                />
                                                <button
                                                    type="submit"
                                                    className="px-4 py-2 bg-black text-white font-medium text-sm rounded-lg hover:bg-slate-800 "
                                                >
                                                    Send
                                                </button>
                                            </div>
                                            <p
                                                id="helper-text-explanation"
                                                className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                                            >
                                                The first step is the key to change.
                                            </p>
                                        </div>
                                    </form>
                                    {/* {isSubmitted && (
        <Alert className="mt-4 bg-green-100 border-green-400 text-green-700">
            <AlertDescription>
                Thank you for subscribing! We'll keep you updated.
            </AlertDescription>
        </Alert>
    )} */}
                                </div>

                            </div>
                        </div>

                        <div className="py-8">
                            <div className='max-lg:hidden'>
                                <img
                                    src={TransactSvgBlack}
                                    alt="My Icon"
                                    className="w-14 h-14 cursor-pointer rounded-full "
                                ></img>
                            </div>


                            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                                <div>
                                    <p className="font-medium text-gray-900">Services</p>

                                    <ul className="mt-6 space-y-4 text-sm">

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
                                <p className="mt-8 text-xs text-gray-500">&copy; 2024. Brayan Esneider Figueroa Jerez. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )

}

export default Footer;