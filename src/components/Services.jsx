





// import React from 'react';
// import { motion } from 'framer-motion'; // Ensure you have installed framer-motion


// const ServiceSection = () => {
//   return (
//     <div>
//       <section className="bg-alice-blue py-12" id="service" aria-label="service">
//       <div className="container mx-auto text-center">
//         <p className="text-[#00308F] uppercase font-bold text-4xl mb-2">Our Services</p>
        
//         <p className="text-lg mb-12">
//           Sanjvik Terminals Pvt One of the leading Inland Container Depots (ICD)
//         </p>
//         <ul className="flex justify-center gap-8">
//           {services.map((service, index) => (
//             <ServiceItem key={index} service={service} />
//           ))}
//         </ul>
//       </div>
//     </section>

//     </div>
//   );
// };

// const ServiceItem = ({ service }) => {
//   return (
//     <motion.li
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//       className="flex-1"
//     >
//       <div className="relative bg-white border-4 border-gray-200 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all hover:border-[#00308F] transform hover:scale-105 overflow-hidden">
//         <img 
//           src={service.image} 
//           alt={service.title} 
//           className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
//         <div className="relative z-10">
//           <h3 className="text-[#00308F] text-5xl mb-4">{service.icon}</h3>
//           <h3 className="text-prussian-blue text-2xl font-semibold mb-2">{service.title}</h3>
//           <p className="mb-4">{service.description}</p>
//           <a 
//             href={service.url} // Link to the specific service page
//             className="text-[#00308F] text-lg uppercase"
//           >
//             View Detail
//           </a>
//         </div>
//       </div>
//     </motion.li>
//   );
// };

// const services = [
//   {
//     title: 'Multi-model Transportation',
//     description: 'Our aim is to optimize and improve your supply chain.',
//     image: './Banners/Multi Modal - Banner.svg',
//     url: '/multi-modal-transportation' // Add URL for this service
//   },
//   {
//     title: 'Terminal Management',
//     description: 'Efficient management of terminal operations.',
//     image: './Banners/Terminal Management - Banner.svg',
//     url: '/terminal-management' // Add URL for this service
//   },
//   {
//     title: 'Custom Clearance',
//     description: 'Customs clearance for faster shipping.',
//     image: './Banners/Custom Clearance - Banner.svg',
//     url: '/custom-clearance-' // Add URL for this service
//   },
//   {
//     title: 'Warehousing',
//     description: 'Advance, secure, and efficient warehousing and spacing solutions.',
//     image: './Banners/Warehousing Banner.svg',
//     url: '/warehouse' // Add URL for this service
//   },
// ];

// export default ServiceSection;


// import React from 'react';
// import { motion } from 'framer-motion'; // Ensure you have installed framer-motion

// const ServiceSection = () => {
//   return (
//     <div>
//       <section className="bg-alice-blue py-12" id="service" aria-label="service">
//         <div className="container mx-auto text-center">
//           <p className="text-[#00308F] uppercase font-bold text-4xl mb-2">Our Services</p>
//           <p className="text-lg mb-12">
//             Sanjvik Terminals Pvt is one of the leading Inland Container Depots (ICD)
//           </p>
//           <ul className="flex flex-wrap justify-center gap-8">
//             {services.map((service, index) => (
//               <ServiceItem key={index} service={service} />
//             ))}
//           </ul>
//         </div>
//       </section>
//     </div>
//   );
// };

// const ServiceItem = ({ service }) => {
//   return (
//     <motion.li
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//       className="flex-1 min-w-[250px] max-w-[300px] h-[400px]" // Ensure fixed sizes
//     >
//       <div className="relative bg-white border-4 border-gray-200 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all hover:border-[#00308F] transform hover:scale-105 overflow-hidden h-full">
//         <img 
//           src={service.image} 
//           alt={service.title} 
//           className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
//         <div className="relative z-10">
//           <h3 className="text-[#00308F] text-5xl mb-4">{service.icon}</h3>
//           <h3 className="text-prussian-blue text-2xl font-semibold mb-2">{service.title}</h3>
//           <p className="mb-4">{service.description}</p>
//           <a 
//             href={service.url} // Link to the specific service page
//             className="text-[#00308F] text-lg uppercase"
//           >
//             View Detail
//           </a>
//         </div>
//       </div>
//     </motion.li>
//   );
// };

// const services = [
//   {
//     title: 'Multi-model Transportation',
//     description: 'Our aim is to optimize and improve your supply chain.',
//     image: './Banners/Multi Modal - Banner.svg',
//     url: '/multi-modal-transportation' // Add URL for this service
//   },
//   {
//     title: 'Terminal Management',
//     description: 'Efficient management of terminal operations.',
//     image: './Banners/Terminal Management - Banner.svg',
//     url: '/terminal-management' // Add URL for this service
//   },
//   {
//     title: 'Custom Clearance',
//     description: 'Customs clearance for faster shipping.',
//     image: './Banners/Custom Clearance - Banner.svg',
//     url: '/custom-clearance' // Add URL for this service
//   },
//   {
//     title: 'Warehousing',
//     description: 'Advance, secure, and efficient warehousing and spacing solutions.',
//     image: './Banners/Warehousing Banner.svg',
//     url: '/warehouse' // Add URL for this service
//   },
// ];

// export default ServiceSection;


import React from 'react';
import { motion } from 'framer-motion'; // Ensure you have installed framer-motion

const ServiceSection = () => {
  return (
    <div>
      <section className="bg-alice-blue py-12" id="service" aria-label="service">
        <div className="container mx-auto text-center">
          <p className="text-[#00308F] uppercase font-bold text-4xl mb-2">Our Services</p>
          <p className="text-lg mb-12">
            Sanjvik Terminals Pvt is one of the leading Inland Container Depots (ICD)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceItem key={index} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceItem = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex-none w-full h-[400px]" // Full width, fixed height
    >
      <div className="relative bg-white border-4 border-gray-200 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all hover:border-[#00308F] transform hover:scale-105 overflow-hidden h-full">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
        <div className="relative z-10">
          <h3 className="text-[#00308F] text-5xl mb-4">{service.icon}</h3>
          <h3 className="text-prussian-blue text-2xl font-semibold mb-2">{service.title}</h3>
          <p className="mb-4">{service.description}</p>
          <a 
            href={service.url} // Link to the specific service page
            className="text-[#00308F] text-lg uppercase"
          >
            View Detail
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const services = [
  {
    title: 'Multi-model Transportation',
    description: 'Our aim is to optimize and improve your supply chain.',
    image: './Banners/Multi Modal - Banner.svg',
    url: '/multi-modal-transportation' // Add URL for this service
  },
  {
    title: 'Terminal Management',
    description: 'Efficient management of terminal operations.',
    image: './Banners/Terminal Management - Banner.svg',
    url: '/terminal-management' // Add URL for this service
  },
  {
    title: 'Custom Clearance',
    description: 'Customs clearance for faster shipping.',
    image: './Banners/Custom Clearance - Banner.svg',
    url: '/custom-clearance-' // Add URL for this service
  },
  {
    title: 'Warehousing',
    description: 'Advance, secure, and efficient warehousing and spacing solutions.',
    image: './Banners/Warehousing Banner.svg',
    url: '/warehouse' // Add URL for this service
  },
];

export default ServiceSection;
