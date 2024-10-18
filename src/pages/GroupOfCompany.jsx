

// import React, { useState, useEffect } from 'react';

// // Company logos and names
// const companies = [
//   { name: 'Company 1', logo: '/groupOfCompany/120mlogo.png' },
//   { name: 'Company 2', logo: '/groupOfCompany/asahi india.png' },
//   { name: 'Company 3', logo: '/groupOfCompany/Bindal coaters.png' },
//   { name: 'Company 4', logo: '/groupOfCompany/CompLogo_1.jpg' },
//   { name: 'Company 5', logo: '/groupOfCompany/cropped-ot-logo-2.png' },
//   { name: 'Company 6', logo: '/groupOfCompany/Glasswing_Logo.png' },
//   { name: 'Company 7', logo: '/groupOfCompany/greenway-logo.png' },
//   { name: 'Company 8', logo: '/groupOfCompany/images.png' },
//   { name: 'Company 9', logo: '/groupOfCompany/impex.png' },
//   { name: 'Company 10', logo: '/groupOfCompany/INALCO_Logo_1x1_1_-removebg-preview11.png' },
//   { name: 'Company 11', logo: '/groupOfCompany/Jindal Steel and Power.png' },
//   { name: 'Company 12', logo: '/groupOfCompany/JSW.png' },
//   { name: 'Company 13', logo: '/groupOfCompany/Logo_of_APL_Logistics.png' },
//   { name: 'Company 14', logo: '/groupOfCompany/saint-gobain-logo-manufacturing-architectural-engineering-others.jpg' },
// ];

// const GroupOfCompany = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false); // State to track if slider is paused
//   const slidesToShow = 4; // Number of slides to show at once
//   const autoScrollInterval = 3000; // Auto scroll every 3 seconds

//   // Auto-scroll slider logic
//   useEffect(() => {
//     if (!isPaused) {
//       const autoScroll = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
//       }, autoScrollInterval);

//       // Clear interval when component unmounts or slider is paused
//       return () => clearInterval(autoScroll);
//     }
//   }, [isPaused]);

//   // Dynamically calculate the visible companies based on currentIndex
//   const visibleCompanies = companies.slice(currentIndex, currentIndex + slidesToShow).concat(
//     companies.slice(0, Math.max(0, currentIndex + slidesToShow - companies.length))
//   );

//   return (
//     <div className="container mx-auto py-10">
//       <h2 className="text-3xl font-bold text-center mb-8">Our Group of Companies</h2>

//       {/* Slider Container */}
//       <div
//         className="relative"
//         onMouseEnter={() => setIsPaused(true)} // Pause auto-scroll when hovered
//         onMouseLeave={() => setIsPaused(false)} // Resume auto-scroll when mouse leaves
//       >
//         {/* Slider Items */}
//         <div className="grid grid-cols-4 gap-6">
//           {visibleCompanies.map((company, index) => (
//             <div key={index} className="p-4">
//               <div className="bg-gray-100 shadow-md rounded-lg flex flex-col items-center justify-center p-6">
//                 <img
//                   src={company.logo}
//                   alt={company.name}
//                   className="h-20 w-20 object-contain mb-4"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GroupOfCompany;


// import React, { useState, useEffect } from 'react';

// // Company logos and names
// const companies = [
//   { name: 'Company 1', logo: '/groupOfCompany/120mlogo.png' },
//   { name: 'Company 2', logo: '/groupOfCompany/asahi india.png' },
//   { name: 'Company 3', logo: '/groupOfCompany/Bindal coaters.png' },
//   { name: 'Company 4', logo: '/groupOfCompany/CompLogo_1.jpg' },
//   { name: 'Company 5', logo: '/groupOfCompany/cropped-ot-logo-2.png' },
//   { name: 'Company 6', logo: '/groupOfCompany/Glasswing_Logo.png' },
//   { name: 'Company 7', logo: '/groupOfCompany/greenway-logo.png' },
//   { name: 'Company 8', logo: '/groupOfCompany/images.png' },
//   { name: 'Company 9', logo: '/groupOfCompany/impex.png' },
//   { name: 'Company 10', logo: '/groupOfCompany/INALCO_Logo_1x1_1_-removebg-preview11.png' },
//   { name: 'Company 11', logo: '/groupOfCompany/Jindal Steel and Power.png' },
//   { name: 'Company 12', logo: '/groupOfCompany/JSW.png' },
//   { name: 'Company 13', logo: '/groupOfCompany/Logo_of_APL_Logistics.png' },
//   { name: 'Company 14', logo: '/groupOfCompany/saint-gobain-logo-manufacturing-architectural-engineering-others.jpg' },
// ];

// const GroupOfCompany = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false); // State to track if slider is paused
//   const slidesToShow = 4; // Number of slides to show at once
//   const autoScrollInterval = 1000; // Auto scroll every 3 seconds

//   // Auto-scroll slider logic
//   useEffect(() => {
//     if (!isPaused) {
//       const autoScroll = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
//       }, autoScrollInterval);

//       // Clear interval when component unmounts or slider is paused
//       return () => clearInterval(autoScroll);
//     }
//   }, [isPaused]);

//   // Dynamically calculate the visible companies based on currentIndex
//   const visibleCompanies = companies.slice(currentIndex, currentIndex + slidesToShow).concat(
//     companies.slice(0, Math.max(0, currentIndex + slidesToShow - companies.length))
//   );

//   return (
//     <div className="container mx-auto py-10 overflow-hidden">
//       <h2 className="text-3xl font-bold text-center mb-8">Our Group of Companies</h2>

//       {/* Slider Container */}
//       <div
//         className="relative"
//         onMouseEnter={() => setIsPaused(true)} // Pause auto-scroll when hovered
//         onMouseLeave={() => setIsPaused(false)} // Resume auto-scroll when mouse leaves
//       >
//         <div
//           className="flex transition-transform duration-1000 ease-in-out"
//           style={{ transform: `translateX(-${currentIndex * 25}%)` }} // Moving slides to the left
//         >
//           {companies.map((company, index) => (
//             <div key={index} className="w-1/4 p-4 flex-shrink-0">
//               {/* Apply different designs conditionally */}
//               {index % 3 === 0 ? (
//                 <div className="bg-gray-100 shadow-md rounded-lg flex flex-col items-center justify-center p-6 design-1">
//                   <img
//                     src={company.logo}
//                     alt={company.name}
//                     className="h-20 w-20 object-contain mb-4"
//                   />
//                   <p className="text-gray-600">{company.name}</p>
//                 </div>
//               ) : index % 3 === 1 ? (
//                 <div className="bg-green-100 shadow-lg rounded-lg flex flex-col items-center justify-center p-6 design-2">
//                   <img
//                     src={company.logo}
//                     alt={company.name}
//                     className="h-24 w-24 object-contain mb-4"
//                   />
//                   <p className="text-green-600 font-semibold">{company.name}</p>
//                 </div>
//               ) : (
//                 <div className="bg-blue-100 shadow-md rounded-xl flex flex-col items-center justify-center p-8 design-3">
//                   <img
//                     src={company.logo}
//                     alt={company.name}
//                     className="h-28 w-28 object-cover mb-4"
//                   />
//                   <p className="text-blue-800 text-lg font-bold">{company.name}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GroupOfCompany;


import React, { useState, useEffect } from 'react';

// Company logos and names
const companies = [
  { name: 'Company 1', logo: '/groupOfCompany/120mlogo.png' },
  { name: 'Company 2', logo: '/groupOfCompany/asahi india.png' },
  { name: 'Company 3', logo: '/groupOfCompany/Bindal coaters.png' },
  { name: 'Company 4', logo: '/groupOfCompany/CompLogo_1.jpg' },
  { name: 'Company 5', logo: '/groupOfCompany/cropped-ot-logo-2.png' },
  { name: 'Company 6', logo: '/groupOfCompany/Glasswing_Logo.png' },
  { name: 'Company 7', logo: '/groupOfCompany/greenway-logo.png' },
  { name: 'Company 8', logo: '/groupOfCompany/images.png' },
  { name: 'Company 9', logo: '/groupOfCompany/impex.png' },
  { name: 'Company 10', logo: '/groupOfCompany/INALCO_Logo_1x1_1_-removebg-preview11.png' },
  { name: 'Company 11', logo: '/groupOfCompany/Jindal Steel and Power.png' },
  { name: 'Company 12', logo: '/groupOfCompany/JSW.png' },
  { name: 'Company 13', logo: '/groupOfCompany/Logo_of_APL_Logistics.png' },
  { name: 'Company 14', logo: '/groupOfCompany/saint-gobain-logo-manufacturing-architectural-engineering-others.jpg' },
];

const GroupOfCompany = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // State to track if slider is paused
  const slidesToShow = 4; // Number of slides to show at once
  const autoScrollInterval = 1300; // Auto scroll every 3 seconds

  // Auto-scroll slider logic
  useEffect(() => {
    if (!isPaused) {
      const autoScroll = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
      }, autoScrollInterval);

      // Clear interval when component unmounts or slider is paused
      return () => clearInterval(autoScroll);
    }
  }, [isPaused]);

  // Handling manual slide navigation
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + companies.length) % companies.length);
  };

  // Dynamically calculate the visible companies based on currentIndex
  const visibleCompanies = companies.slice(currentIndex, currentIndex + slidesToShow).concat(
    companies.slice(0, Math.max(0, currentIndex + slidesToShow - companies.length))
  );

  return (
    <div className="container mx-auto py-10 overflow-hidden relative">
      <h2 className="text-4xl text-[#002D62] font-bold text-center mb-8">Our Group of Companies</h2>

      {/* Slider Container */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)} // Pause auto-scroll when hovered
        onMouseLeave={() => setIsPaused(false)} // Resume auto-scroll when mouse leaves
      >
        {/* Arrow Buttons */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2  text-gray-800  text-5xl  p-2 rounded-full z-10 hover:bg-gray-600"
        >
          &#8249; {/* Left arrow symbol */}
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2  text-gray-800 text-5xl p-2 rounded-full z-10 hover:bg-gray-600"
        >
          &#8250; {/* Right arrow symbol */}
        </button>

        {/* Slider Items */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }} // Moving slides to the left
        >
          {companies.map((company, index) => (
            <div key={index} className="w-1/4 p-4 flex-shrink-0">
              {/* Uniform Image Size */}
              <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 h-40 w-40">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-full w-full object-contain mb-4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupOfCompany;
