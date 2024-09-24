



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


import React, { useState } from 'react';
import { FaRoad, FaShip, FaPlane, FaTrain } from 'react-icons/fa';

const StrategicLocation = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track the hovered card index

  const connectivityOptions = [
    {
      icon: <FaShip className="text-white text-4xl" />,
      title: 'Proximity to Major Ports',
      description:
        'Exceptional connectivity to major ports such as Mundra, Pipavav, and JNPT, facilitating seamless cargo movement.',
    },
    {
      icon: <FaPlane className="text-white text-4xl" />,
      title: 'Air Cargo Efficiency',
      description:
        'Close proximity to Indira Gandhi International Airport (DEL) enhances air freight handling efficiency.',
    },
    {
      icon: <FaRoad className="text-white text-4xl" />,
      title: 'Highway Access',
      description:
        'Located near NH-48 and NH-71, providing easy road access to northern and western India.',
    },
    {
      icon: <FaTrain className="text-white text-4xl" />,
      title: 'Railway Connectivity',
      description:
        'Direct connectivity to the Western Dedicated Freight Corridor (WDFC) and Indian Railways ensures swift rail transport.',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-100 to-white py-16">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Strategic Location
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-12 text-center max-w-3xl mx-auto">
          Our facility's strategic location within the Haryana State Industrial
          and Infrastructure Development Corporation (HSIIDC) industrial estate
          is close to the Delhi-Mumbai Industrial Corridor (DMIC). This provides
          seamless access to major ports, airports, highways, and railways,
          enabling efficient handling of containers, coils, and auto cargo with
          ease.
        </p>

        {/* Connectivity Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {connectivityOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg transition-all transform hover:scale-105"
              onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on mouse enter
              onMouseLeave={() => setHoveredIndex(null)}  // Reset hovered index on mouse leave
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                border: `8px solid ${
                  hoveredIndex === index ? '#ff8c00' : '#f3f4f6'
                }`, // Change border color on hover
                transition: 'all 0.3s',
                minHeight: '15rem', // Minimum height, but will grow with content
                height: 'auto', // Let the height auto-adjust based on content
              }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-orange-500 p-4 rounded-full">
                  {option.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {option.title}
              </h3>
              <p className="text-gray-600 text-center mt-4">
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicLocation;
