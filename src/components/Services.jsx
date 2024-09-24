


// import React from 'react';
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
//             <li key={index}>
//               <div
//                 style={{
//                   backgroundColor: 'white',
//                   padding: '2rem',
//                   border: '8px solid #f3f4f6', // Cultured color
//                   transition: 'all 0.3s',
//                   height: service.title === 'Terminal Management' ? '16rem' : '16rem', // Inline height
//                 }}
//                 className="hover:border-dark-orange"
//               >
//                 <div className="mb-4 text-dark-orange text-5xl">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-prussian-blue text-2xl font-semibold mb-2">
//                   {service.title}
//                 </h3>
//                 <p className="mb-4">{service.description}</p>
//                 <div className="flex justify-center">
//                   <a href="#" className="text-dark-orange text-lg uppercase flex items-center gap-2">
//                     <span>View Detail</span>
//                     <ion-icon name="chevron-forward" aria-hidden="true" />
//                   </a>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
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

import React, { useState } from 'react';
import { FaTruck, FaWarehouse, FaClipboardCheck, FaRegClock } from 'react-icons/fa';

const ServiceSection = () => {
  return (
    <section className="bg-alice-blue py-12" id="service" aria-label="service">
      <div className="container mx-auto text-center">
        <p className="text-dark-orange uppercase font-bold text-2xl mb-2">Our Services</p>
        <h2 className="text-prussian-blue text-4xl font-semibold mb-5">Trusted For Our Services</h2>
        <p className="text-lg mb-12">
          Sanjvik Terminals Pvt One of the leading Inland Container Depots (ICD)
        </p>
        <ul className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}
        </ul>
      </div>
    </section>
  );
};

const ServiceItem = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          border: `8px solid ${isHovered ? '#ff8c00' : '#f3f4f6'}`, // Change border color on hover
          transition: 'all 0.3s',
          height: isHovered ? '15.2rem' : '15rem', // Increase height on hover
        }}
        className="hover:border-dark-orange"
      >
        <div className="mb-4 text-dark-orange text-5xl">
          {service.icon}
        </div>
        <h3 className="text-prussian-blue text-2xl font-semibold mb-2">
          {service.title}
        </h3>
        <p className="mb-4">{service.description}</p>
        <div className="flex justify-center">
          <a href="#" className="text-dark-orange text-lg uppercase flex items-center gap-2">
            <span>View Detail</span>
            <ion-icon name="chevron-forward" aria-hidden="true" />
          </a>
        </div>
      </div>
    </li>
  );
};

const services = [
  {
    title: 'Multi-Model Transportation',
    description: 'Our aim is to optimize and improve your supply chain so that we can give you the best service.',
    icon: <FaTruck />
  },
  {
    title: 'Terminal Management',
    description: 'Efficient management of terminal operations.',
    icon: <FaWarehouse />
  },
  {
    title: 'Custom Clearance',
    description: 'Streamlined customs clearance for faster shipping.',
    icon: <FaClipboardCheck />
  },
  {
    title: 'Warehousing',
    description: 'Secure and efficient warehousing solutions.',
    icon: <FaRegClock />
  },
];

export default ServiceSection;

