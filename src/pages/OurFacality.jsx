


// import React, { useState, useEffect, useRef } from 'react';
// import { FaTruck, FaTrain, FaPlane, FaShip, FaBuilding, FaMapMarked, FaNetworkWired } from 'react-icons/fa';
// import Footer from '../components/Footer';

// const OurFacilities = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [ismodelOpen, setIsmodelOpen] = useState(false);
//   const [currentFacility, setCurrentFacility] = useState(null);
//   const scrollContainerRef = useRef(null);
//   const autoSlideIntervalRef = useRef(null);

//   const facilities = [
//     {
//       icon: <FaBuilding className="text-[#00308F] text-6xl mb-4" />,
//       title: "Strategic Location",
//       description: "Sanjvik Terminals Pvt. Ltd. benefits from a strategic position within India's key industrial areas, offering exceptional connectivity.",
//       image: "/landingPage/landing1.png",
//       detail: "Located at the heart of India's industrial hubs, our facility ensures easy access to key markets, suppliers, and transport infrastructure, optimizing logistics and reducing transit times."
//     },
//     {
//       icon: <FaMapMarked className="text-[#00308F] text-6xl mb-4" />,
//       title: "Streamlined Cargo Movement",
//       description: "Our facility is designed to streamline cargo movement, ensuring fast and efficient delivery.",
//       image: "/landingPage/vision.jpg",
//       detail: "Our streamlined cargo movement system reduces handling times and increases efficiency, enabling faster turnarounds and lower operational costs."
//     },
//     {
//       icon: <FaNetworkWired className="text-[#00308F] text-6xl mb-4" />,
//       title: "Robust Transportation Network",
//       description: "Our robust network of road, rail, port, and airport connections enhances our ability to serve as a vital hub for businesses across India.",
//       image: "/landingPage/landing3.png",
//       detail: "Our integrated network offers seamless transitions between different modes of transport, ensuring uninterrupted movement of goods across the country."
//     },
//     {
//       icon: <FaTruck className="text-[#00308F] text-6xl mb-4" />,
//       title: "Road Connectivity",
//       description: "ICD Bawal leverages its prime location with seamless connectivity directly from the highway to the terminal.",
//       image: "/landingPage/landing4.png",
//       detail: "Our direct access to national highways enables quick and easy transport, minimizing delays and reducing transport costs."
//     },
//     {
//       icon: <FaTrain className="text-[#00308F] text-6xl mb-4" />,
//       title: "Rail Access",
//       description: "Our facility is strategically linked to rail networks for efficient cargo transport.",
//       image: "/landingPage/landing5.png",
//       detail: "Our rail connectivity allows for bulk cargo transport over long distances, reducing costs and providing a reliable transport solution."
//     },
//     {
//       icon: <FaPlane className="text-[#00308F] text-6xl mb-4" />,
//       title: "Airport Proximity",
//       description: "Close proximity to major airports ensures rapid air freight services.",
//       image: "/landingPage/port.jpg",
//       detail: "With major airports nearby, we can offer expedited air freight services, making it ideal for time-sensitive shipments."
//     },
//     {
//       icon: <FaShip className="text-[#00308F] text-6xl mb-4" />,
//       title: "Port Connectivity",
//       description: "Our port connections enhance our logistics capabilities for international shipping.",
//       image: "/landingPage/truck-1.jpg",
//       detail: "Our access to major ports facilitates international trade, providing a cost-effective and efficient solution for global shipping."
//     }
//   ];

//   const handleClosemodel = () => {
//     setIsmodelOpen(false);
//   };

//   const scrollToIndex = (index) => {
//     const scrollAmount = index * 300; // Adjust 300 to card width if necessary
//     scrollContainerRef.current.scrollTo({
//       left: scrollAmount,
//       behavior: 'smooth'
//     });
//   };

//   const startAutoSlide = () => {
//     autoSlideIntervalRef.current = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % facilities.length);
//     }, 4000);
//   };

//   const stopAutoSlide = () => {
//     clearInterval(autoSlideIntervalRef.current);
//   };

//   useEffect(() => {
//     startAutoSlide();

//     return () => stopAutoSlide();
//   }, [facilities.length]);

//   useEffect(() => {
//     scrollToIndex(currentIndex);
//   }, [currentIndex]);

//   const scrollLeft = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? facilities.length - 1 : prevIndex - 1));
//   };

//   const scrollRight = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % facilities.length);
//   };

//   return (
//     <div>
//       {/* Hero Banner */}
//       <section
//         className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center"
//         style={{ backgroundImage: "url('./Banners/Our Facility.svg')" }}
//         id="facility"
//         aria-label="our facility"
//       >
//         <div className="absolute inset-0 bg-black opacity-30"></div>
//         <div className="relative z-10 text-center p-5 max-w-4xl mx-auto">
//           <h1 className="text-4xl md:text-6xl  mb-60 font-extrabold text-white leading-tight">Our Facility</h1>
//         </div>
//       </section>

//       <div className="p-6 md:p-10 text-center">
//         <p className="text-lg md:text-xl text-gray-700 ">
//           Our Facility
//           Sanjvik Terminals Pvt. Ltd. benefits from a strategic position within India's key industrial areas, offering exceptional connectivity. With its prime location and well-established transportation links, the facility is designed to streamline cargo movement, ensuring fast and efficient delivery. Our robust network of road, rail, port and airport connections enhances our ability to serve as a vital hub for businesses across India, making Sanjvik Terminals a preferred choice for logistics solutions. ICD Bawal leverage its prime location with seamless connectivity directly from the highway to the terminal. One of its advantages is the absence of "No Entry" restrictions, ensuring that vehicles can move freely and without delays both when entering and exiting the terminal.
//         </p>
//       </div>

        

//       {/* Facilities Section */}
//       <section className="bg-white py-10">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl md:text-5xl font-bold text-[#00308F] text-center mb-8">Facilities Overview</h2>

//           <div className="relative" onMouseEnter={stopAutoSlide} onMouseLeave={startAutoSlide}>
//             {/* Scroll buttons */}
//             <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 transform -translate-x-[2.5rem] bg-[#002D62] text-white rounded-full p-3 z-10">
//               &#8249;
//             </button>
//             <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2  transform -translate-x-[-2.5rem]  bg-[#002D62] text-white rounded-full p-3 z-10">
//               &#8250;
//             </button>

//             <div ref={scrollContainerRef} className="flex space-x-6 overflow-x-hidden py-6">
//               {facilities.map((facility, index) => (
//                 <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex-shrink-0 w-80 cursor-pointer">
//                   {facility.icon}
//                   <h3 className="text-xl font-semibold mt-4 text-[#00308F]">{facility.title}</h3>
//                   <p className="text-gray-700 mt-2">{facility.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default OurFacilities;


import { FaTruck, FaTrain, FaPlane, FaShip, FaRoad, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../components/Footer';

const OurFacilities = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('./Banners/Our Facility.svg')" }}
        id="facility"
        aria-label="our facility"
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center p-5 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl mb-60 font-extrabold text-white leading-tight">Our Facility</h1>
        </div>
      </section>

      {/* Dynamic Information Section */}
      <div className="p-6 md:p-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00308F] mb-6">Why Choose Sanjvik Terminals Pvt. Ltd.?</h2>
          <p className="text-lg md:text-xl text-gray-700">
            Sanjvik Terminals is strategically positioned within India's industrial hubs, offering excellent connectivity and robust transport infrastructure. We streamline logistics and ensure rapid, efficient cargo movement, making us the preferred choice for businesses across India.
          </p>
        </div>

        {/* Facilities Overview with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Facility 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <FaMapMarkerAlt className="text-[#00308F] text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-[#00308F] mb-3">Strategic Location</h3>
            <p className="text-gray-700">
              Located at the heart of India's key industrial zones, we offer unmatched access to vital markets and supply chains, ensuring reduced transit times.
            </p>
          </div>

          {/* Facility 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <FaTruck className="text-[#00308F] text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-[#00308F] mb-3">Road Connectivity</h3>
            <p className="text-gray-700">
              Seamless connectivity with national highways allows quick transportation with no entry restrictions, reducing delays and cutting transport costs.
            </p>
          </div>

          {/* Facility 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <FaTrain className="text-[#00308F] text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-[#00308F] mb-3">Rail Access</h3>
            <p className="text-gray-700">
              Direct rail connections enable bulk transport over long distances, ensuring cost-effective solutions and reliable cargo transit.
            </p>
          </div>

          {/* Facility 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <FaPlane className="text-[#00308F] text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-[#00308F] mb-3">Airport Proximity</h3>
            <p className="text-gray-700">
              Close proximity to major airports enables rapid air freight services, ideal for time-sensitive shipments requiring speedy delivery.
            </p>
          </div>

          {/* Facility 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <FaShip className="text-[#00308F] text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-[#00308F] mb-3">Port Connectivity</h3>
            <p className="text-gray-700">
              Efficient port connections streamline international shipping, enhancing our global logistics capabilities for overseas markets.
            </p>
          </div>

          {/* Facility 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <FaRoad className="text-[#00308F] text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-[#00308F] mb-3">No Entry Restrictions</h3>
            <p className="text-gray-700">
              With no "No Entry" restrictions, vehicles can move freely into and out of the terminal, avoiding delays and maintaining efficient operations.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OurFacilities;
