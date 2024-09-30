


import React from 'react';
import { FaWarehouse, FaArrowRight, FaDivide } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const WarehouseServicesComponent = () => {
    return (
        <div>
          <div className="flex flex-col lg:flex-row items-center p-8 bg-white">
            <motion.div 
                className="flex-1 lg:mr-8"
                initial={{ opacity: 0, x: -100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold text-[#00308F] mb-4 flex items-center">
                    <FaWarehouse className="mr-2" />
                    WAREHOUSING
                </h1>
                <p className="text-lg mb-4">
                    Sanjvik Terminals provides state-of-the-art warehousing facilities tailored to cater to diverse storage needs, ensuring seamless operations.
                    With over <span className="text-[#00308F] font-bold">30,000 sq. ft. of optimized storage space</span>, we are fully equipped to handle both transit and domestic requirements.
                </p>
                <p className="text-lg mb-4">
                    We offer an <span className="text-[#00308F] font-bold">8,000 sq. ft. transit warehousing facility</span> dedicated to leasing and a vast 
                    <span className="text-[#00308F] font-bold"> 23,000 sq. ft. domestic warehousing space</span> for diverse storage needs. This supports businesses in managing their inventory effectively while enabling seamless logistics operations tailored to meet the demands of both international and domestic markets.
                    Regardless of business size, we offer scalable warehousing solutions, enabling businesses to adapt to their changing storage needs.
                </p>
                <p className="text-lg mb-4">
                    Our advanced infrastructure and customized storage solutions streamline processes to ensure quick turnaround times, keeping your supply chain agile. 
                    We tailor our services to meet the unique needs of your business with transparency and support at every step.
                </p>
               
            </motion.div>
            <motion.div 
                className="flex-1"
                initial={{ opacity: 0, x: 100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5 }}
            >
                <img src="/page/warehouse1.jpg" alt="Warehouse" className="w-full h-auto rounded-lg shadow-md" />
            </motion.div>
        </div>
        <Footer/>
        </div>
    );
};

export default WarehouseServicesComponent;
