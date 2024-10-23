


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

// const CompanySection = () => {
//   const [isImageVisible, setIsImageVisible] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate for navigation

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsImageVisible(true);
//     }, 2000); // Delay of 2 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   // Function to handle button click and redirect to /about page
//   const handleRedirect = () => {
//     navigate("/about"); // Programmatically navigate to the /about page
//   };

//   return (
//     <div
//       className="bg-cover bg-center h-screen flex items-center justify-center"
//       style={{
//         backgroundImage: `url('/landingPage/bg-1.jpg')`, // Background image reference without import
//       }}
//     >
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-0">
//         {/* Left Side Text */}
//         <div className="text-left space-y-6">
//           <h2 className="text-[#00308F] text-4xl uppercase font-bold">
//             Who We Are
//           </h2>

//           <p className="text-gray-600 max-w-lg">
//           Sanjvik Terminals Pvt. Ltd. is a dry port located in Bawal, Haryana. One of the leading Inland Container Depots (ICD) in the Northern region of the country. Our facility serves as a vital hinterland hub, seamlessly connecting major industrial zones. We are equipped with state-of-the-art infrastructure tailored to handle high volumes of containers with precision. Our integrated management systems ensure seamless handling, from the efficient movement of cargo to its timely delivery.
//           </p>
//           <p className="text-gray-600 max-w-lg">
//           These integrated systems are continuously monitored and upgraded to align with industry innovations and meet the growing demands of the global supply chain. With a focus on minimizing delays and optimizing safety, our facility is engineered to provide swift processing and secure handling of all goods. Our highly trained staff and cutting-edge technology work align to deliver smooth and uninterrupted service, making us a trusted partner in the logistics landscape
//           </p>

//           {/* Buttons */}
//           <div className="grid grid-cols-2 gap-4">
//             <button
//               className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-[#002D62] hover:text-white animate-typewriter"
//               onClick={handleRedirect} // Add onClick handler to redirect
//             >
//                Company Overview
//             </button>
//           </div>
//         </div>

//         {/* Right Side Image with animation */}
//         <div className=" ">
//           <img
//             src="/Banners/who we are (1).svg"
//             alt="Sanjvik Terminals"
//             className={`w-full ml-20 h-[90vh] rounded-lg shadow-md transform transition-transform duration-1000 ${
//               isImageVisible ? "translate-x-0" : "translate-x-full"
//             }`}
//           />
//         </div>
//       </div>

//       {/* Remove jsx attribute from style */}
//       <style>{`
//         /* Typewriter effect on button hover */
//         .animate-typewriter {
//           position: relative;
//           overflow: hidden;
//           display: inline-block;
//         }

//         .animate-typewriter:hover::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: 0;
//           height: 100%;
//           width: 100%;
//           background-color: rgba(255, 255, 255, 0.3);
//           animation: typewriter 2s steps(44) forwards;
//         }

//         @keyframes typewriter {
//           from {
//             left: 100%;
//           }
//           to {
//             left: 0;
//           }
//         }

//         /* Image slide-in effect */
//         .translate-x-full {
//           transform: translateX(100%);
//         }

//         .translate-x-0 {
//           transform: translateX(0);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CompanySection;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

// const CompanySection = () => {
//   const [isImageVisible, setIsImageVisible] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate for navigation

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsImageVisible(true);
//     }, 2000); // Delay of 2 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   // Function to handle button click and redirect to /about page
//   const handleRedirect = () => {
//     navigate("/about"); // Programmatically navigate to the /about page
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-400 p-6"
//     >
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Left Side Text */}
//         <div className="text-left space-y-6">
//           <h2 className="text-white text-3xl md:text-4xl uppercase font-bold">
//             Who We Are
//           </h2>

//           <p className="text-gray-200 max-w-lg">
//             Sanjvik Terminals Pvt. Ltd. is a dry port located in Bawal, Haryana.
//             One of the leading Inland Container Depots (ICD) in the Northern
//             region of the country. Our facility serves as a vital hinterland
//             hub, seamlessly connecting major industrial zones. We are equipped
//             with state-of-the-art infrastructure tailored to handle high volumes
//             of containers with precision. Our integrated management systems
//             ensure seamless handling, from the efficient movement of cargo to
//             its timely delivery.
//           </p>
//           <p className="text-gray-200 max-w-lg">
//             These integrated systems are continuously monitored and upgraded to
//             align with industry innovations and meet the growing demands of the
//             global supply chain. With a focus on minimizing delays and
//             optimizing safety, our facility is engineered to provide swift
//             processing and secure handling of all goods. Our highly trained
//             staff and cutting-edge technology work align to deliver smooth and
//             uninterrupted service, making us a trusted partner in the logistics
//             landscape.
//           </p>

//           {/* Buttons */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <button
//               className="bg-white text-blue-800 p-4 rounded-lg shadow-md hover:bg-[#002D62] hover:text-white transition-colors duration-300"
//               onClick={handleRedirect} // Add onClick handler to redirect
//             >
//               Company Overview
//             </button>
//           </div>
//         </div>

//         {/* Right Side Image with animation */}
//         <div className="flex justify-center md:justify-end">
//           <img
//             src="/Banners/who we are (1).svg"
//             alt="Sanjvik Terminals"
//             className={`w-full max-w-xs md:max-w-md h-auto rounded-lg shadow-md transform transition-transform duration-1000 ${
//               isImageVisible ? "translate-x-0" : "translate-x-full"
//             }`}
//           />
//         </div>
//       </div>

//       <style>{`
//         /* Image slide-in effect */
//         .translate-x-full {
//           transform: translateX(100%);
//         }

//         .translate-x-0 {
//           transform: translateX(0);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CompanySection;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

const CompanySection = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsImageVisible(true);
    }, 1000); // Delay of 1.5 seconds for a smoother effect

    return () => clearTimeout(timer);
  }, []);

  // Function to handle button click and redirect to /about page
  const handleRedirect = () => {
    navigate("/about"); // Programmatically navigate to the /about page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-600 p-6 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-purple-600 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-800 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side Text */}
        <div className="text-left space-y-6 md:flex md:flex-col md:justify-center">
          <h2 className="text-white text-3xl md:text-5xl uppercase font-extrabold tracking-wide">
            Who We Are
          </h2>

          <p className="text-gray-200 text-lg max-w-lg leading-relaxed">
           Sanjvik Terminals Pvt. Ltd. is a dry port located in Bawal, Haryana.
            One of the leading Inland Container Depots (ICD) in the Northern
            region of the country. Our facility serves as a vital hinterland
            hub, seamlessly connecting major industrial zones. We are equipped
            with state-of-the-art infrastructure tailored to handle high volumes
            of containers with precision. Our integrated management systems
            ensure seamless handling, from the efficient movement of cargo to
            its timely delivery.
          </p>
          <p className="text-gray-200 text-lg max-w-lg leading-relaxed">
          These integrated systems are continuously monitored and upgraded to
            align with industry innovations and meet the growing demands of the
            global supply chain. With a focus on minimizing delays and
            optimizing safety, our facility is engineered to provide swift
            processing and secure handling of all goods. Our highly trained
            staff and cutting-edge technology work align to deliver smooth and
            uninterrupted service, making us a trusted partner in the logistics
            landscape.
          </p>

          {/* Button */}
          <button
            className="bg-gray-300 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition-transform transform hover:scale-105"
            onClick={handleRedirect}
          >
            Company Overview
          </button>
        </div>

        {/* Right Side Image */}
        <div className="relative flex justify-center md:justify-end items-center">
          <div className="w-full max-w-xs md:max-w-md lg:max-w-lg">
            <img
              src="/Banners/who we are (1).svg"
              alt="Sanjvik Terminals"
              className={`w-full h-[80vh] rounded-xl shadow-2xl ml-20 transform transition-transform duration-1000 ${
                isImageVisible ? "scale-100" : "scale-0"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Inline Styles for Animations */}
      <style>{`
        /* Add smooth scale-in effect for the image */
        .scale-0 {
          transform: scale(0);
        }
        .scale-100 {
          transform: scale(1);
        }
      `}</style>
    </div>
  );
};

export default CompanySection;
