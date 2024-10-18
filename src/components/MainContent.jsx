


import React, { useState, useEffect } from 'react';


function Hero() {



  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('./landingPage/Homepage-Banner.svg')" }}
      id="home"
      aria-label="home"
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center p-10">
       
          <div className="text-white">
            <h1 className="text-4xl font-extrabold leading-tight">
            One of the leading Inland Container Depots (ICD)
            </h1>
            <p className="mt-4 text-xl font-medium">
            Recognized as a leading inland container depot, Sanjvik Terminals sets the standard for excellence
            </p>
          
          </div>
      
      </div>
    </section>
  );
}

export default Hero;


