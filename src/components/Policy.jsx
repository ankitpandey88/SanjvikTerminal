

// import React from 'react';
// import { FaLeaf, FaRecycle, FaWater, FaIndustry, FaUsers, FaGlobe } from 'react-icons/fa';
// import Footer from './Footer';

// const Policys = () => {
//   const policyData = [
//     {
//       icon: <FaLeaf className="text-5xl text-green-500" />,
//       title: 'Sustainable Development',
//       description: 'Sanjvik Terminal is committed to sustainable development and maintaining ecological balance.',
//     },
//     {
//       icon: <FaRecycle className="text-5xl text-green-500" />,
//       title: 'Waste Reduction',
//       description: 'Waste reduction is achieved through reuse, recycling, and purchasing recycled products where feasible.',
//     },
//     {
//       icon: <FaWater className="text-5xl text-blue-500" />,
//       title: 'Efficient Resource Use',
//       description: 'Efficient use of water, electricity, and raw materials is prioritized, especially for non-renewable resources.',
//     },
//     {
//       icon: <FaIndustry className="text-5xl text-yellow-500" />,
//       title: 'Environmental Impact',
//       description: 'Measures are taken to protect human health and minimize environmental impact by selecting eco-friendly options.',
//     },
//     {
//       icon: <FaUsers className="text-5xl text-purple-500" />,
//       title: 'Employee Responsibility',
//       description: 'Employees are encouraged to adopt environmentally responsible practices through training and education.',
//     },
//     {
//       icon: <FaGlobe className="text-5xl text-blue-400" />,
//       title: 'Global Awareness',
//       description: 'Sanjvik Terminal communicates environmental commitment globally, encouraging widespread support.',
//     },
//   ];

//   return (
//     <div>
//       <div className="bg-white p-8 text-black min-h-screen flex items-center justify-center">
//       <div className="max-w-5xl w-full mx-auto">
//         <h1 className="text-5xl font-extrabold text-center mb-12 text-[#00308F]">Environmental Policy</h1>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {policyData.map((policy, index) => (
//             <div
//               key={index}
//               className="relative bg-[#00308F] text-white p-8 rounded-lg transition-transform duration-500 transform hover:scale-105"
//             >
//               <div className="flex items-center mb-4 space-x-4">
//                 {policy.icon}
//                 <h2 className="text-2xl font-bold">{policy.title}</h2>
//               </div>
//               <p className="text-base">{policy.description}</p>
//             </div>
//           ))}
//         </div>

       
//       </div>
//     </div>
//     <Footer/>
//     </div>
//   );
// };

// export default Policys;


import React from 'react';
import Footer from './Footer';

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
    <div className="bg-[#ecedff] py-16">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <h1 className="text-5xl font-extrabold text-center mb-12 text-[#002D62]">
          Environmental Policy
        </h1>

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
