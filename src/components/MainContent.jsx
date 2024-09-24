import React from 'react';

function Hero() {
  return (
    <section
      className="relative min-h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('./landingPage/hero-banner.jpg')" }}
      id="home"
      aria-label="home"
    >
      <div className="container mx-auto">
        <div className="bg-black bg-opacity-60 text-white text-center p-8">
          <h2 className="text-5xl font-bold">
            <span className="text-orange-500 text-6xl">To Every</span> Direction
          </h2>
          <p className="my-5 text-lg">
          Sanjvik Terminals Pvt One of the leading Inland Container Depots (ICD)
          </p>
          <a href="#" className="inline-block border border-white text-lg uppercase py-2 px-6 transition hover:bg-orange-500 hover:border-orange-500">
            View Services
          </a>
          <img src="./landingPage/hero-shape.png" width="116" height="116" loading="lazy" className="absolute z-[-1] animate-move top-24 left-8" alt="shape" />
          <img src="./landingPage/hero-shape.png" width="116" height="116" loading="lazy" className="absolute z-[-1] animate-move bottom-20 right-8" alt="shape" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
