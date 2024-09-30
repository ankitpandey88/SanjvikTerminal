


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
        className="bg-cover bg-center h-[60vh] relative text-white flex items-center justify-center"
        style={{
          backgroundImage: "url('/page/customclearance.png')",
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ delay: 0.5, duration: 0.8 }} 
          className="p-8 bg-black bg-opacity-50 max-w-3xl text-center rounded-lg shadow-lg"
        >
          <h1 className="text-5xl font-bold mb-4">Custom Clearance</h1>
          <p className="text-lg">
            Our customs clearance service at Sanjvik ensures a smooth and efficient process for managing the complex requirements of national and international trade. We provide expert assistance with all aspects of customs documentation and regulatory compliance, helping you navigate through the intricate procedures of import and export.
          </p>
        </motion.div>
      </motion.div>

      {/* Card Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-6 mx-auto max-w-8xl">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h2 className="text-2xl text-[#00308F] font-semibold mb-4 flex items-center">
                <FaClipboardCheck className="mr-2 text-blue-500" /> Expert Team & Compliance
              </h2>
              <p className="text-gray-700">
                Our dedicated team of professionals is well-versed in customs regulations and works diligently to facilitate the swift and accurate clearance of your shipments. By handling the necessary paperwork, tariff classifications, and duty calculations, we minimize process time and ensure that your goods move seamlessly across borders.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h2 className="text-2xl text-[#00308F] font-semibold mb-4 flex items-center">
                <FaShippingFast className="mr-2 text-blue-500" /> Seamless Logistics Operations
              </h2>
              <p className="text-gray-700">
                We utilize the advanced Risk Management System (RMS) to provide a seamless and highly efficient approach to customs clearance. This system operates like a green channel, enabling faster processing and reducing delays in clearing your goods.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl text-[#00308F] font-semibold mb-4 flex items-center">
                <FaCogs className="mr-2 text-blue-500" /> Authorized Economic Operator (AEO)
              </h2>
              <p className="text-gray-700">
                We facilitate the setup of an Authorized Economic Operator (AEO) office, which functions as a mini customs office, managing all customs procedures through an integrated system. This accelerates your supply chain operations while maintaining full compliance with regulatory requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
   </div>
  );
};

export default CustomClearance;
