



// import React from 'react';
// import { FaRoad, FaShip, FaPlane, FaTrain } from 'react-icons/fa';

// const StrategicLocation = () => {
//   const connectivityOptions = [
//     {
//       icon: <FaShip className="text-white text-4xl" />,
//       title: 'Proximity to Major Ports',
//       description:
//         'Exceptional connectivity to major ports such as Mundra, Pipavav, and JNPT, facilitating seamless cargo movement.',
//     },
//     {
//       icon: <FaPlane className="text-white text-4xl" />,
//       title: 'Air Cargo Efficiency',
//       description:
//         'Close proximity to Indira Gandhi International Airport (DEL) enhances air freight handling efficiency.',
//     },
//     {
//       icon: <FaRoad className="text-white text-4xl" />,
//       title: 'Highway Access',
//       description:
//         'Located near NH-48 and NH-71, providing easy road access to northern and western India.',
//     },
//     {
//       icon: <FaTrain className="text-white text-4xl" />,
//       title: 'Railway Connectivity',
//       description:
//         'Direct connectivity to the Western Dedicated Freight Corridor (WDFC) and Indian Railways ensures swift rail transport.',
//     },
//   ];

//   return (
//     <section className="bg-gradient-to-br from-gray-100 to-white py-16">
//       <div className="container mx-auto px-6">
//         {/* Title */}
//         <h2 className="text-4xl font-bold text-orange-600 text-center mb-10">
//           Strategic Location
//         </h2>

//         {/* Description */}
//         <p className="text-gray-600 text-lg mb-12 text-center max-w-3xl mx-auto">
//           Our facility's strategic location within the Haryana State Industrial
//           and Infrastructure Development Corporation (HSIIDC) industrial estate
//           is close to the Delhi-Mumbai Industrial Corridor (DMIC). This provides
//           seamless access to major ports, airports, highways, and railways,
//           enabling efficient handling of containers, coils, and auto cargo with
//           ease.
//         </p>

//         {/* Connectivity Options */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {connectivityOptions.map((option, index) => (
//             <div
//               key={index}
//               className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
//             >
//               <div className="flex justify-center mb-4">
//                 <div className="bg-orange-500 p-4 rounded-full">
//                   {option.icon}
//                 </div>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 text-center">
//                 {option.title}
//               </h3>
//               <p className="text-gray-600 text-center mt-4">
//                 {option.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StrategicLocation;



// import React from 'react';
// import { FaRoad, FaShip, FaPlane, FaTrain } from 'react-icons/fa';

// const connectivityOptions = [
//   {
//     icon: <FaShip className="text-orange-500 text-6xl flex item-center" />,
//     title: 'Proximity  Ports',
//     description:
//       'Exceptional connectivity to major ports such as Mundra, Pipavav, and JNPT, facilitating seamless cargo movement.',
//   },
//   {
//     icon: <FaPlane className="text-orange-500 text-6xl" />,
//     title: 'Air Cargo Efficiency',
//     description:
//       'Close proximity to Indira Gandhi International Airport (DEL) enhances air freight handling efficiency Air Cargo Efficiency.',
//   },
//   {
//     icon: <FaRoad className="text-orange-500 text-6xl" />,
//     title: 'Highway Access',
//     description:
//       'Located near NH-48 and NH-71, providing easy road access to northern and western India of Highway Access.',
//   },
//   {
//     icon: <FaTrain className="text-orange-500 text-6xl" />,
//     title: 'Railway Connectivity',
//     description:
//       'Direct connectivity to the Western Dedicated Freight Corridor (WDFC) and Indian Railways ensures swift rail transport.',
//   },
// ];

// const ServiceSection = () => {
//   return (
//     <div className="relative bg-cover bg-center h-[100vh] py-8" style={{ backgroundImage: "url('landingPage/location.jpg')" }}>
//       <div className="container mx-auto px-1 text-center">
      
//         <h1 className="text-5xl font-bold mb-10 text-blue-9000">   Strategic Location</h1>

//         <div className="grid grid-cols-1 md:grid-cols-4 mt-40 gap-6 ">
//           {connectivityOptions.map((option, index) => (
//             <div key={index} className="bg-white text-center p-6 shadow-lg rounded-md shadow transition-transform transform hover:scale-105 flex-shrink-0 w-50">
//               <div className="mb-4">
//                 {option.icon}
//               </div>
//               <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
//               <p className="text-gray-600 mb-4">{option.description}</p>
//               <a href="#" className="text-orange-500 font-semibold">MORE DETAILS</a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceSection;


import React, { useEffect, useState } from 'react';
import { FaRoad, FaShip, FaPlane, FaTrain } from 'react-icons/fa';

const connectivityOptions = [
  {
    icon: <FaShip className="text-orange-500 text-6xl flex item-center" />,
    title: 'Proximity Ports',
    description:
      'Exceptional connectivity to major ports such as Mundra, Pipavav, and JNPT, facilitating seamless cargo movement.',
  },
  {
    icon: <FaPlane className="text-orange-500 text-6xl" />,
    title: 'Air Cargo Efficiency',
    description:
      'Close proximity to Indira Gandhi International Airport (DEL) enhances air freight handling efficiency.',
  },
  {
    icon: <FaRoad className="text-orange-500 text-6xl" />,
    title: 'Highway Access',
    description:
      'Located near NH-48 and NH-71, providing easy road access to northern and western India.',
  },
  {
    icon: <FaTrain className="text-orange-500 text-6xl" />,
    title: 'Railway Connectivity',
    description:
      'Direct connectivity to the Western Dedicated Freight Corridor (WDFC) and Indian Railways ensures swift rail transport.',
  },
];

const ServiceSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100); // Delay to start animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-cover bg-center h-[100vh] py-8" style={{ backgroundImage: "url('landingPage/location.jpg')" }}>
      <div className="container mx-auto px-1 text-center">
        <h1 className="text-5xl font-bold mb-10 text-black">Strategic Location</h1>

        <div className={`grid grid-cols-1 md:grid-cols-4 mt-20 gap-6 transition-transform ${visible ? 'animate-slide-up' : 'opacity-0'}`}>
          {connectivityOptions.map((option, index) => (
            <div key={index} className="bg-white text-center p-6 shadow-lg rounded-md transition-all transform hover:scale-105 hover:border-orange-600 border-2 border-transparent">
              <div className="mb-4">{option.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <a href="#" className="text-orange-500 font-semibold">MORE DETAILS</a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.5s forwards;
        }
      `}</style>
    </div>
  );
};

export default ServiceSection;
