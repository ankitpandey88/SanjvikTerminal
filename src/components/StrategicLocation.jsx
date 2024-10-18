


// import React, { useEffect, useState } from 'react';
// import { FaRoad, FaShip, FaPlane, FaTrain } from 'react-icons/fa';

// const connectivityOptions = [
//   {
//     icon: <FaShip className="text-[#00308F] text-6xl flex item-center" />,
//     title: 'Proximity Ports',
//     description:
//       'Exceptional connectivity to major ports such as Mundra, Pipavav, and JNPT, facilitating seamless cargo movement.',
//   },
//   {
//     icon: <FaPlane className="text-[#00308F] text-6xl" />,
//     title: 'Air Cargo Efficiency',
//     description:
//       'Close proximity to Indira Gandhi International Airport (DEL) enhances air freight handling efficiency.',
//   },
//   {
//     icon: <FaRoad className="text-[#00308F] text-6xl" />,
//     title: 'Highway Access',
//     description:
//       'Located near NH-48 and NH-71, providing easy road access to northern and western India.',
//   },
//   {
//     icon: <FaTrain className="text-[#00308F] text-6xl" />,
//     title: 'Railway Connectivity',
//     description:
//       'Direct connectivity to the Western Dedicated Freight Corridor (WDFC) and Indian Railways ensures swift rail transport.',
//   },
// ];

// const ServiceSection = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setVisible(true), 100); // Delay to start animation
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="relative bg-cover bg-center h-[100vh] py-8" style={{ backgroundImage: "url('landingPage/location.jpg')" }}>
//       <div className="container mx-auto px-1 text-center">
//         <h1 className="text-5xl font-bold mb-10 text-black">Strategic Location</h1>

//         <div className={`grid grid-cols-1 md:grid-cols-4 mt-20 gap-6 transition-transform ${visible ? 'animate-slide-up' : 'opacity-0'}`}>
//           {connectivityOptions.map((option, index) => (
//             <div key={index} className="bg-white text-center p-6 shadow-lg rounded-md transition-all transform hover:scale-105 hover:border-[#00308F] border-2 border-transparent">
//               <div className="mb-4">{option.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
//               <p className="text-gray-600 mb-4">{option.description}</p>
//               {/* <a href="#" className="text-[#00308F] font-semibold">MORE DETAILS</a> */}
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slide-up {
//           0% {
//             transform: translateY(30px);
//             opacity: 0;
//           }
//           100% {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//         .animate-slide-up {
//           animation: slide-up 0.5s forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ServiceSection;


import React, { useEffect, useState } from 'react';
import { FaRoad, FaShip, FaPlane, FaTrain } from 'react-icons/fa';

const connectivityOptions = [
  {
    icon: <FaShip className="text-[#00308F] text-6xl" />,
    title: 'Proximity Ports',
    description:
      'Exceptional connectivity to major ports such as Mundra, Pipavav, and JNPT, facilitating seamless cargo movement.',
  },
  {
    icon: <FaPlane className="text-[#00308F] text-6xl" />,
    title: 'Air Cargo Efficiency',
    description:
      'Close proximity to Indira Gandhi International Airport (DEL) enhances air freight handling efficiency.',
  },
  {
    icon: <FaRoad className="text-[#00308F] text-6xl" />,
    title: 'Highway Access',
    description:
      'Located near NH-48 and NH-71, providing easy road access to northern and western India.',
  },
  {
    icon: <FaTrain className="text-[#00308F] text-6xl" />,
    title: 'Railway Connectivity',
    description:
      'Direct connectivity to the Western Dedicated Freight Corridor (WDFC) and Indian Railways ensures swift rail transport.',
  },
];

const ServiceSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-[#ecedff] to-[#a9c0d1] py-16 h-auto">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-10 text-[#002D62]">Strategic Location</h1>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 transition-transform ${visible ? 'animate-slide-up' : 'opacity-0'}`}>
          {connectivityOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white text-center p-8 shadow-lg rounded-lg transform transition-all hover:scale-105 hover:shadow-xl hover:border-[#00308F] border-2 border-transparent">
              <div className="mb-6 flex justify-center">{option.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-[#002D62]">{option.title}</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">{option.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for Animation */}
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
