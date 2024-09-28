import React, { useState, useRef, useEffect } from 'react'; import { NavBar } from '../components/NavBar';
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
    if (section === 'about') {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'features') {
      featuresSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'contact') {
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <NavBar scrollToSection={scrollToSection} />
      <HeroSection></HeroSection>
      <InfoSection></InfoSection>
      <TimeLine ref={featuresSectionRef}/>
      <DigitalWalletSection ref={aboutSectionRef}></DigitalWalletSection>
      <ContactSection ref={contactSectionRef}></ContactSection>
      <Footer></Footer>
    </>
  );
};

export default Home;
