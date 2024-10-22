


// import React from 'react';
// import { FaClipboardCheck, FaShippingFast, FaCogs } from 'react-icons/fa';
// import { motion } from 'framer-motion'; // For adding dynamic animations
// import Footer from '../components/Footer';

// const CustomClearance = () => {
//   return (
//    <div>
//      <div className="relative">
//       {/* Background Section */}
//       <motion.div
//         initial={{ opacity: 0 }} 
//         animate={{ opacity: 1 }} 
//         transition={{ duration: 1 }} 
//         className="bg-cover bg-center h-[80vh] relative text-white flex items-center justify-center"
//         style={{
//           backgroundImage: "url('/Banners/Custom Clearance - Banner.svg')",
//         }}
//       >
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }} 
//           animate={{ scale: 1, opacity: 1 }} 
//           transition={{ delay: 0.5, duration: 0.8 }} 
//           className="p-8 bg-black bg-opacity-50 max-w-3xl text-center rounded-lg shadow-lg"
//         >
//           <h1 className="text-5xl font-bold mb-4">Custom Clearance</h1>
          
//         </motion.div>
//       </motion.div>

//       {/* Card Section */}
    
//     </div>
//     <Footer/>
//    </div>
//   );
// };

// export default CustomClearance;


import React from 'react';
import { FaClipboardCheck, FaShippingFast, FaCogs } from 'react-icons/fa';
import { motion } from 'framer-motion'; // For adding dynamic animations
import Footer from '../components/Footer';

const CustomClearance = () => {
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
          backgroundImage: "url('/Banners/Custom Clearance - Banner.svg')",
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ delay: 0.5, duration: 0.8 }} 
          className="p-8 bg-black bg-opacity-50 max-w-3xl text-center rounded-lg shadow-lg"
        >
          <h1 className="text-5xl font-bold mb-4">Custom Clearance</h1>
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <div className="px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-800"> Custom Clearance</h2>
          <p className="text-lg text-gray-700 leading-8 mb-2">
            Our customs clearance service at Sanjvik ensures a smooth and efficient process for managing the complex requirements of national and international trade. We provide expert assistance with all aspects of customs documentation and regulatory compliance, helping you navigate through the intricate procedures of import and export. Our dedicated team of professionals is well-versed in customs regulations and works diligently to facilitate the swift and accurate clearance of your shipments.
          </p>
          <p className="text-lg text-gray-700 leading-8 mb-6">
            By handling the necessary paperwork, tariff classifications, and duty calculations, we minimize process time and ensure that your goods move seamlessly across borders. Our comprehensive customs clearance service is designed to simplify your logistics operations, allowing you to focus on your core business while we manage the regulatory details.
          </p>
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Advanced Risk Management System (RMS)</h3>
          <p className="text-lg text-gray-700 leading-8 mb-6">
            We utilize the advanced Risk Management System (RMS) to provide a seamless and highly efficient approach to customs clearance. This system operates like a green channel, enabling faster processing and reducing delays in clearing your goods. With RMS, we streamline the entire customs process, ensuring that your shipments are cleared swiftly and with minimal hassle.
          </p>
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Authorized Economic Operator (AEO)</h3>
          <p className="text-lg text-gray-700 leading-8">
            To further enhance our service, we facilitate the setup of an Authorized Economic Operator (AEO) office, which functions as a mini customs office, managing all customs procedures through an integrated system. We offer a comprehensive solution that accelerates your supply chain operations while maintaining full compliance with regulatory requirements.
          </p>
        </motion.div>
      </div>
    
    </div>
    <Footer/>
   </div>
  );
};

export default CustomClearance;
