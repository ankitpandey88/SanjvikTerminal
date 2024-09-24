// import React from 'react';
// import { FaShieldAlt, FaUserTie, FaCheckCircle, FaLeaf, FaHandsHelping, FaGem } from 'react-icons/fa';


// const SanjvikOverview = () => {
//   return (
//     <div className="container mx-auto px-6 py-12">
//       {/* Vision Section */}
//       <div className="flex flex-col md:flex-row items-center mb-12">
//         <img src="./landingPage/mission.jpg" alt="Vision" className="w-1/2 h-76 mb-6 md:mb-0 md:mr-8" />
//         <div>
//           <h2 className="text-4xl font-bold text-orange-600 mb-4">Our Vision</h2>
//           <p className="text-gray-700 leading-relaxed text-lg">
//             Sanjvik Terminals envisions becoming a leading inland logistics hub, offering seamless solutions 
//             that drive economic growth and connectivity. Through continuous innovation and dedication to 
//             excellence, we envision a future where it serves as a pivotal hub, empowering global and domestic 
//             trade with innovative logistics solutions and sustainable practices.
//           </p>
//         </div>
//       </div>

//       {/* Mission Section */}
//       <div className="flex flex-col md:flex-row-reverse items-center mb-12">
//         <img src="./landingPage/vision.jpg" alt="Mission" className="w-1/2 h-76 mb-6 md:mb-0 md:ml-8" />
//         <div>
//           <h2 className="text-4xl font-bold text-orange-600 mb-4">Our Mission</h2>
//           <p className="text-gray-700 leading-relaxed text-lg">
//             At Sanjvik Terminals, we are driven by a mission to enhance the efficiency of logistics operations 
//             in India by providing reliable, scalable, and innovative solutions. We aim to support the country's 
//             economic growth by ensuring businesses and industries can transport their goods seamlessly to their 
//             intended destinations.
//           </p>
//         </div>
//       </div>

//       {/* Our Values Section */}
//       <div>
//         <h2 className="text-4xl font-bold text-orange-600 mb-8 text-center">Our Values</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Safety */}
//           <div className="flex items-start space-x-4">
//             <FaShieldAlt className="text-4xl text-orange-600" />
//             <div>
//               <h3 className="text-xl font-semibold text-orange-600">Safety</h3>
//               <p className="text-gray-600">
//                 Ensuring the highest standards of safety and security in all operations to protect our people, assets, and cargo.
//               </p>
//             </div>
//           </div>
          
//           {/* Customer-Centric Approach */}
//           <div className="flex items-start space-x-4">
//             <FaUserTie className="text-4xl text-orange-600" />
//             <div>
//               <h3 className="text-xl font-semibold text-orange-600">Customer-Centric Approach</h3>
//               <p className="text-gray-600">
//                 Prioritizing customer needs by offering tailored, reliable solutions that simplify logistics operations.
//               </p>
//             </div>
//           </div>

//           {/* Integrity */}
//           <div className="flex items-start space-x-4">
//             <FaCheckCircle className="text-4xl text-orange-600" />
//             <div>
//               <h3 className="text-xl font-semibold text-orange-600">Integrity</h3>
//               <p className="text-gray-600">
//                 Conducting business with transparency, honesty, and accountability at every level.
//               </p>
//             </div>
//           </div>

//           {/* Excellence */}
//           <div className="flex items-start space-x-4">
//             <FaGem className="text-4xl text-orange-600" />
//             <div>
//               <h3 className="text-xl font-semibold text-orange-600">Excellence</h3>
//               <p className="text-gray-600">
//                 Striving for operational excellence through continuous improvement and adoption of advanced technologies.
//               </p>
//             </div>
//           </div>

//           {/* Sustainability */}
//           <div className="flex items-start space-x-4">
//             <FaLeaf className="text-4xl text-orange-600" />
//             <div>
//               <h3 className="text-xl font-semibold text-orange-600">Sustainability</h3>
//               <p className="text-gray-600">
//                 Committed to environmentally responsible practices that reduce our impact on the planet.
//               </p>
//             </div>
//           </div>

//           {/* Collaboration */}
//           <div className="flex items-start space-x-4">
//             <FaHandsHelping className="text-4xl text-orange-600" />
//             <div>
//               <h3 className="text-xl font-semibold text-orange-600">Collaboration</h3>
//               <p className="text-gray-600">
//                 Working together with partners, employees, and stakeholders to nurture mutual growth and success.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SanjvikOverview;

import React from 'react';
import { FaShieldAlt, FaUserTie, FaCheckCircle, FaLeaf, FaHandsHelping, FaGem } from 'react-icons/fa';

const SanjvikOverview = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Vision Section */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <img
          src="./landingPage/vision.jpg"
          alt="Vision"
          className="w-1/2 h-70 mb-6 md:mb-0 md:mr-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-500"
        />
        <div className="transition-opacity duration-700 ease-in-out">
          <h2 className="text-4xl font-bold text-orange-600 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Sanjvik Terminals envisions becoming a leading inland logistics hub, offering seamless solutions 
            that drive economic growth and connectivity. Through continuous innovation and dedication to 
            excellence, we envision a future where it serves as a pivotal hub, empowering global and domestic 
            trade with innovative logistics solutions and sustainable practices.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row-reverse items-center mb-12">
        <img
          src="./landingPage/mission.jpg"
          alt="Mission"
          className="w-1/2 h-70 mb-6 md:mb-0 md:ml-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-500"
        />
        <div className="transition-opacity duration-700 ease-in-out">
          <h2 className="text-4xl font-bold text-orange-600 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            At Sanjvik Terminals, we are driven by a mission to enhance the efficiency of logistics operations 
            in India by providing reliable, scalable, and innovative solutions. We aim to support the country's 
            economic growth by ensuring businesses and industries can transport their goods seamlessly to their 
            intended destinations.
          </p>
        </div>
      </div>

      {/* Our Values Section */}
      <div>
        <h2 className="text-4xl font-bold text-orange-600 mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Safety */}
          <div className="flex items-start space-x-4 group">
            <FaShieldAlt className="text-4xl text-orange-600 transition-transform duration-300 transform group-hover:scale-125" />
            <div className="transition-opacity duration-700 ease-in-out">
              <h3 className="text-xl font-semibold text-orange-600">Safety</h3>
              <p className="text-gray-600">
                Ensuring the highest standards of safety and security in all operations to protect our people, assets, and cargo.
              </p>
            </div>
          </div>
          
          {/* Customer-Centric Approach */}
          <div className="flex items-start space-x-4 group">
            <FaUserTie className="text-4xl text-orange-600 transition-transform duration-300 transform group-hover:scale-125" />
            <div className="transition-opacity duration-700 ease-in-out">
              <h3 className="text-xl font-semibold text-orange-600">Customer-Centric Approach</h3>
              <p className="text-gray-600">
                Prioritizing customer needs by offering tailored, reliable solutions that simplify logistics operations.
              </p>
            </div>
          </div>

          {/* Integrity */}
          <div className="flex items-start space-x-4 group">
            <FaCheckCircle className="text-4xl text-orange-600 transition-transform duration-300 transform group-hover:scale-125" />
            <div className="transition-opacity duration-700 ease-in-out">
              <h3 className="text-xl font-semibold text-orange-600">Integrity</h3>
              <p className="text-gray-600">
                Conducting business with transparency, honesty, and accountability at every level.
              </p>
            </div>
          </div>

          {/* Excellence */}
          <div className="flex items-start space-x-4 group">
            <FaGem className="text-4xl text-orange-600 transition-transform duration-300 transform group-hover:scale-125" />
            <div className="transition-opacity duration-700 ease-in-out">
              <h3 className="text-xl font-semibold text-orange-600">Excellence</h3>
              <p className="text-gray-600">
                Striving for operational excellence through continuous improvement and adoption of advanced technologies.
              </p>
            </div>
          </div>

          {/* Sustainability */}
          <div className="flex items-start space-x-4 group">
            <FaLeaf className="text-4xl text-orange-600 transition-transform duration-300 transform group-hover:scale-125" />
            <div className="transition-opacity duration-700 ease-in-out">
              <h3 className="text-xl font-semibold text-orange-600">Sustainability</h3>
              <p className="text-gray-600">
                Committed to environmentally responsible practices that reduce our impact on the planet.
              </p>
            </div>
          </div>

          {/* Collaboration */}
          <div className="flex items-start space-x-4 group">
            <FaHandsHelping className="text-4xl text-orange-600 transition-transform duration-300 transform group-hover:scale-125" />
            <div className="transition-opacity duration-700 ease-in-out">
              <h3 className="text-xl font-semibold text-orange-600">Collaboration</h3>
              <p className="text-gray-600">
                Working together with partners, employees, and stakeholders to nurture mutual growth and success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SanjvikOverview;
