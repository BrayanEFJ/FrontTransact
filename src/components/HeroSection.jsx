import React, { useState } from 'react';
import VisaLogo from '../assets/visalogo.webp';
import TransactSvg from '../assets/logo_transact_sinfondo.webp';
import ChoosecolorButton from '../components/ChooseColorButton.jsx';
import { useTranslation } from 'react-i18next';



const HeroSection = () => {
    const [selectedColor, setSelectedColor] = useState('from-green-500 to-green-700');
    const { t } = useTranslation();

    const changeColor = (color) => {
        setSelectedColor(color);
    };

    return (
        <div className='flex flex-wrap w-full min-h-screen text-white lg:flex-row bg-black justify-center' >
            <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-10">
                <div className="lg:w-1/2 mb-12 lg:mb-0 max-xl:mx-4 max-lg:mt-28">
                    <div className="flex items-center mb-4">
                        <span className="bg-gray-100 text-gray-800 text-sm font-medium p-4 py-1 rounded-full mr-2">{t('hero_news')}</span>
                        <span className="text-gray-200">{t('hero_version')}</span>
                    </div>
                    <span className="text-5xl font-bold mb-6">{t('hero_title')}</span>
                    <p className="text-xl text-gray-200 mb-8">{t('hero_description')}</p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-white text-black px-6 py-3 rounded-lg font-medium">{t('get_started')}</button>
                        <button className="text-gray-200 font-medium flex items-center">
                            {t('learn_more')} <span className="ml-2">→</span>
                        </button>
                    </div>
                </div>

                <div className="lg:w-1/2 p-8 flex flex-col justify-center items-center w-full rounded-lg space-y-8">
                    <div className="relative w-full max-w-md mb-8 flex justify-center">
                        <div className="bg-gradient-to-r from-gray-700 to-gray-500 p-6 rounded-lg shadow-2xl w-full max-w-md transform -rotate-12 transition-transform duration-300 ease-in-out absolute max-sm:hidden">
                            <CardContent />
                        </div>
                        <div className={`bg-gradient-to-r ${selectedColor} p-6 rounded-lg shadow-2xl w-full max-w-md transform transition-transform duration-300 ease-in-out max-sm:max-w-72`}>
                            <CardContent />
                        </div>
                    </div>
                    <div className='mx-6 text-center space-y-3'>
                        <div className="flex space-x-4 justify-center">
                            <ChoosecolorButton color="red" onClick={() => changeColor('from-red-500 to-red-700')}></ChoosecolorButton>
                            <ChoosecolorButton color="blue" onClick={() => changeColor('from-blue-500 to-blue-700')}></ChoosecolorButton>
                            <ChoosecolorButton color="green" onClick={() => changeColor('from-green-500 to-green-700')}></ChoosecolorButton>
                            <ChoosecolorButton color="orange" onClick={() => changeColor('from-orange-500 to-orange-700')}></ChoosecolorButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

const CardContent = () => (
    <>
        <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-2xl font-semibold">
                <img
                    src={TransactSvg}
                    alt="My Icon"
                    className="w-10 h-10 cursor-pointer"
                />
            </div>
            <div className="text-lg font-semibold items-center">
                <div>Digital Debit</div>
            </div>
        </div>

        <div className="flex mt-10 justify-between w-full max-sm:flex-col md:flex-row">
            <div className="sm:w-full md:w-3/5">
                <div className="text-lg font-semibold">5263 8659 3457 6211</div>
                <div className="text-sm mt-2">Brayan Figueroa</div>
            </div>
            <div className="flex justify-end sm:w-full lg:w-2/5 mt-4 lg:mt-0">
                <div className="text-lg font-semibold">082</div>
            </div>
        </div>

        <div className="mt-10 flex justify-between items-center text-lg font-semibold">
            <div>Transact</div>
            <img
                src={VisaLogo}
                alt="Visa Logo"
                className="w-14 h-auto cursor-pointer"
            />

        </div>
    </>
);

export default HeroSection;