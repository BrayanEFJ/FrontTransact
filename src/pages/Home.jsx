import React, { useRef } from 'react';
import { NavBar } from '../components/NavBar';
import TimeLine from '../components/Timeline.jsx';
import Footer from '../components/Footer.jsx';
import HeroSection from '../components/HeroSection.jsx';
import InfoSection from '../components/InfoSection.jsx';
import DigitalWalletSection from '../components/DigitalWalletSection.jsx';
import ContactSection from '../components/ContactSection.jsx';

const Home = () => {
  const aboutSectionRef = useRef(null);
  const featuresSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const scrollToSection = (section) => {
    const sectionRef =
      section === 'about' ? aboutSectionRef.current :
      section === 'features' ? featuresSectionRef.current :
      section === 'contact' ? contactSectionRef.current : null;

    if (sectionRef) {
      if (section === 'contact') {
        // Desplazamiento sin ajuste para la sección de contacto
        window.scrollTo({
          top: sectionRef.offsetTop,
          behavior: 'smooth'
        });
      } else {
        // Desplazamiento ajustado para las otras secciones
        const navbarHeight = document.querySelector('nav').offsetHeight; // Obtiene la altura del navbar
        const sectionPosition = sectionRef.offsetTop - navbarHeight; // Desplazamiento ajustado

        window.scrollTo({
          top: sectionPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      <NavBar scrollToSection={scrollToSection} />
      <HeroSection />
      <InfoSection />
      <TimeLine ref={featuresSectionRef} />
      <DigitalWalletSection ref={aboutSectionRef} />
      <ContactSection ref={contactSectionRef} />
      <Footer />
    </>
  );
};

export default Home;
