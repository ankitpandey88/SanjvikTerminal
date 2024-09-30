


// import React from 'react';
// import { FaTruck, FaWrench, FaFileAlt } from 'react-icons/fa'; 

// const TerminalManagement = () => {
//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       {/* Background Image */}
//       <div
//         className="relative bg-cover bg-center h-auto mb-6 fade-in"
//         style={{
//           backgroundImage: "url('/page/terminal.jpg')", // Background image URL
//           minHeight: '300px', // Set a minimum height
//         }}
//       >
//         <div className="bg-overlay p-6"> {/* Semi-transparent background */}
//           <h1 className="text-4xl font-bold mb-4 text-center text-[#00308F]">Terminal Management</h1>
//           <p className="mb-6 text-black-800">
//             With nearly 55% of containerized cargo moving into the hinterlands, the demand for efficient logistics solutions has never been greater. Inland Container Depots (ICDs) have become essential components of the supply chain, serving as vital hubs that facilitate the smooth transfer of goods between various modes of transportation. Recognizing this need, we have established our own Inland Container Depot at Bawal.
//           </p>
//         </div>
//       </div>

//       <h2 className="text-2xl text-[#00308F] font-semibold mb-4 fade-in">Our Offerings:</h2>
      
//       {/* TXR Examination Section */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-6 card fade-in">
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
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-6 card fade-in">
//         <h3 className="text-xl font-semibold flex items-center mb-4">
//           <FaWrench className="mr-2 text-blue-500" /> Container Repairing
//         </h3>
//         <p className="mb-4 text-black-600">
//           At Sanjvik, we offer comprehensive in-house container repair and maintenance services equipped with advanced technology and equipment. Our dedicated facility is designed to handle a wide range of repair needs, ensuring that containers are maintained to the highest standards.
//         </p>
//       </div>

//       {/* Container Leasing Section */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-6 card fade-in">
//         <h3 className="text-xl font-semibold flex items-center mb-4">
//           <FaTruck className="mr-2 text-blue-500" /> Container Leasing
//         </h3>
//         <p className="mb-4 text-black-600">
//           We offer a range of high-quality containers available for lease. Our container leasing service provides a flexible and cost-effective solution to meet your shipping and storage needs.
//         </p>
//       </div>

//       {/* Images Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <img src="/landingPage/blog3.avif" alt="TXR Examination" className="w-full h-64 object-cover rounded-lg" />
//         <img src="landingPage/port.jpg" alt="Container Repairing" className="w-full h-64 object-cover rounded-lg" />
//         <img src="landingPage/landing5.png" alt="Container Leasing" className="w-full h-64 object-cover rounded-lg" />
//       </div>
//     </div>
//   );
// };

// export default TerminalManagement;


import React from 'react';
import { FaTruck, FaWrench, FaFileAlt } from 'react-icons/fa'; 
import Footer from '../components/Footer';

const TerminalManagement = () => {
  return (
   <div>
     <div className="max-w-7xl mx-auto p-6">
      {/* Background Image */}
      <div
        className="relative bg-cover bg-center h-auto mb-6 fade-in"
        style={{
          backgroundImage: "url('/page/terminal.jpg')", // Background image URL
          minHeight: '300px', // Set a minimum height
        }}
      >
        <div className="bg-overlay p-6"> {/* Semi-transparent background */}
          <h1 className="text-4xl font-bold mb-4 text-center text-[#00308F] ">Terminal Management</h1>
        </div>
      </div>

      {/* Paragraph inside card */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 card hover:scale-105 transform transition-transform duration-300">
        <p className="mb-6 text-black-1000">
          With nearly 55% of containerized cargo moving into the hinterlands, the demand for efficient logistics solutions has never been greater. Inland Container Depots (ICDs) have become essential components of the supply chain, serving as vital hubs that facilitate the smooth transfer of goods between various modes of transportation. Recognizing this need, we have established our own Inland Container Depot at Bawal.
        </p>
      </div>

      <h2 className="text-2xl text-[#00308F] font-semibold mb-4 fade-in">Our Offerings:</h2>
      
      {/* TXR Examination Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 card hover:scale-105 transform transition-transform duration-300">
        <h3 className="text-xl font-semibold flex items-center mb-4">
          <FaFileAlt className="mr-2 text-blue-500" /> TXR Examination
        </h3>
        <p className="mb-4 text-black-600">
          At the terminal, we provide comprehensive TXR Examination services to ensure the safe and reliable movement of rail wagons. The integrity of rail wagons is critical to the seamless transportation of goods, and our expert team is dedicated to maintaining the highest safety standards.
        </p>
        <p className="mb-4 text-black-600">
          Our TXR Inspection Process includes:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Brake System Check</li>
          <li>Coupling and Buffer Inspection</li>
          <li>Axle and Wheel Examination</li>
          <li>Frame and Body Inspection</li>
          <li>Load Security</li>
        </ul>
      </div>

      {/* Container Repairing Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 card hover:scale-105 transform transition-transform duration-300">
        <h3 className="text-xl font-semibold flex items-center mb-4">
          <FaWrench className="mr-2 text-blue-500" /> Container Repairing
        </h3>
        <p className="mb-4 text-black-600">
          At Sanjvik, we offer comprehensive in-house container repair and maintenance services equipped with advanced technology and equipment. Our dedicated facility is designed to handle a wide range of repair needs, ensuring that containers are maintained to the highest standards.
        </p>
      </div>

      {/* Container Leasing Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 card hover:scale-105 transform transition-transform duration-300">
        <h3 className="text-xl font-semibold flex items-center mb-4">
          <FaTruck className="mr-2 text-blue-500" /> Container Leasing
        </h3>
        <p className="mb-4 text-black-600">
          We offer a range of high-quality containers available for lease. Our container leasing service provides a flexible and cost-effective solution to meet your shipping and storage needs.
        </p>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative group">
          <img 
            src="/landingPage/blog3.avif" 
            alt="TXR Examination" 
            className="w-full h-64 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300" 
          />
          <span className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            TXR Examination
          </span>
        </div>
        <div className="relative group">
          <img 
            src="landingPage/port.jpg" 
            alt="Container Repairing" 
            className="w-full h-64 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300" 
          />
          <span className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Container Repairing
          </span>
        </div>
        <div className="relative group">
          <img 
            src="landingPage/landing5.png" 
            alt="Container Leasing" 
            className="w-full h-64 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300" 
          />
          <span className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Container Leasing
          </span>
        </div>
      </div>
    </div>
    <Footer/>
   </div>
  );
};

export default TerminalManagement;
