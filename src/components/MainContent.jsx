

import React, { useState, useEffect } from 'react';
import { FaShippingFast, FaBoxOpen } from 'react-icons/fa'; // Importing specific icons
import '../style/hero.css'; // Import your CSS file

function Hero() {
  const [showText, setShowText] = useState(false);

  // Trigger the text appearance after 2 seconds when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    return () => clearTimeout(timer); // Clean up timer
  }, []);

  return (
    <section
      className="relative min-h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('./landingPage/hero-banner.jpg')" }}
      id="home"
      aria-label="home"
    >
      <div className="container mx-auto">
        <div className="bg-black bg-opacity-60 text-white text-center p-8 relative">
          {/* <h2 className="text-5xl font-bold">
            <span className="text-orange-500 text-6xl">To Every</span> Direction
          </h2> */}
          <p className="my-5 font-semibold text-4xl">
             One of the leading Inland Container Depots (ICD)
          </p>

          {/* Delayed text with unique pop and bounce effect */}
          {showText && (
            <div className="relative bg-white text-black p-4 rounded-lg shadow-lg mt-5 transition-transform duration-700 ease-out transform scale-100 pop-in">
              <h3 className="text-2xl font-semibold">Efficient Logistics Solutions</h3>
              <p className="mt-2">Seamless Trade & Transport</p>
            </div>
          )}

          {/* Icons with diagonal blink animation */}
          <div className="absolute top-8 right-8">
            <FaShippingFast className="text-[#00308F] blink-icon" size={60} />
          </div>
          <div className="absolute bottom-8 left-8">
            <FaBoxOpen className="text-[#00308F] blink-icon" size={60} />
          </div>
        </div>

        {/* Background shapes */}
        <img
          src="./landingPage/hero-shape.png"
          width="116"
          height="116"
          loading="lazy"
          className="absolute z-[-1] animate-move top-24 left-8"
          alt="shape"
        />
        <img
          src="./landingPage/hero-shape.png"
          width="116"
          height="116"
          loading="lazy"
          className="absolute z-[-1] animate-move bottom-20 right-8"
          alt="shape"
        />
      </div>
    </section>
  );
}

export default Hero;
