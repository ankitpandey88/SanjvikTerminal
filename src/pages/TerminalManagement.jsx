


// import React from 'react';
// import { FaTruck, FaWrench, FaFileAlt } from 'react-icons/fa'; 
// import Footer from '../components/Footer';

// const TerminalManagement = () => {
//   return (
//    <div>
//      <div className="max-w-full mx-auto p-6">
//       {/* Background Image */}
//       <div
//         className="relative bg-cover bg-center h-auto mb-6 fade-in"
//         style={{
//           backgroundImage: "url('/Banners/Terminal Management - Banner.svg')", // Background image URL
//           minHeight: '450px', // Set a minimum height
//         }}
//       >
//         <div className="bg-overlay p-6"> {/* Semi-transparent background */}
//           <h1 className="text-5xl font-bold mb-4 text-center text-white ">Terminal Management</h1>
//         </div>
//       </div>

//       {/* Paragraph inside card */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-6 card hover:scale-105 transform transition-transform duration-300">
//         <p className="mb-6 text-black-1000">
//           With nearly 55% of containerized cargo moving into the hinterlands, the demand for efficient logistics solutions has never been greater. Inland Container Depots (ICDs) have become essential components of the supply chain, serving as vital hubs that facilitate the smooth transfer of goods between various modes of transportation. Recognizing this need, we have established our own Inland Container Depot at Bawal.
//         </p>
//       </div>

//       <h2 className="text-2xl text-[#00308F] font-semibold mb-4 fade-in">Our Offerings:</h2>
      
//       {/* TXR Examination Section */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-6 card hover:scale-105 transform transition-transform duration-300">
//         <h3 className="text-xl font-semibold flex items-center mb-4">
//           <FaFileAlt className="mr-2 text-blue-500" /> TXR Examination
//         </h3>
//         <p className="mb-4 text-black-600">
//           At the terminal, we provide comprehensive TXR Examination services to ensure the safe and reliable movement of rail wagons. The integrity of rail wagons is critical to the seamless transportation of goods, and our expert team is dedicated to maintaining the highest safety standards.
//         </p>
//         <p className="mb-4 text-black-600">
//           Our TXR Inspection Process includes:
//         </p>
//         <ul className="list-disc ml-6 mb-4">
//           <li>Brake System Check</li>
//           <li>Coupling and Buffer Inspection</li>
//           <li>Axle and Wheel Examination</li>
//           <li>Frame and Body Inspection</li>
//           <li>Load Security</li>
//         </ul>
//       </div>

//       {/* Container Repairing Section */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-6 card hover:scale-105 transform transition-transform duration-300">
//         <h3 className="text-xl font-semibold flex items-center mb-4">
//           <FaWrench className="mr-2 text-blue-500" /> Container Repairing
//         </h3>
//         <p className="mb-4 text-black-600">
//           At Sanjvik, we offer comprehensive in-house container repair and maintenance services equipped with advanced technology and equipment. Our dedicated facility is designed to handle a wide range of repair needs, ensuring that containers are maintained to the highest standards.
//         </p>
//       </div>

//       {/* Container Leasing Section */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-6 card hover:scale-105 transform transition-transform duration-300">
//         <h3 className="text-xl font-semibold flex items-center mb-4">
//           <FaTruck className="mr-2 text-blue-500" /> Container Leasing
//         </h3>
//         <p className="mb-4 text-black-600">
//           We offer a range of high-quality containers available for lease. Our container leasing service provides a flexible and cost-effective solution to meet your shipping and storage needs.
//         </p>
//       </div>

//       {/* Images Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="relative group">
//           <img 
//             src="/landingPage/blog3.avif" 
//             alt="TXR Examination" 
//             className="w-full h-64 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300" 
//           />
//           <span className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             TXR Examination
//           </span>
//         </div>
//         <div className="relative group">
//           <img 
//             src="landingPage/port.jpg" 
//             alt="Container Repairing" 
//             className="w-full h-64 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300" 
//           />
//           <span className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             Container Repairing
//           </span>
//         </div>
//         <div className="relative group">
//           <img 
//             src="landingPage/landing5.png" 
//             alt="Container Leasing" 
//             className="w-full h-64 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300" 
//           />
//           <span className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             Container Leasing
//           </span>
//         </div>
//       </div>
//     </div>
//     <Footer/>
//    </div>
//   );
// };

// export default TerminalManagement;

// import React from 'react';
// import { FaTools, FaShippingFast, FaWarehouse } from 'react-icons/fa'; // Importing icons
// import Footer from '../components/Footer';

// const offeringsData = [
//   {
//     title: 'TXR Examination',
//     description:
//       'At the terminal, we provide comprehensive TXR Examination services to ensure the safe and reliable movement of rail wagons. The integrity of rail wagons is critical to the seamless transportation of goods and our expert team is dedicated to maintaining the highest safety standards.',
//     details: [
//       'Brake System Check',
//       'Coupling and Buffer Inspection',
//       'Axle and Wheel Examination',
//       'Frame and Body Inspection',
//       'Load Security',
//     ],
//     icon: <FaTools />,
//   },
//   {
//     title: 'Container Repairing',
//     description:
//       'At Sanjvik, we offer comprehensive in-house container repair and maintenance services equipped with advanced technology and equipment. Our skilled technicians use the latest equipment to perform thorough inspections, repairs and maintenanceAt Sanjvik, we offer comprehensive in-house container repair and maintenance services equipped with advanced technology and equipment. Our dedicated facility is designed to handle a wide range of repair needs, ensuring that containers are maintained to the highest standards. With ample space allocated for these activities, we can efficiently manage and execute repairs, minimizing downtime and ensuring that containers are returned to service promptly. Our skilled technicians use the latest equipment to perform thorough inspections, repairs and maintenance, ensuring the reliability and safety of your containers throughout their operational lifespan..',
//     icon: <FaWarehouse />,
//   },
//   {
//     title: 'Container Leasing',
//     description:
//       'We offer a range of high-quality containers available for lease. Our container leasing service provides a flexible and cost-effective solution to meet your shipping and storage needs. Our leasing facility is designed to accommodate various requirements, from short-term projects to long-term container leasing solutions. With well-maintained containers and efficient service, we ensure that your cargo is securely transported and stored. Our dedicated team works closely with you to provide tailored leasing options, optimizing your supply chain operations and enhancing overall efficiency..',
//     icon: <FaShippingFast />,
//   },
// ];

// const TerminalManagement = () => {
//   return (
//    <div>
//      <div className="bg-gray-100 py-10">
//       {/* Banner Section */}
//       <div className="relative w-full">
//         <img
//           src="/Banners/Terminal Management - Banner.svg"
//           alt="Terminal Management"
//           className="w-full h-96 object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <h1 className="text-white text-5xl font-bold">Terminal Management</h1>
//         </div>
//       </div>
         

//       {/* Offerings Section */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="text-center py-8">
//           <h2 className="text-3xl font-bold text-gray-800">Our Offerings</h2>
//           <p className="text-gray-600 text-lg mt-4">
//           With nearly 55% of containerized cargo moving into the hinterlands, the demand for efficient logistics solutions has never been greater. ICD have become essential components of the supply chain, serving as vital hubs that facilitate the smooth transfer of goods between various modes of transportation. Recognizing this need, we have established our own Inland Container Depot at Bawal.
//           </p>
//         </div>

//         {/* Offerings Cards */}
//         <div className="space-y-10">
//           {offeringsData.map((offering, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-lg rounded-lg p-8 flex items-center space-x-6"
//             >
//               <div className="text-5xl text-blue-500">{offering.icon}</div>
//               <div className="space-y-4">
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   {offering.title}
//                 </h3>
//                 <p className="text-gray-600">{offering.description}</p>
//                 {offering.details && (
//                   <ul className="list-disc pl-5 text-gray-500 space-y-2">
//                     {offering.details.map((detail, idx) => (
//                       <li key={idx}>{detail}</li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     <Footer/>
//    </div>
//   );
// };

// export default TerminalManagement;


// import React, { useEffect, useState } from 'react';
// import { FaTools, FaShippingFast, FaWarehouse } from 'react-icons/fa'; // Importing icons
// import Footer from '../components/Footer';

// const offeringsData = [
//   {
//     title: 'Eco-Friendly TXR Examination',
//     description:
//       'Our Eco-Friendly TXR Examination services ensure the safe and sustainable movement of rail wagons. We focus on preserving the integrity of our ecosystems while maintaining the highest safety standards for transporting goods.',
//     details: [
//       'Eco-Conscious Brake System Check',
//       'Sustainable Coupling and Buffer Inspection',
//       'Environmental Axle and Wheel Examination',
//       'Green Frame and Body Inspection',
//       'Safe Load Security for a Greener Future',
//     ],
//     icon: <FaTools />,
//   },
//   {
//     title: 'Sustainable Container Repairing',
//     description:
//       'At Sanjvik, we provide sustainable in-house container repair and maintenance services. Our advanced technology and eco-friendly practices ensure that containers are kept in optimal condition while minimizing environmental impact.',
//     icon: <FaWarehouse />,
//   },
//   {
//     title: 'Green Container Leasing',
//     description:
//       'We offer a range of eco-friendly containers available for lease. Our container leasing service is designed to provide sustainable and cost-effective solutions for your shipping and storage needs, helping you optimize your supply chain while being kind to the planet.',
//     icon: <FaShippingFast />,
//   },
// ];

// const TerminalManagement = () => {
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     setAnimate(true);
//   }, []);

//   return (
//     <div className="bg-[#ecedff] py-12 min-h-screen">
//       {/* Banner Section */}
//       <div className="relative w-full">
//         <img
//           src="/Banners/Terminal Management - Banner.svg"
//           alt="Terminal Management"
//           className="w-full h-96 object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <h1 className="text-white text-5xl font-bold">Terminal Management</h1>
//         </div>
//       </div>

//       {/* Offerings Section */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
//         <div className="py-8">
//           <h2 className="text-3xl font-bold text-gray-800">Our Earth-Friendly Offerings</h2>
//           <p className="text-gray-800 text-xl mt-4">
//             With nearly 55% of containerized cargo moving into the hinterlands, the demand for sustainable logistics solutions has never been greater. Recognizing this need, we have established our own Inland Container Depot at Bawal, focused on environmentally responsible practices.
//           </p>
//         </div>

//         {/* Offerings Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
//           {offeringsData.map((offering, index) => (
//             <div
//               key={index}
//               className={`bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transform transition-transform hover:scale-105 duration-300 ${animate ? 'fade-in' : ''}`}
//             >
//               <div className="text-5xl text-[#002D62] mb-4">{offering.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 {offering.title}
//               </h3>
//               <p className="text-gray-600 text-center">{offering.description}</p>
//               {offering.details && (
//                 <ul className="list-disc pl-5 text-gray-500 space-y-2 mt-2">
//                   {offering.details.map((detail, idx) => (
//                     <li key={idx}>{detail}</li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       <br/>
//       <Footer />
//     </div>
//   );
// };

// export default TerminalManagement;


import React, { useEffect, useState } from 'react';
import { FaTools, FaShippingFast, FaWarehouse } from 'react-icons/fa'; // Importing icons
import Footer from '../components/Footer';

const offeringsData = [
  {
    title: 'Eco-Friendly TXR Examination',
    description:
      'At our terminal, we provide Eco-Friendly TXR Examination services to ensure the safe and sustainable movement of rail wagons. The integrity of rail wagons is vital for protecting our environment while facilitating the seamless transportation of goods. Our expert team is dedicated to upholding the highest safety and ecological standards.',
    details: [
      'Eco-Conscious Brake System Check',
      'Sustainable Coupling and Buffer Inspection',
      'Nature-Friendly Axle and Wheel Examination',
      'Green Frame and Body Inspection',
      'Load Security for Environmental Safety',
    ],
    icon: <FaTools />,
  },
  {
    title: 'Sustainable Container Repairing',
    description:
      'At Sanjvik, we offer sustainable in-house container repair and maintenance services, equipped with advanced eco-friendly technology. Our skilled technicians are committed to performing thorough inspections, repairs, and maintenance while minimizing environmental impact. Our dedicated facility is designed to handle various repair needs, ensuring that containers are maintained to the highest standards of sustainability.',
    icon: <FaWarehouse />,
  },
  {
    title: 'Green Container Leasing',
    description:
      'We provide a range of high-quality, eco-friendly containers available for lease. Our container leasing service offers a flexible and cost-effective solution that meets your shipping and storage needs while being kind to the Earth. Our leasing facility accommodates various requirements, ensuring your cargo is securely transported and stored, with tailored leasing options that optimize your supply chain operations and promote overall sustainability.',
    icon: <FaShippingFast />,
  },
];

const TerminalManagement = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="bg-[#ecedff] py-10 min-h-screen">
      {/* Banner Section */}
      <div className="relative w-full">
        <img
          src="/Banners/Terminal Management - Banner.svg"
          alt="Terminal Management"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold"> Terminal Management</h1>
        </div>
      </div>

      {/* Offerings Section */}
      <div className="max-w-7xl mx-auto px- lg:px-8">
        <div className="text-center py-4">
         
          <p className="text-gray-900 text-xl mt-4">
            With nearly 55% of containerized cargo moving into the hinterlands, the demand for sustainable logistics solutions has never been greater. Inland Container Depots (ICDs) are essential components of the supply chain, serving as vital hubs that facilitate the smooth transfer of goods between various modes of transportation. Recognizing this need, we have established our own environmentally friendly Inland Container Depot at Bawal.
          </p>
          <h2 className="text-4xl py-8 font-bold text-gray-800">Our  Offerings</h2>
        </div>

        {/* Offerings Cards */}
        <div className="space-y-10">
          {offeringsData.map((offering, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-lg p-8 flex items-center space-x-6 transform transition-transform duration-500 ${animate ? 'slide-in' : ''}`}
            >
              <div className="text-5xl text-[#002D62]">{offering.icon}</div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">{offering.title}</h3>
                <p className="text-gray-900 text-lg">{offering.description}</p>
                {offering.details && (
                  <ul className="list-disc text-lg pl-5 text-gray-900 space-y-2">
                    {offering.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <Footer />

      {/* CSS for Animation */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .slide-in {
          animation: slideIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default TerminalManagement;
