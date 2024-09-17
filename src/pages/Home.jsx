import React, { useState, useRef, useEffect } from 'react'; import { NavBar } from '../components/NavBar';
import ChoosecolorButton from '../components/ChooseColorButton.jsx';
import TimeLine from '../components/Timeline.jsx';
import Footer from '../components/Footer.jsx';
import TransactSvg from '../assets/logo_transact_sinfondo.png';
import VisaLogo from '../assets/visalogo.png';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Llamada inicial para establecer el tamaño

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const Home = () => {

  const [selectedColor, setSelectedColor] = useState('from-gray-900 via-gray-800 to-gray-700');

  const aboutSectionRef = useRef(null);
  const featuresSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const { height } = useWindowSize();



  // Función para hacer scroll a la sección
  const scrollToSection = (section) => {
    if (section === 'about') {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'features') {
      featuresSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'contact') {
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Función para cambiar el color
  const changeColor = (color) => {
    setSelectedColor(color);
  };



  return (
    <>
      <NavBar scrollToSection={scrollToSection} />

      <div className=' flex flex-wrap w-full min-h-screen text-white lg:flex-row bg-black'>
        <div className='bg-black lg:w-1/2 flex justify-center items-center max-lg:mt-20 flex-col w-full'>
          <div className='space-y-4 mx-6'>
            <div className='text-white rounded-lg font-semibold'>
              <h1 className='text-5xl md:text-6xl'>TransactBEFJ</h1><br />
              <h1 className='text-xl'>This is a space created by you and for you</h1>
              <h1 className='text-xl'>personalize your card</h1>
            </div>
            <div className="flex space-x-4">
              <ChoosecolorButton color="red" onClick={() => changeColor('from-red-500 to-red-700')}></ChoosecolorButton>
              <ChoosecolorButton color="blue" onClick={() => changeColor('from-blue-500 to-blue-700')}></ChoosecolorButton>
              <ChoosecolorButton color="green" onClick={() => changeColor('from-green-500 to-green-700')}></ChoosecolorButton>
              <ChoosecolorButton color="orange" onClick={() => changeColor('from-orange-500 to-orange-700')}></ChoosecolorButton>

            </div>
            <button className="font-semibold p-3 bg-white rounded-full text-black w-36 text-lg">Start now</button>
          </div>
        </div>

        <div className="bg-black lg:w-1/2 p-8 flex justify-center items-center w-full">
          <div className="bg-gradient-to-r from-green-900 to-green-700 p-6 rounded-lg shadow-2xl w-full max-w-md transform sm:-rotate-12 transition-transform duration-300 ease-in-out absolute max-sm:hidden">
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
                alt="My Icon"
                className="w-14 h-8 cursor-pointer"
              />
            </div>
          </div>

          <div className={`bg-gradient-to-r ${selectedColor} p-6 rounded-lg shadow-2xl w-full max-w-md transform transition-transform duration-300 ease-in-out `}>
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
                alt="My Icon"
                className="w-14 h-8 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div ref={featuresSectionRef} className='flex flex-col items-center justify-center min-h-screen w-full bg-black'>
        <div className={`w-full bg-black ${height < 700 ? 'h-40' : 'h-10'}`}></div>
        <div className='flex-grow w-full bg-gradient-to-b from-black to-[#403d39] transition-colors duration-1000 ease-in-out'>
          <TimeLine />
        </div>
      </div>


      <div ref={aboutSectionRef} className='h-screen w-full bg-gradient-to-b  from-[#403d39] to-[#bbb5aa] transition-colors duration-1000 ease-in-out '>
        <h2 className="text-white text-center text-3xl pt-16">This site, Is under construction
        </h2>
      </div>



      <div ref={contactSectionRef} className='h-screen w-full bg-gradient-to-b from-[#bbb5aa] to-[#fffcf2] transition-colors duration-1000 ease-in-out'>
        <h2 className="text-white text-center text-3xl pt-10">Wait for us...</h2>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Home;
