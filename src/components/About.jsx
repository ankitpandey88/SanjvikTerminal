


import React, { useState, useEffect } from "react";

const CompanySection = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsImageVisible(true);
    }, 2000); // Delay of 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('/landingPage/bg-1.jpg')`, // Background image reference without import
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-0">
        {/* Left Side Text */}
        <div className="text-left space-y-6">
          <h2 className="text-[#00308F] text-2xl uppercase font-semibold">
            Who We Are
          </h2>

          <p className="text-gray-600 max-w-lg">
            Sanjvik Terminals Pvt. Ltd. is a dry port located in Bawal, Haryana.
            It serves as a vital hinterland hub connecting major industrial
            zones in the region.
          </p>
          <p className="text-gray-600 max-w-lg">
            Our facility is equipped with state-of-the-art infrastructure,
            capable of handling high volumes of containers with precision and
            efficiency. Integrated management systems ensure seamless cargo
            handling from movement to timely delivery, meeting global supply
            chain demands.
          </p>
          <button className="text-[#00308F] font-semibold">
            More Details
          </button>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-[#002D62] hover:text-white animate-typewriter">
              About Our Company
            </button>
            {/* <button className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-[#002D62] animate-typewriter">
              Statement of Mission
            </button>
            <button className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-[#002D62] animate-typewriter">
              Statement of Vision
            </button>
            <button className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-[#002D62] animate-typewriter">
              Statement of Value
            </button> */}
          </div>
        </div>

        {/* Right Side Image with animation */}
        <div className="relative">
          <img
            src="/landingPage/image-1-1.jpg"
            alt="Sanjvik Terminals"
            className={`w-full h-[88vh] rounded-lg shadow-md transform transition-transform duration-1000 ${
              isImageVisible ? "translate-x-0" : "translate-x-full"
            }`}
          />
        </div>
      </div>

      <style jsx>{`
        /* Typewriter effect on button hover */
        .animate-typewriter {
          position: relative;
          overflow: hidden;
          display: inline-block;
        }

        .animate-typewriter:hover::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: rgba(255, 255, 255, 0.3);
          animation: typewriter 2s steps(44) forwards;
        }

        @keyframes typewriter {
          from {
            left: 100%;
          }
          to {
            left: 0;
          }
        }

        /* Image slide-in effect */
        .translate-x-full {
          transform: translateX(100%);
        }

        .translate-x-0 {
          transform: translateX(0);
        }
      `}</style>
    </div>
  );
};

export default CompanySection;

// import React, { useState, useEffect } from "react";

// const CompanySection = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const images = [
//     "/landingPage/image-1-1.jpg",
//     "/landingPage/about2.jpg",
//     "/landingPage/about3.jpg",
//   ];

//   useEffect(() => {
//     const imageChangeTimer = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 6000); // Change image every 3 seconds

//     return () => clearInterval(imageChangeTimer);
//   }, []);

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
//           <h2 className="text-[#00308F] text-2xl uppercase font-semibold">
//             Who We Are
//           </h2>

//           <p className="text-gray-600 max-w-lg">
//             Sanjvik Terminals Pvt. Ltd. is a dry port located in Bawal, Haryana.
//             It serves as a vital hinterland hub connecting major industrial
//             zones in the region.
//           </p>
//           <p className="text-gray-600 max-w-lg">
//             Our facility is equipped with state-of-the-art infrastructure,
//             capable of handling high volumes of containers with precision and
//             efficiency. Integrated management systems ensure seamless cargo
//             handling from movement to timely delivery, meeting global supply
//             chain demands.
//           </p>
//           <button className="text-[#00308F] font-semibold">
//             More Details
//           </button>

//           {/* Buttons */}
//           <div className="grid grid-cols-2 gap-4">
//             <button className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-[#002D62] animate-typewriter">
//               About Our Company
//             </button>
//             <button className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-[#002D62] animate-typewriter">
//               Statement of Mission
//             </button>
//             <button className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-[#002D62] animate-typewriter">
//               Statement of Vision
//             </button>
//             <button className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-[#002D62] animate-typewriter">
//               Statement of Value
//             </button>
//           </div>
//         </div>

//         {/* Right Side Image with animation */}
//         <div className="relative overflow-hidden">
//           <img
//             src={images[currentImageIndex]} // Update image based on current index
//             alt="Sanjvik Terminals"
//             className={`w-full h-[88vh] rounded-lg shadow-md transform transition-transform duration-1000 
//               opacity-0 animate-fade-in
//             `}
//           />
//         </div>
//       </div>

//       <style jsx>{`
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

//         /* Fade-in effect for images */
//         .animate-fade-in {
//           animation: fadeIn 1s forwards;
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CompanySection;