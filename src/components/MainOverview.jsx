// import React from 'react'
// import VisionNew from './Vision2'
// import Mission from './Mission'
// import OurValue from './OurValue'
// import Footer from './Footer'



// const MainOverviews = () => {
//   return (
//     <div className='overflow-x-hidden'>
        
//         <VisionNew/>
//         <Mission/>
//         <OurValue/>
//         <Footer/>

//     </div>
//   )
// }

// export default MainOverviews





// import React from 'react';
// import { FaShieldAlt, FaUsers, FaHandHoldingHeart, FaLeaf, FaGem, FaRegStar } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const MainOverviews = () => {
//   const values = [
//     { icon: FaShieldAlt, title: 'Safety', description: 'Ensuring the highest standards of safety and security.' },
//     { icon: FaUsers, title: 'Customer-Centric', description: 'Offering tailored, reliable solutions for logistics.' },
//     { icon: FaHandHoldingHeart, title: 'Integrity', description: 'Conducting business with transparency and honesty.' },
//     { icon: FaGem, title: 'Quality', description: 'ISO-certified provider delivering high-quality services.' },
//     { icon: FaLeaf, title: 'Sustainability', description: 'Committed to environmentally responsible practices.' },
//     { icon: FaRegStar, title: 'Excellence', description: 'Striving for operational excellence and improvement.' }
//   ];

//   return (
//     <div className="bg-gray-50 py-10 px-4">
//       {/* Banner Section */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//         className="max-w-6xl mx-auto mb-10"
//       >
//         <img
//           src="/Banners/Vision Mission Banner.svg"
//           alt="Mission Banner"
//           className="w-full rounded-lg shadow-lg"
//         />
//       </motion.div>

//       {/* Vision Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-6xl mx-auto text-center mb-16"
//       >
//         <h2 className="text-4xl font-bold text-indigo-600 mb-4">Our Vision</h2>
//         <p className="text-lg text-gray-700 leading-relaxed">
//           Sanjvik Terminals envisions becoming a leading inland logistics hub,<br />
//           offering seamless solutions that drive economic growth and connectivity.<br />
//           Through continuous innovation and dedication to excellence,<br />
//           we envision a future where it serves as a pivotal hub,<br />
//           empowering global and domestic trade with innovative logistics solutions<br />
//           and sustainable practices.
//         </p>
//       </motion.div>

//       {/* Mission Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-6xl mx-auto text-center md:text-left mb-16"
//       >
//         <h2 className="text-4xl font-bold text-indigo-600 mb-4">Our Mission</h2>
//         <p className="text-lg text-gray-700 leading-relaxed">
//           At Sanjvik Terminals, we are driven by a mission to enhance the efficiency<br />
//           of logistics operations in India by providing reliable, scalable, and innovative solutions.<br />
//           We aim to support the country's economic growth by ensuring businesses<br />
//           and industries can transport their goods seamlessly to their intended destinations.
//         </p>
//       </motion.div>

//       {/* Values Section */}
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-indigo-600 text-center mb-10">Our Values</h2>
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           variants={{
//             hidden: { opacity: 0, y: 30 },
//             visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
//           }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
//         >
//           {values.map((value, index) => (
//             <motion.div
//               key={index}
//               className="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition-transform"
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//             >
//               <value.icon className="text-indigo-600 text-5xl mb-4 mx-auto" />
//               <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
//               <p className="text-gray-600 leading-relaxed">{value.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default MainOverviews;


import React from 'react';
import { FaShieldAlt, FaUsers, FaHandHoldingHeart, FaLeaf, FaGem, FaRegStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Footer from './Footer';

const MainOverviews = () => {
  const values = [
    { icon: FaShieldAlt, title: 'Safety', description: 'Ensuring the highest standards of safety and security in all operations to protect our people, assets, and cargo.' },
    { icon: FaUsers, title: 'Customer-Centric Approach', description: 'Prioritizing customer needs by offering tailored, reliable solutions that simplify logistics operations.' },
    { icon: FaHandHoldingHeart, title: 'Integrity', description: 'Conducting business with transparency, honesty, and accountability at every level.' },
    { icon: FaGem, title: 'Quality', description: 'ISO-certified provider offering services that exceed customer expectations.' },
    { icon: FaLeaf, title: 'Sustainability', description: 'Committed to environmentally responsible practices that reduce our impact on the planet.' },
    { icon: FaRegStar, title: 'Excellence', description: 'Striving for operational excellence through continuous improvement and advanced technologies.' }
  ];

  return (
   <div>
     <div className="bg-gradient-to-b from-blue-50 to-gray-100 py-12">
      {/* Banner Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-6xl mx-auto mb-12 relative"
      >
        <img
          src="/Banners/Vision Mission Banner.svg"
          alt="Mission Banner"
          className="w-full rounded-lg shadow-lg transform hover:scale-105 transition duration-700"
        />
        <div className="absolute inset-0 bg-indigo-900 opacity-30 rounded-lg"></div>
      </motion.div>

      {/* Vision Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto text-center mb-16 bg-white rounded-lg shadow-lg p-8"
      >
        <h2 className="text-5xl font-bold text-[#00308F] mb-6">Our Vision</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Sanjvik Terminals envisions becoming a leading inland logistics hub,<br />
          offering seamless solutions that drive economic growth and connectivity.<br />
          Through continuous innovation and dedication to excellence,<br />
          we envision a future where it serves as a pivotal hub,<br />
          empowering global and domestic trade with innovative logistics solutions<br />
          and sustainable practices.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto text-center md:text-left mb-16 bg-white rounded-lg shadow-lg p-8"
      >
        <h2 className="text-5xl font-bold text-[#00308F] mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Sanjvik Terminals, we are driven by a mission to enhance the efficiency<br />
          of logistics operations in India by providing reliable, scalable, and innovative solutions.<br />
          We aim to support the country's economic growth by ensuring businesses<br />
          and industries can transport their goods seamlessly to their intended destinations.
        </p>
      </motion.div>

      {/* Values Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-5xl font-bold text-[#00308F] text-center mb-12">Our Values</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-gradient-to-r from-white to-indigo-100 shadow-lg rounded-lg p-8 text-center transform hover:scale-105 hover:shadow-2xl transition duration-500"
            >
              <value.icon className="text-indigo-600 text-6xl mb-4" />
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
    <Footer/>
   </div>
  );
};

export default MainOverviews;
