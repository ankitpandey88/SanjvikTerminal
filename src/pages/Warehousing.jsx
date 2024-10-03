


// import React from 'react';
// import { FaWarehouse, FaArrowRight, FaDivide } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import Footer from '../components/Footer';

// const WarehouseServicesComponent = () => {
//     return (
//         <div>
//           <div className="flex flex-col lg:flex-row items-center p-8 bg-white">
//             <motion.div 
//                 className="flex-1 lg:mr-8"
//                 initial={{ opacity: 0, x: -100 }} 
//                 animate={{ opacity: 1, x: 0 }} 
//                 transition={{ duration: 0.5 }}
//             >
//                 <h1 className="text-4xl font-bold text-[#00308F] mb-4 flex items-center">
//                     <FaWarehouse className="mr-2" />
//                     WAREHOUSING
//                 </h1>
//                 <p className="text-lg mb-4">
//                     Sanjvik Terminals provides state-of-the-art warehousing facilities tailored to cater to diverse storage needs, ensuring seamless operations.
//                     With over <span className="text-[#00308F] font-bold">30,000 sq. ft. of optimized storage space</span>, we are fully equipped to handle both transit and domestic requirements.
//                 </p>
//                 <p className="text-lg mb-4">
//                     We offer an <span className="text-[#00308F] font-bold">8,000 sq. ft. transit warehousing facility</span> dedicated to leasing and a vast 
//                     <span className="text-[#00308F] font-bold"> 23,000 sq. ft. domestic warehousing space</span> for diverse storage needs. This supports businesses in managing their inventory effectively while enabling seamless logistics operations tailored to meet the demands of both international and domestic markets.
//                     Regardless of business size, we offer scalable warehousing solutions, enabling businesses to adapt to their changing storage needs.
//                 </p>
//                 <p className="text-lg mb-4">
//                     Our advanced infrastructure and customized storage solutions streamline processes to ensure quick turnaround times, keeping your supply chain agile. 
//                     We tailor our services to meet the unique needs of your business with transparency and support at every step.
//                 </p>
               
//             </motion.div>
//             <motion.div 
//                 className="flex-1"
//                 initial={{ opacity: 0, x: 100 }} 
//                 animate={{ opacity: 1, x: 0 }} 
//                 transition={{ duration: 0.5 }}
//             >
//                 <img src="/page/warehouse1.jpg" alt="Warehouse" className="w-full h-auto rounded-lg shadow-md" />
//             </motion.div>
//         </div>
//         <Footer/>
//         </div>
//     );
// };

// export default WarehouseServicesComponent;


// import React from 'react';

// const WarehouseServicesComponent = () => {
//   return (
//     <div>
//             <div
//       className="relative h-screen bg-cover bg-center"
//       style={{ backgroundImage: `url('/page/warehouse4.jpg')` }} 
//     >
//       {/* Overlay for dimming the background image */}
//       <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//       {/* Content overlaid on the image */}
//       <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
//           <span className="text-red-500">Stock closer</span> to your customers
//         </h1>
//         <p className="text-lg sm:text-xl text-white mb-8">
//           Our distributed pan-India warehousing network helps you manage your inventory better
//         </p>

//         <button className="inline-block px-6 py-3 text-lg font-medium text-black bg-white rounded-full hover:bg-gray-100 transition duration-300">
//           Get started &rarr;
//         </button>
//       </div>
//     </div>
//            <section className="bg-black text-white py-16">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
//         {/* Text Content */}
//         <div className="md:w-1/2 mb-8 md:mb-0">
//           <div className="mb-4">
//             <span className="block w-8 h-1 bg-red-500 mb-4"></span>
//             <h2 className="text-3xl font-bold">
//               End-to-end warehousing and <br /> distribution logistics
//             </h2>
//           </div>
//           <p className="text-gray-300 mb-6">
//             Delhivery’s network of fulfillment centres (warehouses) are powered by our proprietary software and optimally integrated with our shipping network giving you the flexibility to optimise your storage cost versus speed to delivery.
//           </p>
//           <p className="text-gray-300 mb-6">
//             As a result, you are now free to focus on growing your business without having to worry about varying storage and manpower needs - while delivering the experience you always wanted to, for your consumers.
//           </p>
//           <button className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition duration-300">
//             Contact Us &rarr;
//           </button>
//         </div>

//         {/* Image */}
//         <div className="md:w-1/2 relative">
//           <img
//             src="/page/warehouse3.jpg"
//             alt="Warehouse"
//             className="rounded-lg shadow-lg"
//           />
//           {/* Decorative red square */}
//           <div className="absolute top-0 right-0 bg-red-500 h-8 w-8 transform translate-x-6 -translate-y-6"></div>
//           <div className="absolute bottom-0 left-0 bg-red-500 h-8 w-8 transform -translate-x-6 translate-y-6"></div>
//         </div>
//       </div>
//     </section>
//     </div>
//   );
// };

// export default WarehouseServicesComponent;


// import React from 'react';
// import Footer from '../components/Footer';

// const WarehouseServicesComponent = () => {
//   return (
//     <div>
//       <div
//         className="relative h-screen bg-cover bg-center"
//         style={{ backgroundImage: `url('/page/warehouse4.jpg')` }} 
//       >
//         {/* Overlay for dimming the background image */}
//         <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//         {/* Content overlaid on the image */}
//         <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
//             <span className="text-white">WAREHOUSING</span>
//           </h1>
//           <p className="text-lg sm:text-xl text-white mb-8">
//             Sanjvik Terminals provides state-of-the-art warehousing facilities that are tailored to cater to the diverse storage needs of customers, ensuring seamless storage needs. With over 30,000 sq. ft. of optimized storage space, we are fully equipped to handle both transit and domestic requirements.
//           </p>

//           <button className="inline-block px-6 py-3 text-lg font-medium text-black bg-white rounded-full hover:bg-gray-100 transition duration-300">
//             Get started &rarr;
//           </button>
//         </div>
//       </div>
      
//       <section className="bg-blue-900 text-white py-16">
//         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
//           {/* Text Content */}
//           <div className="md:w-1/2 mb-8 md:mb-0">
//             <div className="mb-4">
//               <span className="block w-8 h-1 bg-red-500 mb-4"></span>
//               <h2 className="text-3xl font-bold">
//               Custom Storage
//               </h2>
//             </div>
//             <p className="text-gray-100 mb-6">
//               We offer an 8,000 sq. ft. transit warehousing facility dedicated to leasing and a vast 23,000 sq. ft. domestic warehousing space for diverse storage needs. This supports businesses in managing their inventory effectively while enabling seamless logistics operations tailored to meet the demands of both international and domestic markets.
//             </p>
//             <p className="text-gray-100 mb-6">
//               Regardless of business size, we offer scalable warehousing solutions, enabling businesses to adapt to their changing storage needs. Our advanced infrastructure and customized storage solutions streamline processes to ensure quick turnaround times, keeping your supply chain agile. We tailor our services to meet the unique needs of your business with transparency and support at every step.
//             </p>
//             <button className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition duration-300">
//               Contact Us &rarr;
//             </button>
//           </div>

//           {/* Image */}
//           <div className="md:w-1/2 relative">
//             <img
//               src="/page/warehouse3.jpg"
//               alt="Warehouse"
//               className="rounded-lg shadow-lg"
//             />
//             {/* Decorative red square */}
//             <div className="absolute top-0 right-0 bg-red-500 h-8 w-8 transform translate-x-6 -translate-y-6"></div>
//             <div className="absolute bottom-0 left-0 bg-red-500 h-8 w-8 transform -translate-x-6 translate-y-6"></div>
//           </div>
//         </div>
//       </section>
//       <Footer/>
//     </div>
//   );
// };

// export default WarehouseServicesComponent;

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion'; // For adding dynamic animations
// import Footer from '../components/Footer';

// const WarehouseServicesComponent = () => {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);

 
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsPopupVisible(true);
//     }, 500); // Show after half a second

//     return () => clearTimeout(timer);
//   }, []);

//   const handleClosePopup = () => {
//     setIsPopupVisible(false);
//   };

//   return (
//     <div>
//       <div className="relative">
//         {/* Background Section */}
//         <motion.div
//           initial={{ opacity: 0 }} 
//           animate={{ opacity: 1 }} 
//           transition={{ duration: 1 }} 
//           className="bg-cover bg-center h-[80vh] relative text-white flex items-center justify-center"
//           style={{
//             backgroundImage: "url('/page/warehouse4.jpg')",
//           }}
//         >
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }} 
//             animate={{ scale: 1, opacity: 1 }} 
//             transition={{ delay: 0.5, duration: 0.8 }} 
//             className="p-8 bg-black bg-opacity-50 max-w-3xl text-center rounded-lg shadow-lg"
//           >
//             <h1 className="text-5xl font-bold mb-4">WAREHOUSING</h1>
//             <p className="text-lg">
//               Sanjvik Terminals provides state-of-the-art warehousing facilities that are tailored to cater to the diverse storage needs of customers, ensuring seamless storage needs. With over 30,000 sq. ft. of optimized storage space, we are fully equipped to handle both transit and domestic requirements.
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* Popup for warehousing information */}
//         {isPopupVisible && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center z-20"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.5 }}
//           >
            
//           </motion.div>
//         )}

//         {/* Content Section */}
//         <section className="bg-blue-900 text-white py-16">
//           <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
//             {/* Text Content */}
//             <div className="md:w-1/2 mb-8 md:mb-0">
//               <div className="mb-4">
//                 <span className="block w-8 h-1 bg-red-500 mb-4"></span>
//                 <h2 className="text-3xl font-bold">Custom Storage</h2>
//               </div>
//               <p className="text-gray-100 mb-6">
//                 We offer an 8,000 sq. ft. transit warehousing facility dedicated to leasing and a vast 23,000 sq. ft. domestic warehousing space for diverse storage needs. This supports businesses in managing their inventory effectively while enabling seamless logistics operations tailored to meet the demands of both international and domestic markets.
//               </p>
//               <p className="text-gray-100 mb-6">
//                 Regardless of business size, we offer scalable warehousing solutions, enabling businesses to adapt to their changing storage needs. Our advanced infrastructure and customized storage solutions streamline processes to ensure quick turnaround times, keeping your supply chain agile. We tailor our services to meet the unique needs of your business with transparency and support at every step.
//               </p>
//               <button
//                 className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition duration-300"
//                 onClick={() => window.location.href='/contact'}
//               >
//                 Contact Us &rarr;
//               </button>
//             </div>

//             {/* Image */}
//             <div className="md:w-1/2 relative">
//               <img
//                 src="/page/warehouse3.jpg"
//                 alt="Warehouse"
//                 className="rounded-lg shadow-lg"
//               />
//               {/* Decorative red square */}
//               <div className="absolute top-0 right-0 bg-red-500 h-8 w-8 transform translate-x-6 -translate-y-6"></div>
//               <div className="absolute bottom-0 left-0 bg-red-500 h-8 w-8 transform -translate-x-6 translate-y-6"></div>
//             </div>
//           </div>
//         </section>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default WarehouseServicesComponent;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // For adding dynamic animations
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Footer from '../components/Footer';

const WarehouseServicesComponent = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 500); // Show after half a second

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div>
      <div className="relative">
        {/* Background Section */}
        <motion.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }} 
          className="bg-cover bg-center h-[80vh] relative text-white flex items-center justify-center"
          style={{
            backgroundImage: "url('/page/warehouse4.jpg')",
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ delay: 0.5, duration: 0.8 }} 
            className="p-8 bg-black bg-opacity-50 max-w-3xl text-center rounded-lg shadow-lg"
          >
            <h1 className="text-5xl font-bold mb-4">WAREHOUSING</h1>
            <p className="text-lg">
              Sanjvik Terminals provides state-of-the-art warehousing facilities that are tailored to cater to the diverse storage needs of customers, ensuring seamless storage needs. With over 30,000 sq. ft. of optimized storage space, we are fully equipped to handle both transit and domestic requirements.
            </p>
          </motion.div>
        </motion.div>

     
        

        {/* Content Section */}
        <section className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            {/* Text Content */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="mb-4">
                <span className="block w-8 h-1 bg-red-500 mb-4"></span>
                <h2 className="text-3xl font-bold">Custom Storage</h2>
              </div>
              <p className="text-gray-100 mb-6">
                We offer an 8,000 sq. ft. transit warehousing facility dedicated to leasing and a vast 23,000 sq. ft. domestic warehousing space for diverse storage needs. This supports businesses in managing their inventory effectively while enabling seamless logistics operations tailored to meet the demands of both international and domestic markets.
              </p>
              <p className="text-gray-100 mb-6">
                Regardless of business size, we offer scalable warehousing solutions, enabling businesses to adapt to their changing storage needs. Our advanced infrastructure and customized storage solutions streamline processes to ensure quick turnaround times, keeping your supply chain agile. We tailor our services to meet the unique needs of your business with transparency and support at every step.
              </p>
              <Link to="/contact-us"> {/* Link to the contact page */}
                <button className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-500 transition duration-300">
                  Contact Us &rarr;
                </button>
              </Link>
            </div>

            {/* Image */}
            <div className="md:w-1/2 relative">
              <img
                src="/page/warehouse3.jpg"
                alt="Warehouse"
                className="rounded-lg shadow-lg"
              />
              {/* Decorative red squares */}
              <div className="absolute top-0 right-0 bg-red-500 h-8 w-8 transform translate-x-6 -translate-y-6"></div>
              <div className="absolute bottom-0 left-0 bg-red-500 h-8 w-8 transform -translate-x-6 translate-y-6"></div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default WarehouseServicesComponent;
