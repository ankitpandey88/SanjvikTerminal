

// import React, { useState } from 'react';
// import { FaTruck, FaTrain, FaPlane, FaShip, FaArrowLeft, FaArrowRight, FaBuilding, FaMapMarked, FaNetworkWired } from 'react-icons/fa';

// const OurFacility = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const facilities = [
//     {
//       icon: <FaBuilding className="text-orange-600 text-5xl mb-4" />,
//       title: "Strategic Location",
//       description: "Sanjvik Terminals Pvt. Ltd. benefits from a strategic position within India's key industrial areas, offering exceptional connectivity."
//     },
//     {
//       icon: <FaMapMarked className="text-orange-600 text-5xl mb-4" />,
//       title: "Streamlined Cargo Movement",
//       description: "Our facility is designed to streamline cargo movement, ensuring fast and efficient delivery."
//     },
//     {
//       icon: <FaNetworkWired className="text-orange-600 text-5xl mb-4" />,
//       title: "Robust Transportation Network",
//       description: "Our robust network of road, rail, port, and airport connections enhances our ability to serve as a vital hub for businesses across India."
//     },
//     {
//       icon: <FaTruck className="text-orange-600 text-5xl mb-4" />,
//       title: "Road Connectivity",
//       description: "ICD Bawal leverages its prime location with seamless connectivity directly from the highway to the terminal."
//     },
//     {
//       icon: <FaTrain className="text-orange-600 text-5xl mb-4" />,
//       title: "Rail Access",
//       description: "Our facility is strategically linked to rail networks for efficient cargo transport."
//     },
//     {
//       icon: <FaPlane className="text-orange-600 text-5xl mb-4" />,
//       title: "Airport Proximity",
//       description: "Close proximity to major airports ensures rapid air freight services."
//     },
//     {
//       icon: <FaShip className="text-orange-600 text-5xl mb-4" />,
//       title: "Port Connectivity",
//       description: "Our port connections enhance our logistics capabilities for international shipping."
//     }
//   ];

//   const nextFacilities = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 3) % facilities.length);
//   };

//   const prevFacilities = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 3 + facilities.length) % facilities.length);
//   };

//   return (
//     <section className="bg-white py-10">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-orange-600 text-center mb-6">Our Facility</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {facilities.slice(currentIndex, currentIndex + 3).map((facility, index) => (
//             <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
//               {facility.icon}
//               <h3 className="text-xl font-semibold mt-4">{facility.title}</h3>
//               <p className="text-gray-700 mt-2">{facility.description}</p>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-between mt-6">
//           <button onClick={prevFacilities} className="flex items-center justify-center text-orange-600">
//             <FaArrowLeft className="mr-1" />
       
//           </button>
//           <button onClick={nextFacilities} className="flex items-center justify-center text-orange-600">
//             <FaArrowRight className="ml-12" />
          
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurFacility;


import React, { useState, useEffect, useRef } from 'react';
import { FaTruck, FaTrain, FaPlane, FaShip, FaArrowLeft, FaArrowRight, FaBuilding, FaMapMarked, FaNetworkWired } from 'react-icons/fa';

const OurFacility = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef(null);

  const facilities = [
    {
      icon: <FaBuilding className="text-orange-600 text-5xl mb-4" />,
      title: "Strategic Location",
      description: "Sanjvik Terminals Pvt. Ltd. benefits from a strategic position within India's key industrial areas, offering exceptional connectivity."
    },
    {
      icon: <FaMapMarked className="text-orange-600 text-5xl mb-4" />,
      title: "Streamlined Cargo Movement",
      description: "Our facility is designed to streamline cargo movement, ensuring fast and efficient delivery."
    },
    {
      icon: <FaNetworkWired className="text-orange-600 text-5xl mb-4" />,
      title: "Robust Transportation Network",
      description: "Our robust network of road, rail, port, and airport connections enhances our ability to serve as a vital hub for businesses across India."
    },
    {
      icon: <FaTruck className="text-orange-600 text-5xl mb-4" />,
      title: "Road Connectivity",
      description: "ICD Bawal leverages its prime location with seamless connectivity directly from the highway to the terminal."
    },
    {
      icon: <FaTrain className="text-orange-600 text-5xl mb-4" />,
      title: "Rail Access",
      description: "Our facility is strategically linked to rail networks for efficient cargo transport."
    },
    {
      icon: <FaPlane className="text-orange-600 text-5xl mb-4" />,
      title: "Airport Proximity",
      description: "Close proximity to major airports ensures rapid air freight services."
    },
    {
      icon: <FaShip className="text-orange-600 text-5xl mb-4" />,
      title: "Port Connectivity",
      description: "Our port connections enhance our logistics capabilities for international shipping."
    }
  ];

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollWidth = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const progress = (scrollLeft / scrollWidth) * 100;
      setScrollProgress(progress);
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="bg-white py-10 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-orange-600 text-center mb-6">Our Facility</h2>

        <div className="relative">
          {/* Arrow Buttons */}
          {/* <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-600 text-white p-2 rounded-full shadow-lg z-10"
          >
            <FaArrowLeft className="text-xl" />
          </button>
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-600 text-white p-2 rounded-full shadow-lg z-10"
          >
            <FaArrowRight className="text-xl" />
          </button> */}

          {/* Facilities Horizontal Scroll */}
          <div 
            ref={scrollContainerRef} 
            className="flex space-x-4 overflow-x-auto  scrollbar-hide py-6"
            style={{ scrollBehavior: 'smooth'  }}
          >
            {facilities.map((facility, index) => (
              <div 
                key={index} 
                className="bg-gray-100 p-6 rounded-lg shadow transition-transform transform hover:scale-105 flex-shrink-0 w-72"
              >
                {facility.icon}
                <h3 className="text-xl font-semibold mt-4">{facility.title}</h3>
                <p className="text-gray-700 mt-2">{facility.description}</p>
              </div>
            ))}
          </div>
          
          {/* Progress Bar */}
          {/* <div className="w-full bg-gray-300 h-2 mt-4 rounded-full">
            <div 
              className="bg-orange-600 h-2 rounded-full" 
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default OurFacility;
