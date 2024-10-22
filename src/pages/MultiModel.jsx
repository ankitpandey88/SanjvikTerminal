


// import React from 'react';
// import { FaRoad, FaShip, FaTrain } from 'react-icons/fa';
// import Footer from '../components/Footer';

// const MultimodelTransport = () => {
//   const offerings = [
//     "Optimized transit routes",
//     "Linkage with FOIS to provide transparency",
//     "Cross-model expertise",
//     "Flexible scheduling",
//     "Enhanced infrastructure utilization",
//     "Dynamic load management",
//     "Comprehensive logistics integration",
//     "Efficient intermodel hubs",
//     "Customized freight solutions",
//     "Dedicated customer support",
//   ];

//   return (

//     <div>
//       <div className="p-5 flex flex-col items-center">
//       <h1 className="text-4xl  text-[#00308F] font-bold mb-5">Multi-model Transportation</h1>
//       <p className="text-center mb-5">
//         At Sanjvik Terminals, we specialize in offering comprehensive multi-model transportation solutions, seamlessly integrating road, rail, and sea transport to meet the unique needs of our customers. This integrated approach allows us to offer flexible and cost-effective solutions that optimize logistics operations. Our strategic location and advanced infrastructure enable us to ensure smooth transitions between different modes of transport. One of the key advantages of our multi-model transportation service is our ability to provide seamless first-mile and last-mile connectivity.
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         {offerings.map((offering, index) => (
//           <div key={index} className="bg-white rounded-lg shadow-lg p-5 transition-transform duration-300 hover:scale-105">
//             <div className="flex items-center mb-3">
//               {index === 0 && <FaRoad className="text-blue-500 text-3xl mr-2" />}
//               {index === 1 && <FaShip className="text-blue-500 text-3xl mr-2" />}
//               {index === 2 && <FaTrain className="text-blue-500 text-3xl mr-2" />}
//               {/* Add more icons based on the index or offering if desired */}
//               <h2 className="font-semibold">{offering}</h2>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     <Footer/>
//     </div>
    
    
//   );
// };

// export default MultimodelTransport;


// import React from 'react';
// import { FaRoad, FaShip, FaTrain, FaTruck, FaWarehouse, FaLink, FaCalendarAlt, FaBoxes, FaPhone } from 'react-icons/fa';
// import Footer from '../components/Footer';
// import { motion } from 'framer-motion';

// const MultimodelTransport = () => {
//   const offerings = [
//     { icon: FaRoad, title: "Optimized transit routes" },
//     { icon: FaShip, title: "Linkage with FOIS to provide transparency" },
//     { icon: FaTrain, title: "Cross-model expertise" },
//     { icon: FaTruck, title: "Flexible scheduling" },
//     { icon: FaWarehouse, title: "Enhanced infrastructure utilization" },
//     { icon: FaBoxes, title: "Dynamic load management" },
//     { icon: FaLink, title: "Comprehensive logistics integration" },
//     { icon: FaCalendarAlt, title: "Efficient intermodal hubs" },
//     { icon: FaBoxes, title: "Customized freight solutions" },
//     { icon: FaPhone, title: "Dedicated customer support" }
//   ];

//   return (
//     <div className="bg-gray-50 py-10">
//       {/* Banner Section */}
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2 }}
//         className="relative mb-12 w-full"
//       >
//         <img
//           src="/Banners/Multi Modal - Banner.svg"
//           alt="Multimodel Transportation"
//           className="w-full h-[90vh] rounded-lg shadow-lg transform hover:scale-105 transition duration-700"
//         />
//         <div className="absolute inset-0 bg-indigo-900 opacity-30 rounded-lg"></div>
//       </motion.div>

//       {/* Heading Section */}
//       <div className="text-center mb-10">
//         <h1 className="text-4xl font-bold text-indigo-600">Multi-Model Transportation</h1>
//         <p className="mt-4 max-w-5xl mx-auto text-gray-700 leading-relaxed px-4">
//           At Sanjvik Terminals, we specialize in offering comprehensive multi-modal transportation solutions, seamlessly integrating road, rail, and sea transport to meet the unique needs of our customers. This integrated approach allows us to offer flexible and cost-effective solutions that optimize logistics operations.
//         </p>
//       </div>

//       {/* Offerings Section */}
//       <div className="w-full flex flex-wrap justify-center gap-6 px-4">
//         {offerings.map((offering, index) => (
//           <motion.div
//             key={index}
//             className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-500 hover:scale-105 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//           >
//             <div className="flex items-center mb-4">
//               <offering.icon className="text-indigo-600 text-4xl mr-4" />
//               <h2 className="text-xl font-semibold text-indigo-700">{offering.title}</h2>
//             </div>
//             <p className="text-gray-600">
//               {`Learn more about ${offering.title.toLowerCase()} to enhance our comprehensive logistics solutions.`}
//             </p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Footer Section */}
//       <Footer />
//     </div>
//   );
// };

// export default MultimodelTransport;
import React from 'react';
import { FaRoad, FaShip, FaTrain, FaTruck, FaWarehouse, FaLink, FaCalendarAlt, FaBoxes, FaPhone } from 'react-icons/fa';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const MultimodelTransport = () => {
  const offerings = [
    { icon: FaRoad, title: "Optimized transit routes", description: "Ensure efficient routing for timely deliveries." },
    { icon: FaShip, title: "Linkage with FOIS", description: "Transparency through linkage with Freight Operations Information System." },
    { icon: FaTrain, title: "Cross-model expertise", description: "Expertise across various transport modes for optimal solutions." },
    { icon: FaTruck, title: "Flexible scheduling", description: "Adjustable schedules to meet diverse customer needs." },
    { icon: FaWarehouse, title: "Enhanced infrastructure utilization", description: "Maximize asset usage to improve efficiency." },
    { icon: FaBoxes, title: "Dynamic load management", description: "Adapting load strategies to meet demand fluctuations." },
    { icon: FaLink, title: "Comprehensive logistics integration", description: "Seamless integration for streamlined logistics processes." },
    { icon: FaCalendarAlt, title: "Efficient intermodal hubs", description: "Optimizing connections between different transport modes." },
    { icon: FaBoxes, title: "Customized freight solutions", description: "Tailored freight solutions for unique customer requirements." },
   
  ];

  return (
    <div className="bg-gray-50 py-10">
      {/* Banner Section with Overlay Text */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative mb-12 w-full"
      >
        <img
          src="/Banners/Multi Modal - Banner.svg"
          alt="Multimodal Transportation"
          className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition duration-700"
        />
        <div className="absolute inset-0 bg-indigo-900 opacity-30 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg">Multi-Model Transportation</h1>
        </div>
      </motion.div>

      {/* Heading Section */}
      <div className="text-center mb-10">
        <p className="mt-4 max-w-5xl mx-auto text-gray-700 leading-relaxed px-4">
          At Sanjvik Terminals, we specialize in offering comprehensive multi-modal transportation solutions, seamlessly integrating road, rail, and sea transport to meet the unique needs of our customers. This integrated approach allows us to offer flexible and cost-effective solutions that optimize logistics operations.
        </p>
      </div>

      {/* Offerings Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {offerings.map((offering, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-gradient-to-r from-white to-indigo-100 shadow-lg rounded-lg p-8 text-center transform hover:scale-105 hover:shadow-2xl transition duration-500"
          >
            <offering.icon className="text-indigo-600 text-6xl mb-4" />
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">{offering.title}</h3>
            <p className="text-gray-600 leading-relaxed">{offering.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Section */}
      <br></br>
      <Footer />
    </div>
  );
};

export default MultimodelTransport;
