


import React from 'react';
import { FaRoad, FaShip, FaTrain } from 'react-icons/fa';
import Footer from '../components/Footer';

const MultimodelTransport = () => {
  const offerings = [
    "Optimized transit routes",
    "Linkage with FOIS to provide transparency",
    "Cross-model expertise",
    "Flexible scheduling",
    "Enhanced infrastructure utilization",
    "Dynamic load management",
    "Comprehensive logistics integration",
    "Efficient intermodel hubs",
    "Customized freight solutions",
    "Dedicated customer support",
  ];

  return (

    <div>
      <div className="p-5 flex flex-col items-center">
      <h1 className="text-4xl  text-[#00308F] font-bold mb-5">Multi-model Transportation</h1>
      <p className="text-center mb-5">
        At Sanjvik Terminals, we specialize in offering comprehensive multi-model transportation solutions, seamlessly integrating road, rail, and sea transport to meet the unique needs of our customers. This integrated approach allows us to offer flexible and cost-effective solutions that optimize logistics operations. Our strategic location and advanced infrastructure enable us to ensure smooth transitions between different modes of transport. One of the key advantages of our multi-model transportation service is our ability to provide seamless first-mile and last-mile connectivity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {offerings.map((offering, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-5 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center mb-3">
              {index === 0 && <FaRoad className="text-blue-500 text-3xl mr-2" />}
              {index === 1 && <FaShip className="text-blue-500 text-3xl mr-2" />}
              {index === 2 && <FaTrain className="text-blue-500 text-3xl mr-2" />}
              {/* Add more icons based on the index or offering if desired */}
              <h2 className="font-semibold">{offering}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
    
    
  );
};

export default MultimodelTransport;
