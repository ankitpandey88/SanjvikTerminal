import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Hero from './MainContent';
import AboutSection from './About';
import ServiceSection from './Services';
import Footer from './Footer';
import OurFacility from './Overview';
import StrategicLocation from './StrategicLocation';
import SanjvikOverview from './Vision';
import ProjectSection from './ProjectSection';
import Newsletter from './NewsLatter';
import Testimonial from './Testimonial';
import BlogSection from './Blog';

function LandingPage() {
  return (
    <>
      <div>
        <Hero/>
        <AboutSection/>
        <ServiceSection/>
        <OurFacility/>
        {/* <ProjectSection/> */}
        <StrategicLocation/>
        <SanjvikOverview/>
        {/* <Newsletter/> */}
        <Testimonial/>
        <BlogSection/>
        
        <Footer/>
      </div>
    </>
  );
}

export default LandingPage;