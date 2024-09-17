import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoTransact from '../assets/logo_transact_sinfondo.png'; 



const timelineData = [
    {
        title: 'About Us',
        content: 'At [Company Name], we specialize in creating innovative financial solutions that streamline digital transactions. Our focus is on delivering user-friendly and efficient tools that enhance your financial experience.',
        image: logoTransact
    },
    {
        title: 'Our Mission',
        content: 'Our mission is to elevate the way you manage your finances by offering advanced, reliable solutions. We are dedicated to making financial transactions smoother and more secure, helping you achieve better control over your financial activities.',
        image: logoTransact
    },
    {
        title: 'Our Team',
        content: 'Our team comprises skilled professionals passionate about integrating technology with finance. With a diverse background and expertise, we work together to develop solutions that cater to your financial needs effectively.',
        image: logoTransact
    },
    {
        title: 'Our Products',
        content: 'Explore our suite of cutting-edge financial products designed to simplify transactions and enhance your digital experience. From intuitive wallets to powerful transaction tools, our offerings are crafted to meet the demands of modern financial management.',
        image: logoTransact
    },
    {
        title: 'Contact Us',
        content: 'We are here to assist you with any questions or support you may need. Reach out to us to learn more about how our solutions can benefit you and to explore how we can help you manage your finances more efficiently.',
        image: logoTransact
    }
];

const Timeline = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % timelineData.length);
                    return 0;
                }
                return prevProgress + 1;
            });
        }, 50);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center p-4 lg:mx-20 mx-10  h-screen max-lg:mt-20">
            <div className="flex items-center justify-center w-full lg:w-1/2 h-full ">
                <ul className="relative">
                    {timelineData.map((item, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 0 }}
                            animate={{
                                opacity: index === currentIndex ? 1 : 0.5,
                                y: 0
                            }}
                            transition={{ duration: 0.5 }}
                            className="mb-10 ml-9"
                        >
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white mt-4">
                                <svg
                                    className="w-3 h-3 text-blue-800"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-400">
                                {item.title}
                            </h3>
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ 
                                    opacity: index === currentIndex ? 1 : 0,
                                    height: index === currentIndex ? 'auto' : 0
                                }}
                                transition={{ duration: 0.5 }}
                                className="overflow-hidden"
                            >
                                <p className="mb-4 text-base font-normal text-white">
                                    {item.content}
                                </p>
                            </motion.div>
                        </motion.li>
                    ))}
                </ul>
            </div>
            <div className="w-full lg:w-1/2 mt-4 lg:mt-0 flex items-center justify-center h-full">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={timelineData[currentIndex].image}
                        alt={timelineData[currentIndex].title}
                        className="w-2/3 h-auto max-h-full object-contain"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                    />
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Timeline;