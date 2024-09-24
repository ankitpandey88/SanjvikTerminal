

import React, { useState, useEffect } from 'react';
import { FaBoxOpen, FaShippingFast, FaClipboardCheck, FaCogs, FaUserShield, FaHandshake } from 'react-icons/fa'; // React icons

const AboutSection = () => {
  const images = [
    './landingPage/landing1.png',
    './landingPage/landing5.png',
    './landingPage/landing3.png',
    './landingPage/landing4.png',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // Image carousel logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="section about py-16 bg-gray-50" id="about" aria-label="about">
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-12">
        
        {/* Image Carousel */}
        <figure className="w-full lg:w-1/2 relative shadow-lg transition-transform duration-300 hover:scale-105 mb-8 lg:mb-0">
          <img
            src={images[currentImage]} // Dynamic image source
            alt="About Banner"
            className="w-full h-[400px] lg:h-[450px] object-cover rounded-lg"
            loading="lazy"
          />
        </figure>

        <div className="w-full lg:w-1/2">
          <p className="text-orange-600 uppercase mb-4 text-2xl font-semibold tracking-wide fadeIn">
            Who We Are
          </p>

          <h2 className="text-4xl font-bold mb-6 text-blue-950 fadeIn">
            Sanjvik Terminals Pvt. Ltd.
          </h2>

          <p className="mb-4 text-gray-700 fadeIn">
            Sanjvik Terminals Pvt. Ltd. is a dry port located in Bawal, Haryana. It is one of the leading Inland Container Depots (ICD) in the Northern region of the country, serving as a vital hinterland hub connecting major industrial zones.
          </p>

          {/* Bullet Points Section with React Icons */}
          {isExpanded ? (
            <ul className="space-y-4 text-gray-700 fadeIn">
              <li className="flex items-center">
                <FaBoxOpen className="text-orange-600 mr-3" /> {/* React Icon */}
                Our facility is equipped with state-of-the-art infrastructure, capable of handling high volumes of containers with precision and efficiency.
              </li>
              <li className="flex items-center">
                <FaShippingFast className="text-orange-600 mr-3" /> {/* React Icon */}
                Integrated management systems ensure seamless cargo handling, from efficient movement to timely delivery.
              </li>
              <li className="flex items-center">
                <FaClipboardCheck className="text-orange-600 mr-3" /> {/* React Icon */}
                These systems are continuously monitored and upgraded to keep pace with industry innovations, meeting the demands of the global supply chain.
              </li>
              <li className="flex items-center">
                <FaCogs className="text-orange-600 mr-3" /> {/* React Icon */}
                We prioritize minimizing delays and optimizing safety with an infrastructure engineered for swift processing and secure handling of all goods.
              </li>
              <li className="flex items-center">
                <FaUserShield className="text-orange-600 mr-3" /> {/* React Icon */}
                Our highly trained staff, coupled with cutting-edge technology, ensures smooth and uninterrupted service delivery.
              </li>
              <li className="flex items-center">
                <FaHandshake className="text-orange-600 mr-3" /> {/* React Icon */}
                Sanjvik Terminals is a trusted partner in the logistics landscape, delivering reliable, secure, and efficient services.
              </li>
            </ul>
          ) : (
            <>
              <p className="mb-4 text-gray-700 fadeIn">
                We are equipped with state-of-the-art infrastructure tailored to handle high volumes of containers with precision. Our integrated management systems ensure seamless handling, from the efficient movement of cargo to its timely delivery.
              </p>
            </>
          )}

          {/* Button with Ripple Effect */}
          <button
            onClick={toggleExpand}
            className="btn bg-orange-600 text-white py-2 px-6 mt-6 rounded-full overflow-hidden relative hover:bg-orange-500 focus:outline-none"
          >
            {isExpanded ? 'Show Less' : 'Learn More'}
            <span className="absolute inset-0 bg-white opacity-10 animate-pulse"></span>
          </button>
        </div>
      </div>

      {/* Fade-in Animation */}
      <style jsx>{`
        .fadeIn {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInAnimation 0.7s forwards;
        }

        @keyframes fadeInAnimation {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
