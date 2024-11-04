

import React from 'react';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Policys = () => {
  const policyPoints = [
    'Sanjvik Terminal is committed to sustainable development and adequate measures are being taken to maintain ecological balance.',
    'Environmental concerns and impacts are integrated into all decision-making and operational activities.',
    'Encourage employees to adopt environmentally responsible practices and increase awareness of ecological issues.',
    'Regular training and education are provided to inform employees about environmental factors related to their work.',
    'Waste reduction is achieved through reuse, recycling, and purchasing of recycled products where feasible and cost-effective.',
    'Efficient use of resources, such as water, electricity, and raw materials, is prioritized.',
    'Measures are taken to protect human health and minimize environmental impact.',
    'Environmental commitment is communicated to clients, customers, and the public, encouraging their support.',
    'Efforts are made to reduce toxic emissions by selecting eco-friendly fleet options and optimizing energy sources.',
   
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-8 py-10">

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative w-full mb-8"
        >
          <img
            src="/Banners/CSR.svg"
            alt="Our Facility"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-indigo-900 opacity-30 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg">
              Environmental Policy
            </h1>
          </div>
        </motion.div>

        <h4 className="text-2xl font-base text-center mb-8 text-[#002D62]">
        Sanjvik Terminal is committed to sustainable development and adequate measures are being taken to maintain ecological balance
        </h4>

        {/* Policy Points */}
        <ul className="list-disc list-inside space-y-2">
          {policyPoints.map((point, index) => (
            <li key={index} className="text-lg text-[#00308F] font-medium">
              {point}
            </li>
          ))}
        </ul>
        <br />
        <h4 className="text-xl font-semibold text-center mb-8 text-[#002D62]">
        Regular reviews of environmental policies are conducted to continuously improve performance and
        minimize the social impact of activities
        </h4>
      </div>
      <Footer />
    </div>
  );
};

export default Policys;

