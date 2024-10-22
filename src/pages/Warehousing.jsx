


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
            backgroundImage: "url('/Banners/Warehousing Banner.svg')",
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ delay: 0.5, duration: 0.8 }} 
            className="p-8 bg-black bg-opacity-50 max-w-3xl text-center rounded-lg shadow-lg"
          >
            <h1 className="text-5xl font-bold mb-4">WAREHOUSING</h1>
            {/*  */}
          </motion.div>
        </motion.div>

     
        

        {/* Content Section */}
        <section className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            {/* Text Content */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="mb-4">
                <span className="block w-8 h-1 bg-red-500 mb-4"></span>
                {/* <h2 className="text-3xl font-bold">Custom Storage</h2> */}
              </div>
              <p className="text-gray-100 mb-6">
              Sanjvik Terminals provides state-of-the-art warehousing facilities that are tailored to cater to the diverse storage needs of customers, ensuring seamless storage needs. With 31,000 sq. ft. of optimized storage space, we are fully equipped to handle both transit and domestic requirements..
              </p>
              <p className="text-gray-100 mb-6">
              We offer an 8,000 sq. ft. bonded warehousing facility dedicated to leasing and a vast 23,000 sq. ft. domestic warehousing space for diverse storage needs. This supports businesses in managing their inventory effectively while enabling seamless logistics operations tailored to meet the demands of both international and domestic markets. Regardless of business size, we offer scalable warehousing solutions, enabling businesses to adapt to their changing storage needs. Our advanced infrastructure and customized storage solutions streamline processes to ensure quick turnaround times, keeping your supply chain agile. We tailor our services to meet the unique needs of your business with transparency and support at every step.
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
