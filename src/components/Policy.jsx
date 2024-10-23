


import React from 'react';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Policys = () => {
  const policyPoints = [
    'Sanjvik Terminal is committed to sustainable development and adequate measures are being taken to maintain ecological balance.',
    'Sanjvik Terminal is committed to sustainable development and maintaining ecological balance.',
    'Environmental concerns and impacts are integrated into all decision-making and operational activities.',
    'Encourage employees to adopt environmentally responsible practices and increase awareness of ecological issues.',
    'Regular training and education are provided to inform employees about environmental factors related to their work.',
    'Waste reduction is achieved through reuse, recycling and purchasing of recycled products where feasible and cost-effective.',
    'Efficient use of resources, such as water, electricity and raw materials, is prioritized, especially for non-renewable resources.',
    'Measures are taken to protect human health and minimize environmental impact.',
    'Environmental commitment is communicated to clients, customers, and the public, encouraging their support.',
    'Efforts are made to reduce toxic emissions by selecting eco-friendly fleet options and optimizing energy sources.',
    'Regular reviews of environmental policies are conducted to continuously improve performance and minimize the social impact of activities.'
  ];

  return (
    <div className=" ">
      <div className="max-w-6xl mx-auto px-8">

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative w-full"
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
      <br />
{/*         
        <h1 className="text-5xl font-extrabold text-center mb-12 text-[#002D62]">
          Environmental Policy
        </h1> */}

        {/* Policy Points */}
        <ul className="space-y-6">
          {policyPoints.map((point, index) => (
            <li
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#00308F] hover:bg-[#f0f4ff] transition-colors duration-300"
            >
              <p className="text-lg text-[#00308F] font-medium">
                {point}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <br></br>
      <Footer />
    </div>
  );
};

export default Policys;
