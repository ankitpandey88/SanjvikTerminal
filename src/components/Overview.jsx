


// import React, { useState, useEffect, useRef } from 'react';
// import { FaTruck, FaTrain, FaPlane, FaShip, FaArrowLeft, FaArrowRight, FaBuilding, FaMapMarked, FaNetworkWired } from 'react-icons/fa';

// const OurFacility = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const scrollContainerRef = useRef(null);

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

//   const scrollLeft = () => {
//     scrollContainerRef.current.scrollBy({
//       left: -300,
//       behavior: 'smooth'
//     });
//   };

//   const scrollRight = () => {
//     scrollContainerRef.current.scrollBy({
//       left: 300,
//       behavior: 'smooth'
//     });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollWidth = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
//       const scrollLeft = scrollContainerRef.current.scrollLeft;
//       const progress = (scrollLeft / scrollWidth) * 100;
//       setScrollProgress(progress);
//     };

//     const scrollContainer = scrollContainerRef.current;
//     scrollContainer.addEventListener('scroll', handleScroll);

//     return () => {
//       scrollContainer.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <section className="bg-white py-10 relative">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-orange-600 text-center mb-6">Our Facility</h2>

//         <div className="relative">
      

          
//           <div 
//             ref={scrollContainerRef} 
//             className="flex space-x-4 overflow-x-auto  scrollbar-hide py-6"
//             style={{ scrollBehavior: 'smooth'  }}
//           >
//             {facilities.map((facility, index) => (
//               <div 
//                 key={index} 
//                 className="bg-gray-100 p-6 rounded-lg shadow transition-transform transform hover:scale-105 flex-shrink-0 w-72"
//               >
//                 {facility.icon}
//                 <h3 className="text-xl font-semibold mt-4">{facility.title}</h3>
//                 <p className="text-gray-700 mt-2">{facility.description}</p>
//               </div>
//             ))}
//           </div>
          
         
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurFacility;



import React, { useState, useEffect, useRef } from 'react';
import { FaTruck, FaTrain, FaPlane, FaShip, FaBuilding, FaMapMarked, FaNetworkWired } from 'react-icons/fa';

const OurFacility = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFacility, setCurrentFacility] = useState(null);
  const scrollContainerRef = useRef(null);

  const facilities = [
    {
      icon: <FaBuilding className="text-orange-600 text-5xl mb-4" />,
      title: "Strategic Location",
      description: "Sanjvik Terminals Pvt. Ltd. benefits from a strategic position within India's key industrial areas, offering exceptional connectivity.",
      image: "/landingPage/landing1.png",
      detail: "Located at the heart of India's industrial hubs, our facility ensures easy access to key markets, suppliers, and transport infrastructure, optimizing logistics and reducing transit times."
    },
    {
      icon: <FaMapMarked className="text-orange-600 text-5xl mb-4" />,
      title: "Streamlined Cargo Movement",
      description: "Our facility is designed to streamline cargo movement, ensuring fast and efficient delivery.",
      image: "/landingPage/vision.jpg",
      detail: "Our streamlined cargo movement system reduces handling times and increases efficiency, enabling faster turnarounds and lower operational costs."
    },
    {
      icon: <FaNetworkWired className="text-orange-600 text-5xl mb-4" />,
      title: "Robust Transportation Network",
      description: "Our robust network of road, rail, port, and airport connections enhances our ability to serve as a vital hub for businesses across India.",
      image: "/landingPage/landing3.png",
      detail: "Our integrated network offers seamless transitions between different modes of transport, ensuring uninterrupted movement of goods across the country."
    },
    {
      icon: <FaTruck className="text-orange-600 text-5xl mb-4" />,
      title: "Road Connectivity",
      description: "ICD Bawal leverages its prime location with seamless connectivity directly from the highway to the terminal.",
      image: "/landingPage/landing4.png",
      detail: "Our direct access to national highways enables quick and easy transport, minimizing delays and reducing transport costs."
    },
    {
      icon: <FaTrain className="text-orange-600 text-5xl mb-4" />,
      title: "Rail Access",
      description: "Our facility is strategically linked to rail networks for efficient cargo transport.",
      image: "/landingPage/landing5.png",
      detail: "Our rail connectivity allows for bulk cargo transport over long distances, reducing costs and providing a reliable transport solution."
    },
    {
      icon: <FaPlane className="text-orange-600 text-5xl mb-4" />,
      title: "Airport Proximity",
      description: "Close proximity to major airports ensures rapid air freight services.",
      image: "/landingPage/port.jpg",
      detail: "With major airports nearby, we can offer expedited air freight services, making it ideal for time-sensitive shipments."
    },
    {
      icon: <FaShip className="text-orange-600 text-5xl mb-4" />,
      title: "Port Connectivity",
      description: "Our port connections enhance our logistics capabilities for international shipping.",
      image: "/landingPage/truck-1.jpg",
      detail: "Our access to major ports facilitates international trade, providing a cost-effective and efficient solution for global shipping."
    }
  ];

  const handleCardClick = (facility) => {
    setCurrentFacility(facility);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
    <section className="bg-white py-10 relative animate-section-entry">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-orange-600 text-center mb-6 animate-title-entry">Our Facility</h2>
        
        <div className="relative">
          {/* Scroll buttons */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#002D62] text-white rounded-full p-2 z-10"
          >
            &#8249;
          </button>
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#002D62] text-white rounded-full p-2 z-10"
          >
            &#8250;
          </button>

          <div 
            ref={scrollContainerRef} 
            className="flex space-x-6 overflow-x-auto py-6 custom-scrollbar"
            style={{ scrollBehavior: 'smooth'  }}
          >
            {facilities.map((facility, index) => (
              <div 
                key={index} 
                className="bg-gray-100 p-6 rounded-lg shadow transition-transform transform hover:scale-105 flex-shrink-0 w-72 cursor-pointer  "
                onClick={() => handleCardClick(facility)}
              >
                {facility.icon}
                <h3 className="text-xl font-semibold mt-4">{facility.title}</h3>
                <p className="text-gray-700 mt-2">{facility.description}</p>
              </div>
            ))}
          </div>
          {/* Scroll progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-300 rounded-full">
            <div
              className="h-full bg-[#002D62] rounded-full"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
        </div>
        
        {isModalOpen && currentFacility && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-fade-in">
            <div className="bg-white rounded-lg overflow-hidden w-11/12 md:w-1/2 lg:w-1/3 shadow-lg animate-modal-entry">
              <div className="flex justify-end p-1">
                <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
              </div>
              <div className="p-6 text-center">
                <img src={currentFacility.image} alt={currentFacility.title} className="w-full mb-4 rounded-lg" />
                <h3 className="text-2xl font-semibold mb-2">{currentFacility.title}</h3>
                <p className="text-gray-700 mb-4">{currentFacility.detail}</p>
                <button onClick={handleCloseModal} className="bg-[#002D62] text-white px-6 py-2 rounded-full hover:bg-orange-500 transition">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #f97316; /* Orange color for the scroll thumb */
          border-radius: 10px;
        }
        .modal-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-section-entry {
          animation: slideUp 0.8s ease-out forwards;
        }
        .animate-title-entry {
          animation: slideLeft 0.8s ease-out forwards;
        }
        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideLeft {
          from {
            transform: translateX(-50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-card-entry {
          animation: cardEntry 0.5s ease-out forwards;
        }
        @keyframes cardEntry {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-modal-entry {
          animation: modalEntry 0.5s ease-out forwards;
        }
        @keyframes modalEntry {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default OurFacility;


// import React, { useState, useEffect, useRef } from 'react';
// import { FaTruck, FaTrain, FaPlane, FaShip, FaBuilding, FaMapMarked, FaNetworkWired } from 'react-icons/fa';

// const OurFacility = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentFacility, setCurrentFacility] = useState(null);
//   const scrollContainerRef = useRef(null);

//   const facilities = [
//     {
//       icon: <FaBuilding className="text-orange-600 text-5xl mb-4" />,
//       title: "Strategic Location",
//       description: "Sanjvik Terminals Pvt. Ltd. benefits from a strategic position within India's key industrial areas, offering exceptional connectivity.",
//       image: "/landingPage/landing1.png",
//       detail: "Located at the heart of India's industrial hubs, our facility ensures easy access to key markets, suppliers, and transport infrastructure, optimizing logistics and reducing transit times."
//     },
//     {
//       icon: <FaMapMarked className="text-orange-600 text-5xl mb-4" />,
//       title: "Streamlined Cargo Movement",
//       description: "Our facility is designed to streamline cargo movement, ensuring fast and efficient delivery.",
//       image: "/landingPage/landing2.png",
//       detail: "Our streamlined cargo movement system reduces handling times and increases efficiency, enabling faster turnarounds and lower operational costs."
//     },
//     {
//       icon: <FaNetworkWired className="text-orange-600 text-5xl mb-4" />,
//       title: "Robust Transportation Network",
//       description: "Our robust network of road, rail, port, and airport connections enhances our ability to serve as a vital hub for businesses across India.",
//       image: "/landingPage/landing3.png",
//       detail: "Our integrated network offers seamless transitions between different modes of transport, ensuring uninterrupted movement of goods across the country."
//     },
//     {
//       icon: <FaTruck className="text-orange-600 text-5xl mb-4" />,
//       title: "Road Connectivity",
//       description: "ICD Bawal leverages its prime location with seamless connectivity directly from the highway to the terminal.",
//       image: "/landingPage/landing4.png",
//       detail: "Our direct access to national highways enables quick and easy transport, minimizing delays and reducing transport costs."
//     },
//     {
//       icon: <FaTrain className="text-orange-600 text-5xl mb-4" />,
//       title: "Rail Access",
//       description: "Our facility is strategically linked to rail networks for efficient cargo transport.",
//       image: "/landingPage/landing5.png",
//       detail: "Our rail connectivity allows for bulk cargo transport over long distances, reducing costs and providing a reliable transport solution."
//     },
//     {
//       icon: <FaPlane className="text-orange-600 text-5xl mb-4" />,
//       title: "Airport Proximity",
//       description: "Close proximity to major airports ensures rapid air freight services.",
//       image: "/landingPage/port.jpg",
//       detail: "With major airports nearby, we can offer expedited air freight services, making it ideal for time-sensitive shipments."
//     },
//     {
//       icon: <FaShip className="text-orange-600 text-5xl mb-4" />,
//       title: "Port Connectivity",
//       description: "Our port connections enhance our logistics capabilities for international shipping.",
//       image: "/landingPage/truck-1.jpg",
//       detail: "Our access to major ports facilitates international trade, providing a cost-effective and efficient solution for global shipping."
//     }
//   ];

//   const handleCardClick = (facility) => {
//     setCurrentFacility(facility);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const scrollLeft = () => {
//     scrollContainerRef.current.scrollBy({
//       left: -300,
//       behavior: 'smooth'
//     });
//   };

//   const scrollRight = () => {
//     scrollContainerRef.current.scrollBy({
//       left: 300,
//       behavior: 'smooth'
//     });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollWidth = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
//       const scrollLeft = scrollContainerRef.current.scrollLeft;
//       const progress = (scrollLeft / scrollWidth) * 100;
//       setScrollProgress(progress);
//     };

//     const scrollContainer = scrollContainerRef.current;
//     scrollContainer.addEventListener('scroll', handleScroll);

//     return () => {
//       scrollContainer.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <section className="bg-white py-10 relative animate-section-entry">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-orange-600 text-center mb-6 animate-title-entry">Our Facility</h2>
        
//         <div className="relative">
//           {/* Scroll buttons */}
//           <button 
//             onClick={scrollLeft}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#002D62] text-white rounded-full p-2 z-10 hover:bg-orange-500 transition"
//           >
//             &#8249;
//           </button>
//           <button 
//             onClick={scrollRight}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#002D62] text-white rounded-full p-2 z-10 hover:bg-orange-500 transition"
//           >
//             &#8250;
//           </button>

//           <div 
//             ref={scrollContainerRef} 
//             className="flex space-x-6 overflow-x-auto py-6 custom-scrollbar"
//             style={{ scrollBehavior: 'smooth'  }}
//           >
//             {facilities.map((facility, index) => (
//               <div 
//                 key={index} 
//                 className="bg-gray-100 p-6 rounded-lg  hover:border-4 hover:border-orange-600 flex-shrink-0 w-80 cursor-pointer animate-card-entry hover:rounded-xl"
//                 onClick={() => handleCardClick(facility)}
//               >
//                 {facility.icon}
//                 <h3 className="text-xl font-semibold mt-4">{facility.title}</h3>
//                 <p className="text-gray-700 mt-2">{facility.description}</p>
//               </div>
//             ))}
//           </div>
//           {/* Scroll progress bar */}
//           <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-300 rounded-full">
//             <div
//               className="h-full bg-[#002D62] rounded-full"
//               style={{ width: `${scrollProgress}%` }}
//             ></div>
//           </div>
//         </div>
        
//         {isModalOpen && currentFacility && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-fade-in">
//             <div className="bg-white rounded-lg overflow-hidden w-11/12 md:w-1/2 lg:w-1/3 shadow-lg animate-modal-entry p-6">
//               <div className="flex justify-end">
//                 <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
//               </div>
//               <div className="text-center">
//                 <img src={currentFacility.image} alt={currentFacility.title} className="w-full mb-4 rounded-lg" />
//                 <h3 className="text-2xl font-semibold mb-2">{currentFacility.title}</h3>
//                 <p className="text-gray-700 mb-4">{currentFacility.detail}</p>
//                 <button onClick={handleCloseModal} className="bg-[#002D62] text-white px-6 py-2 rounded-full hover:bg-orange-500 transition">
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
      
//       <style jsx>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           height: 8px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background-color: #f97316; /* Orange color for the scroll thumb */
//           border-radius: 10px;
//         }
//         .modal-fade-in {
//           animation: fadeIn 0.3s ease-in-out;
//         }
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//         .animate-section-entry {
//           animation: slideUp 0.8s ease-out forwards;
//         }
//         .animate-title-entry {
//           animation: slideLeft 0.8s ease-out forwards;
//         }
//         @keyframes slideUp {
//           from {
//             transform: translateY(50px);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//         @keyframes slideLeft {
//           from {
//             transform: translateX(-50px);
//             opacity: 0;
//           }
//           to {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }
//         .animate-card-entry {
//           animation: cardEntry 0.5s ease-out forwards;
//         }
//         @keyframes cardEntry {
//           from {
//             transform: translateY(30px);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//         .animate-modal-entry {
//           animation: modalEntry 0.5s ease-out forwards;
//         }
//         @keyframes modalEntry {
//           from {
//             transform: scale(0.9);
//             opacity: 0;
//           }
//           to {
//             transform: scale(1);
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default OurFacility;

// import React, { useState, useEffect, useRef } from 'react';
// import { FaTruck, FaTrain, FaPlane, FaShip, FaBuilding, FaMapMarked, FaNetworkWired } from 'react-icons/fa';

// const OurFacility = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentFacility, setCurrentFacility] = useState(null);
//   const scrollContainerRef = useRef(null);

//   const facilities = [
//     {
//       icon: <FaBuilding className="text-orange-600 text-5xl mb-4" />,
//       title: "Strategic Location",
//       description: "Sanjvik Terminals Pvt. Ltd. benefits from a strategic position within India's key industrial areas, offering exceptional connectivity.",
//       image: "/landingPage/landing1.png",
//       detail: "Located at the heart of India's industrial hubs, our facility ensures easy access to key markets, suppliers, and transport infrastructure, optimizing logistics and reducing transit times."
//     },
//     {
//       icon: <FaMapMarked className="text-orange-600 text-5xl mb-4" />,
//       title: "Streamlined Cargo Movement",
//       description: "Our facility is designed to streamline cargo movement, ensuring fast and efficient delivery.",
//       image: "/landingPage/landing2.png",
//       detail: "Our streamlined cargo movement system reduces handling times and increases efficiency, enabling faster turnarounds and lower operational costs."
//     },
//     {
//       icon: <FaNetworkWired className="text-orange-600 text-5xl mb-4" />,
//       title: "Robust Transportation Network",
//       description: "Our robust network of road, rail, port, and airport connections enhances our ability to serve as a vital hub for businesses across India.",
//       image: "/landingPage/landing3.png",
//       detail: "Our integrated network offers seamless transitions between different modes of transport, ensuring uninterrupted movement of goods across the country."
//     },
//     {
//       icon: <FaTruck className="text-orange-600 text-5xl mb-4" />,
//       title: "Road Connectivity",
//       description: "ICD Bawal leverages its prime location with seamless connectivity directly from the highway to the terminal.",
//       image: "/landingPage/landing4.png",
//       detail: "Our direct access to national highways enables quick and easy transport, minimizing delays and reducing transport costs."
//     },
//     {
//       icon: <FaTrain className="text-orange-600 text-5xl mb-4" />,
//       title: "Rail Access",
//       description: "Our facility is strategically linked to rail networks for efficient cargo transport.",
//       image: "/landingPage/landing5.png",
//       detail: "Our rail connectivity allows for bulk cargo transport over long distances, reducing costs and providing a reliable transport solution."
//     },
//     {
//       icon: <FaPlane className="text-orange-600 text-5xl mb-4" />,
//       title: "Airport Proximity",
//       description: "Close proximity to major airports ensures rapid air freight services.",
//       image: "/landingPage/port.jpg",
//       detail: "With major airports nearby, we can offer expedited air freight services, making it ideal for time-sensitive shipments."
//     },
//     {
//       icon: <FaShip className="text-orange-600 text-5xl mb-4" />,
//       title: "Port Connectivity",
//       description: "Our port connections enhance our logistics capabilities for international shipping.",
//       image: "/landingPage/truck-1.jpg",
//       detail: "Our access to major ports facilitates international trade, providing a cost-effective and efficient solution for global shipping."
//     }
//   ];

//   const handleCardClick = (facility) => {
//     setCurrentFacility(facility);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const scrollLeft = () => {
//     scrollContainerRef.current.scrollBy({
//       left: -300,
//       behavior: 'smooth'
//     });
//   };

//   const scrollRight = () => {
//     scrollContainerRef.current.scrollBy({
//       left: 300,
//       behavior: 'smooth'
//     });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollWidth = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
//       const scrollLeft = scrollContainerRef.current.scrollLeft;
//       const progress = (scrollLeft / scrollWidth) * 100;
//       setScrollProgress(progress);
//     };

//     const scrollContainer = scrollContainerRef.current;
//     scrollContainer.addEventListener('scroll', handleScroll);

//     return () => {
//       scrollContainer.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <section className="bg-white py-10 relative animate-section-entry">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-orange-600 text-center mb-6 animate-title-entry">Our Facility</h2>
        
//         <div className="relative">
//           {/* Scroll buttons */}
//           <button 
//             onClick={scrollLeft}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#002D62] text-white rounded-full p-2 z-10 hover:bg-orange-500 transition"
//           >
//             &#8249;
//           </button>
//           <button 
//             onClick={scrollRight}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#002D62] text-white rounded-full p-2 z-10 hover:bg-orange-500 transition"
//           >
//             &#8250;
//           </button>

//           <div 
//             ref={scrollContainerRef} 
//             className="flex space-x-6 overflow-x-auto py-6 custom-scrollbar"
//             style={{ scrollBehavior: 'smooth'  }}
//           >
//             {facilities.map((facility, index) => (
//               <div 
//                 key={index} 
//                 className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:rotate-2 hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-orange-600 flex-shrink-0 w-80 cursor-pointer animate-card-entry"
//                 onClick={() => handleCardClick(facility)}
//               >
//                 {facility.icon}
//                 <h3 className="text-xl font-semibold mt-4">{facility.title}</h3>
//                 <p className="text-gray-600 mt-2">{facility.description}</p>
//               </div>
//             ))}
//           </div>
//           {/* Scroll progress bar */}
//           <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-200 rounded-full">
//             <div
//               className="h-full bg-[#002D62] rounded-full"
//               style={{ width: `${scrollProgress}%` }}
//             ></div>
//           </div>
//         </div>
        
//         {isModalOpen && currentFacility && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-fade-in">
//             <div className="bg-white rounded-xl overflow-hidden w-11/12 md:w-1/2 lg:w-1/3 shadow-2xl animate-modal-entry p-6 relative">
//               <button 
//                 onClick={handleCloseModal} 
//                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl transition transform hover:rotate-180"
//               >
//                 &times;
//               </button>
//               <div className="text-center">
//                 <img src={currentFacility.image} alt={currentFacility.title} className="w-full mb-4 rounded-lg shadow" />
//                 <h3 className="text-2xl font-semibold mb-2 text-orange-600">{currentFacility.title}</h3>
//                 <p className="text-gray-700 mb-4">{currentFacility.detail}</p>
//                 <button 
//                   onClick={handleCloseModal} 
//                   className="bg-[#002D62] text-white px-6 py-2 rounded-full hover:bg-orange-500 transition"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
      
//       <style jsx>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           height: 8px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background-color: #f97316; /* Orange color for the scroll thumb */
//           border-radius: 10px;
//         }
//         .modal-fade-in {
//           animation: fadeIn 0.3s ease-in-out;
//         }
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//         .animate-section-entry {
//           animation: sectionEntry 1s ease-out forwards;
//         }
//         @keyframes sectionEntry {
//           from {
//             transform: translateY(50px);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//         .animate-title-entry {
//           animation: titleEntry 1s ease-out forwards;
//         }
//         @keyframes titleEntry {
//           from {
//             transform: translateX(-50px);
//             opacity: 0;
//           }
//           to {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }
//         .animate-card-entry {
//           animation: cardEntry 0.5s ease-out forwards;
//         }
//         @keyframes cardEntry {
//           from {
//             transform: translateY(30px);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//         .animate-modal-entry {
//           animation: modalEntry 0.5s ease-out forwards;
//         }
//         @keyframes modalEntry {
//           from {
//             transform: scale(0.9);
//             opacity: 0;
//           }
//           to {
//             transform: scale(1);
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default OurFacility;
