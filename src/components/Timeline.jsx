import React, { useState, useEffect, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import imagen1 from '../assets/prompt1/oneone.webp';
import imagen3 from '../assets/prompt3/threetwo.webp';
import imagen4 from '../assets/prompt4/fourthree.webp';
import imagen5 from '../assets/prompt5/fiveone.webp';
import { Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Timeline = forwardRef((props, ref) => {
    const { t } = useTranslation();

    const timelineData = [
        {
            title: t('about_us_title'),
            content: t('about_us_content'),
            image: imagen1
        },
        {
            title: t('our_team_title'),
            content: t('our_team_content'),
            image: imagen3
        },
        {
            title: t('our_products_title'),
            content: t('our_products_content'),
            image: imagen4
        },
        {
            title: t('contact_us_title'),
            content: t('contact_us_content'),
            image: imagen5
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isXL, setIsXL] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

    // Pre-cargar imágenes y obtener dimensiones máximas
    useEffect(() => {
        const preloadImages = async () => {
            const dimensions = await Promise.all(
                timelineData.map(item => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.src = item.image;
                        img.onload = () => {
                            resolve({
                                width: img.width,
                                height: img.height
                            });
                        };
                    });
                })
            );

            // Encontrar las dimensiones máximas manteniendo el aspect ratio
            const maxDimensions = dimensions.reduce((acc, curr) => {
                return {
                    width: Math.max(acc.width, curr.width),
                    height: Math.max(acc.height, curr.height)
                };
            }, { width: 0, height: 0 });

            setContainerDimensions(maxDimensions);
            setImagesLoaded(true);
        };

        preloadImages();
    }, [timelineData]);

    useEffect(() => {
        const handleResize = () => {
            setIsXL(window.innerWidth >= 1280);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % timelineData.length);
                    return 0;
                }
                return prevProgress + 1;
            });
        }, 100);

        return () => clearInterval(timer);
    }, []);

    const handleTitleClick = (index) => {
        setCurrentIndex(index === currentIndex ? currentIndex : index);
        setProgress(index);
    };

    return (
        <div ref={ref} className='flex flex-col items-center justify-center w-full bg-black pt-10'>
            <div className='flex flex-wrap w-full text-white lg:flex-row bg-gradient-to-b from-black to-[#494641] justify-center'>
                <div className="flex flex-col lg:flex-row items-center justify-center max-xl:p-10 p-4 xl:h-[80vh] max-w-7xl lg:mx-10">
                    <div className="flex items-center justify-center w-full max-lglg:w-1/2 h-full max-lg:flex-wrap">
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
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-slate-700 rounded-full -left-3 ring-8 ring-white mt-1 text-white">
                                        <Info className='h-4 w-4'></Info>
                                    </span>
                                    <h1
                                        className="flex items-center mb-1 text-lg font-semibold text-gray-400 cursor-pointer"
                                        onClick={() => handleTitleClick(index)}
                                    >
                                        {item.title}
                                    </h1>

                                    {isXL ? (
                                        <>
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{
                                                    opacity: index === currentIndex ? 1 : 0,
                                                    height: index === currentIndex ? 'auto' : 0
                                                }}
                                                transition={{ duration: 0.5 }}
                                                className="overflow-hidden"
                                            >
                                            </motion.div>
                                            <p className="mb-4 text-base font-normal text-white">
                                                {item.content}
                                            </p>
                                        </>
                                    ) : (
                                        <>
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{
                                                    opacity: index === currentIndex ? 1 : 0,
                                                    height: index === currentIndex ? 'auto' : 0
                                                }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <p className="mb-4 text-base font-normal text-white">
                                                    {item.content}
                                                </p>
                                            </motion.div>
                                        </>
                                    )}
                                </motion.li>
                            ))}
                        </ul>
                        <div 
                            className="w-full lg:mt-0 flex items-center justify-center relative"
                            style={{
                                minHeight: imagesLoaded ? '500px' : 'auto' // Altura mínima fija
                            }}
                        >
                            <div className="w-full md:w-2/3 relative flex items-center justify-center">
                                {imagesLoaded ? (
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={currentIndex}
                                            src={timelineData[currentIndex].image}
                                            alt={timelineData[currentIndex].title}
                                            className="object-contain rounded-3xl absolute top-0 left-0 w-full h-full"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </AnimatePresence>
                                ) : (
                                    <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded-3xl">
                                        <span className="text-gray-600">Loading...</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Timeline;