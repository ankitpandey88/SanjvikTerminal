


// import React, { useState, useEffect } from 'react';

// // Company logos and names
// const companies = [
//   { name: 'Company 1', logo: '/ClientLogo/120mlogo.png' },
//   { name: 'Company 2', logo: '/ClientLogo/Asahi.png ' },
//   { name: 'Company 3', logo: '/ClientLogo/Bindal coaters.png' },
//   { name: 'Company 4', logo: '/ClientLogo/CompLogo_1.jpg' },
//   { name: 'Company 5', logo: '/ClientLogo/cropped-ot-logo-2.png' },
//   { name: 'Company 6', logo: '/ClientLogo/Glasswing_Logo.png' },
//   { name: 'Company 7', logo: '/ClientLogo/greenway-logo.png' },
 
//   { name: 'Company 9', logo: '/ClientLogo/Impex.png' },
//   { name: 'Company 10', logo: '/ClientLogo/INALCO_Logo_1x1_1_-removebg-preview11.png' },
//   { name: 'Company 11', logo: '/ClientLogo/Jindal Steel.png' },
//   { name: 'Company 12', logo: '/ClientLogo/JSW.png' },
//   { name: 'Company 13', logo: '/ClientLogo/Logo_of_APL_Logistics.png' },
//   { name: 'Company 14', logo: '/ClientLogo/Saint Gobain.png' },
// ];

// const GroupOfCompany = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false); // State to track if slider is paused
//   const slidesToShow = 4; // Number of slides to show at once
//   const autoScrollInterval = 1300; // Auto scroll every 3 seconds

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

//   // Handling manual slide navigation
//   const goToNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
//   };

//   const goToPrevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + companies.length) % companies.length);
//   };

//   // Dynamically calculate the visible companies based on currentIndex
//   const visibleCompanies = companies.slice(currentIndex, currentIndex + slidesToShow).concat(
//     companies.slice(0, Math.max(0, currentIndex + slidesToShow - companies.length))
//   );

//   return (
//     <div className="container mx-auto py-10 overflow-hidden   relative">
//       <h2 className="text-5xl text-[#002D62] font-bold text-center mb-8">Our Clients</h2>

//       {/* Slider Container */}
//       <div
//         className="relative"
//         onMouseEnter={() => setIsPaused(true)} // Pause auto-scroll when hovered
//         onMouseLeave={() => setIsPaused(false)} // Resume auto-scroll when mouse leaves
//       >
//         {/* Arrow Buttons */}
//         <button
//           onClick={goToPrevSlide}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2  text-gray-800  text-5xl  p-2 rounded-full z-10 hover:bg-gray-600"
//         >
//           &#8249; {/* Left arrow symbol */}
//         </button>
//         <button
//           onClick={goToNextSlide}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2  text-gray-800 text-5xl p-2 rounded-full z-10 hover:bg-gray-600"
//         >
//           &#8250; {/* Right arrow symbol */}
//         </button>

//         {/* Slider Items */}
//         <div
//           className="flex transition-transform duration-1000 ease-in-out"
//           style={{ transform: `translateX(-${currentIndex * 25}%)` }} // Moving slides to the left
//         >
//           {companies.map((company, index) => (
//             <div key={index} className="w-1/4 p-4 flex-shrink-0">
//               {/* Uniform Image Size */}
//               <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 h-40 w-40">
//                 <img
//                   src={company.logo}
//                   alt={company.name}
//                   className="h-full w-full object-contain mb-4"
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


import React, { useState, useEffect } from 'react';

// Company logos and names
const companies = [
  { name: 'Company 1', logo: '/ClientLogo/120mlogo.png' },
  { name: 'Company 2', logo: '/ClientLogo/Asahi.png' },
  { name: 'Company 3', logo: '/ClientLogo/Bindal coaters.png' },
  { name: 'Company 4', logo: '/ClientLogo/CompLogo_1.jpg' },
  { name: 'Company 5', logo: '/ClientLogo/cropped-ot-logo-2.png' },
  { name: 'Company 6', logo: '/ClientLogo/Glasswing_Logo.png' },
  { name: 'Company 7', logo: '/ClientLogo/greenway-logo.png' },
  { name: 'Company 9', logo: '/ClientLogo/Impex.png' },
  { name: 'Company 10', logo: '/ClientLogo/INALCO_Logo_1x1_1_-removebg-preview11.png' },
  { name: 'Company 11', logo: '/ClientLogo/Jindal Steel.png' },
  { name: 'Company 12', logo: '/ClientLogo/JSW.png' },
  { name: 'Company 13', logo: '/ClientLogo/Logo_of_APL_Logistics.png' },
  { name: 'Company 14', logo: '/ClientLogo/Saint Gobain.png' },
];

const GroupOfCompany = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // State to track if slider is paused
  const slidesToShow = 4; // Number of slides to show at once
  const autoScrollInterval = 1300; // Auto scroll every 1.3 seconds

  // Auto-scroll slider logic
  useEffect(() => {
    if (!isPaused) {
      const autoScroll = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex + slidesToShow >= companies.length ? 0 : prevIndex + 1
        );
      }, autoScrollInterval);

      // Clear interval when component unmounts or slider is paused
      return () => clearInterval(autoScroll);
    }
  }, [isPaused]);

  // Handling manual slide navigation
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + slidesToShow >= companies.length ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? companies.length - slidesToShow : prevIndex - 1
    );
  };

  // Dynamically calculate the visible companies based on currentIndex
  const visibleCompanies = companies.slice(currentIndex, currentIndex + slidesToShow).concat(
    companies.slice(0, Math.max(0, currentIndex + slidesToShow - companies.length))
  );

  return (
    <div className="container mx-auto py-10 overflow-hidden relative">
      <h2 className="text-5xl text-[#002D62] font-bold text-center mb-8">Our Clients</h2>

      {/* Slider Container */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)} // Pause auto-scroll when hovered
        onMouseLeave={() => setIsPaused(false)} // Resume auto-scroll when mouse leaves
      >
        {/* Arrow Buttons */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-800 text-5xl p-2 rounded-full z-10 hover:bg-gray-600"
        >
          &#8249; {/* Left arrow symbol */}
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-800 text-5xl p-2 rounded-full z-10 hover:bg-gray-600"
        >
          &#8250; {/* Right arrow symbol */}
        </button>

        {/* Slider Items */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex % companies.length) * 25}%)` }}
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
