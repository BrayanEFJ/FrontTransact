import React from 'react';
import VisaLogo from '../assets/visalogo.png';
import TransactSvg from '../assets/logo_transact_sinfondo.png';

const NotFound = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className='bg-black flex flex-row w-full h-screen items-center justify-center text-white overflow-hidden'>
      <div className="relative w-full max-w-md aspect-[1.58/1] mx-auto transform scale-75 sm:scale-90 md:scale-100 transition-transform duration-300 mb-8">
        <div className="absolute inset-0 bg-gradient-to-l from-red-700 to-red-500 p-6 rounded-lg shadow-2xl transform -rotate-12 transition-transform duration-300 ease-in-out flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-semibold">
              <img
                src={TransactSvg}
                alt="Transact Logo"
                className="w-10 h-10 cursor-pointer"
              />
            </div>
            <div className="text-lg font-semibold">
              Not found
            </div>
          </div>
          <div className="flex justify-center items-center flex-grow">
            <span className='text-7xl font-bold sm:text-8xl'>404</span>
          </div>
          <div className="flex justify-between items-center text-lg font-semibold">
            <div>Transact</div>
            <img
              src={VisaLogo}
              alt="Visa Logo"
              className="w-14 h-8 cursor-pointer"
            />
          </div>
        </div>
      </div>
      {/* <div className="text-center mb-6 mt-10">
        <span className="text-lg sm:text-xl">
          Ups, al parecer esta página no existe, Aun...
        </span>
      </div>
      <button 
        onClick={handleGoBack}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Volver atrás
      </button> */}
    </div>
  );
};

export default NotFound;