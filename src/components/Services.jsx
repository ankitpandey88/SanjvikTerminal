

// import React, { useState } from 'react';
// import { FaTruck, FaWarehouse, FaClipboardCheck, FaRegClock } from 'react-icons/fa';

// const ServiceSection = () => {
//   return (
//     <section className="bg-alice-blue py-12" id="service" aria-label="service">
//       <div className="container mx-auto text-center">
//         <p className="text-dark-orange uppercase font-bold text-2xl mb-2">Our Services</p>
//         <h2 className="text-prussian-blue text-4xl font-semibold mb-5">Trusted For Our Services</h2>
//         <p className="text-lg mb-12">
//           Sanjvik Terminals Pvt One of the leading Inland Container Depots (ICD)
//         </p>
//         <ul className="grid gap-8 md:grid-cols-2">
//           {services.map((service, index) => (
//             <ServiceItem key={index} service={service} />
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// const ServiceItem = ({ service }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <li>
//       <div
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         style={{
//           backgroundColor: 'white',
//           padding: '2rem',
//           border: `8px solid ${isHovered ? '#ff8c00' : '#f3f4f6'}`, // Change border color on hover
//           transition: 'all 0.3s',
//           height: isHovered ? '15.2rem' : '15rem', // Increase height on hover
//         }}
//         className="hover:border-dark-orange"
//       >
//         <div className="mb-4 text-dark-orange text-5xl">
//           {service.icon}
//         </div>
//         <h3 className="text-prussian-blue text-2xl font-semibold mb-2">
//           {service.title}
//         </h3>
//         <p className="mb-4">{service.description}</p>
//         <div className="flex justify-center">
//           <a href="#" className="text-dark-orange text-lg uppercase flex items-center gap-2">
//             <span>View Detail</span>
//             <ion-icon name="chevron-forward" aria-hidden="true" />
//           </a>
//         </div>
//       </div>
//     </li>
//   );
// };

// const services = [
//   {
//     title: 'Multi-Model Transportation',
//     description: 'Our aim is to optimize and improve your supply chain so that we can give you the best service.',
//     icon: <FaTruck />
//   },
//   {
//     title: 'Terminal Management',
//     description: 'Efficient management of terminal operations.',
//     icon: <FaWarehouse />
//   },
//   {
//     title: 'Custom Clearance',
//     description: 'Streamlined customs clearance for faster shipping.',
//     icon: <FaClipboardCheck />
//   },
//   {
//     title: 'Warehousing',
//     description: 'Secure and efficient warehousing solutions.',
//     icon: <FaRegClock />
//   },
// ];

// export default ServiceSection;



import React from 'react';
import { motion } from 'framer-motion'; // Ensure you have installed framer-motion

const ServiceSection = () => {
  return (
    <section className="bg-alice-blue py-12" id="service" aria-label="service">
      <div className="container mx-auto text-center">
        <p className="text-dark-orange uppercase font-bold text-2xl mb-2">Our Services</p>
        <h2 className="text-prussian-blue text-4xl font-semibold mb-5">Trusted For Our Services</h2>
        <p className="text-lg mb-12">
          Sanjvik Terminals Pvt One of the leading Inland Container Depots (ICD)
        </p>
        <ul className="grid gap-8 grid-cols-2 md:grid-cols-2 lg:grid-cols-2"> {/* Adjusted to 2 columns */}
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}
        </ul>
      </div>
    </section>
  );
};

const ServiceItem = ({ service }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 50 }} // Start from below
      whileInView={{ opacity: 1, y: 0 }} // Animate to original position
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="relative bg-white border-4 border-gray-200 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all hover:border-dark-orange transform hover:scale-105 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110" // Increased size
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
        <div className="relative z-10"> {/* Make content above the overlay */}
          <h3 className="text-dark-orange text-5xl mb-4">{service.icon}</h3>
          <h3 className="text-prussian-blue text-2xl font-semibold mb-2">{service.title}</h3>
          <p className="mb-4">{service.description}</p>
          <a href="#" className="text-dark-orange text-lg uppercase">
            View Detail
          </a>
        </div>
      </div>
    </motion.li>
  );
};

const services = [
  {
    title: 'Multi-Model Transportation',
    description: 'Our aim is to optimize and improve your supply chain.',
    image: './landingPage/truck-1.jpg', // Replace with your image path
  },
  {
    title: 'Terminal Management',
    description: 'Efficient management of terminal operations.',
    image: './landingPage/landing4.png', // Replace with your image path
  },
  {
    title: 'Custom Clearance',
    description: 'Streamlined customs clearance for faster shipping.',
    image: './landingPage/port.jpg', // Replace with your image path
  },
  {
    title: 'Warehousing',
    description: 'Secure and efficient warehousing solutions.',
    image: './landingPage/landing3.png', // Replace with your image path
  },
];

export default ServiceSection;
