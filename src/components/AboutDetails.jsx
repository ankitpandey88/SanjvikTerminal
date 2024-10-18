


// import React from 'react';
// import { FaClipboardCheck, FaShippingFast, FaCogs } from 'react-icons/fa';
// import { motion } from 'framer-motion'; // For adding dynamic animations
// import Footer from '../components/Footer';

// const AboutDetails = () => {
//   return (
//     <div>
//       <div className="relative">
//         {/* Who We Are Section */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="bg-cover bg-center h-[60vh] relative text-white flex items-center justify-center"
//           style={{
//             backgroundImage: "url('/page/about.jpg')",
//           }}
//         >
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="p-8 bg-black bg-opacity-50 max-w-3xl text-center rounded-lg shadow-lg"
//           >
//             <h1 className="text-5xl font-bold mb-4">Who We Are</h1>
//             <p className="text-lg">
//               Sanjvik Terminals Pvt. Ltd. is a dry port located in Bawal, Haryana, and one of the leading Inland Container Depots (ICD) in the Northern region. Our facility connects major industrial zones, equipped with state-of-the-art infrastructure tailored to handle high volumes of containers with precision and efficiency.
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* Card Section - Who We Are */}
//         <div className="py-12 bg-gray-100">
//           <div className="container mx-auto">
//             <div className="bg-white shadow-lg rounded-lg p-6 mx-auto max-w-8xl">
//               <motion.div
//                 initial={{ x: -200, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="mb-6"
//               >
//                 <h2 className="text-2xl text-[#00308F] font-semibold mb-4 flex items-center">
//                   <FaClipboardCheck className="mr-2 text-blue-500" /> 
//                   State-of-the-Art Infrastructure
//                 </h2>
//                 <p className="text-gray-700">
//                   Our facility is equipped with cutting-edge infrastructure and systems, ensuring the seamless movement of cargo and its timely delivery. We handle high volumes of containers with precision, using technology-driven processes to optimize efficiency.
//                 </p>
//               </motion.div>

//               <motion.div
//                 initial={{ x: 200, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="mb-6"
//               >
//                 <h2 className="text-2xl text-[#00308F] font-semibold mb-4 flex items-center">
//                   <FaShippingFast className="mr-2 text-blue-500" /> 
//                   Integrated Management Systems
//                 </h2>
//                 <p className="text-gray-700">
//                   Our integrated management systems are continuously monitored and upgraded to align with the latest industry innovations. This ensures minimal delays, secure handling, and timely delivery of goods, meeting the growing demands of the global supply chain.
//                 </p>
//               </motion.div>

//               <motion.div
//                 initial={{ y: 100, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <h2 className="text-2xl text-[#00308F] font-semibold mb-4 flex items-center">
//                   <FaCogs className="mr-2 text-blue-500" /> 
//                   Trusted Logistics Partner
//                 </h2>
//                 <p className="text-gray-700">
//                   Our highly trained staff and cutting-edge technology work together to ensure smooth and uninterrupted service. We are a trusted partner in the logistics landscape, delivering optimal safety, swift processing, and reliable service at every step.
//                 </p>
//               </motion.div>
//             </div>
//           </div>
//         </div>

//         {/* About Us Section */}
//         <div className="py-12 bg-gray-100">
//           <div className="container mx-auto">
//             <div className="bg-white shadow-lg rounded-lg p-6 mx-auto max-w-8xl">
//               <motion.div
//                 initial={{ x: -200, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="mb-6"
//               >
//                 <h2 className="text-2xl text-[#00308F] font-semibold mb-4 flex items-center">
//                   <FaClipboardCheck className="mr-2 text-blue-500" /> 
//                   Our History
//                 </h2>
//                 <p className="text-gray-700">
//                   Sanjvik Terminals Pvt. Ltd. was incorporated in 2007 with the primary objective of developing and operating an Inland Container Depot (ICD) in Bawal. In 2024, the company was acquired by Om Logistics Ltd., a premier company in the Indian logistics and supply chain management industry.
//                 </p>
//               </motion.div>

//               <motion.div
//                 initial={{ x: 200, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="mb-6"
//               >
//                 <h2 className="text-2xl text-[#00308F] font-semibold mb-4 flex items-center">
//                   <FaShippingFast className="mr-2 text-blue-500" /> 
//                   Strategic Location & Connectivity
//                 </h2>
//                 <p className="text-gray-700">
//                   Strategically located, the terminal has been designed to facilitate efficient movement and storage of both domestic and EXIM cargo. With proximity to key industrial zones and major highways, we offer excellent connectivity to ports and airports across the country.
//                 </p>
//               </motion.div>

//               <motion.div
//                 initial={{ y: 100, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <h2 className="text-2xl text-[#00308F] font-semibold mb-4 flex items-center">
//                   <FaCogs className="mr-2 text-blue-500" /> 
//                   Advanced Infrastructure & Systems
//                 </h2>
//                 <p className="text-gray-700">
//                   The ICD is fully equipped to handle containers with integrated management systems that ensure seamless operations and timely delivery. These systems are continuously monitored and upgraded, enabling us to adapt to the evolving demands of global trade and logistics.
//                 </p>
//               </motion.div>

//               <motion.div
//                 initial={{ y: 100, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <h2 className="text-2xl text-[#00308F] font-semibold mb-4 flex items-center">
//                   <FaClipboardCheck className="mr-2 text-blue-500" /> 
//                   Commitment to Innovation & Excellence
//                 </h2>
//                 <p className="text-gray-700">
//                   Our commitment to innovation, safety, and excellence ensures that we remain a trusted partner in the logistics landscape. We deliver customized solutions, adapting to the changing global trade dynamics while maintaining high standards of safety and service efficiency.
//                 </p>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default AboutDetails;





// import React from 'react';
// import Footer from '../components/Footer';

// const AboutDetails = () => {
//   return (
//     <div className="relative">
//       {/* Who We Are Section */}
//       <div
//         className="relative h-[75vh] flex items-center justify-center"
//         style={{
//           backgroundImage: "url('/Banners/about us.svg')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-70"></div>
//         <div className="relative z-10 text-center text-white">
//           <h1 className="text-5xl font-bold mb-4">Company Overview</h1>
//         </div>
//       </div>

//       {/* Description Section - Single Column */}
//       <div className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 lg:px-12">
//           <div className="bg-white shadow-lg rounded-lg p-8">
//             <h2 className="text-4xl font-bold text-[#002D62] mb-6 text-center">About Sanjvik Terminals</h2>
//             <p></p>

            
           
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <Footer />
//     </div>
//   );
// };

// export default AboutDetails;


// import React from 'react';
// import Footer from '../components/Footer';

// const AboutDetails = () => {
//   return (
//     <div className="relative">
//       {/* Who We Are Section */}
//       <div
//         className="relative h-[75vh] flex items-center justify-center"
//         style={{
//           backgroundImage: "url('/Banners/about us.svg')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-70"></div>
//         <div className="relative z-10 text-center text-white">
//           <h1 className="text-5xl font-bold mb-4">Company Overview</h1>
//         </div>
//       </div>

//       {/* Description Section - Single Column */}
//       <div className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4 lg:px-12">
//           <div className="bg-white shadow-lg rounded-lg p-8">
//             <h2 className="text-4xl font-bold text-[#002D62] mb-6 text-center">About Sanjvik Terminals</h2>
            
//             <p className="mb-4">
//               <strong>About Us</strong><br />
//               Sanjvik Terminals Pvt. Ltd. was incorporated in 2007 with the primary objective of developing and operating an Inland Container Depot (ICD) in Bawal. In 2024, the company was acquired by Om Logistics Ltd., a premier company in the Indian logistics and supply chain management industry. This acquisition has empowered Sanjvik Terminals to further enhance its services by leveraging Om Logistics' vast expertise and nationwide network, making it a key contributor to the growth of India's logistics and supply chain ecosystem.
//             </p>

//             <p className="mb-4">
//               Strategically located, the terminal has been designed to facilitate efficient movement and storage of both domestic & EXIM cargo. Situated near key industrial zones and major highways, the terminal offers exceptional connectivity to important ports and airports across the country. The infrastructure at Sanjvik Terminals is specifically designed to manage high volumes of cargo with exceptional precision.
//             </p>

//             <p className="mb-4">
//               The ICD is fully equipped to handle containers with integrated management systems that ensure seamless operations and timely delivery of all cargo. The advanced infrastructure with well-defined workflows at the facility enables high volumes to be managed with safety, minimizing delays and improving overall operational efficiency. These systems are continuously monitored and upgraded to keep pace with the evolving demands of the logistics industry. Our commitment to innovation, safety, and excellence ensures that we can adapt to the changing landscape of global trade while delivering customized services to our customers.
//             </p>

//             <h3 className="text-3xl font-semibold text-[#002D62] mt-10 mb-4">Our Facility</h3>
//             <p className="mb-4">
//               Sanjvik Terminals Pvt. Ltd. benefits from a strategic position within India's key industrial areas, offering exceptional connectivity. With its prime location and well-established transportation links, the facility is designed to streamline cargo movement, ensuring fast and efficient delivery. Our robust network of road, rail, port, and airport connections enhances our ability to serve as a vital hub for businesses across India, making Sanjvik Terminals a preferred choice for logistics solutions.
//             </p>

//             <p className="mb-4">
//               ICD Bawal leverages its prime location with seamless connectivity directly from the highway to the terminal. One of its advantages is the absence of "No Entry" restrictions, ensuring that vehicles can move freely and without delays both when entering and exiting the terminal.
//             </p>

//             <h3 className="text-3xl font-semibold text-[#002D62] mt-10 mb-4">Strategic Location</h3>
//             <p className="mb-4">
//               The facility's strategic location is a significant asset within the Haryana State Industrial and Infrastructure Development Corporation (HSIIDC) industrial estate and is in very close proximity to the Delhi-Mumbai Industrial Corridor (DMIC). It plays a vital role in facilitating the movement of containers across the region. The terminal is strategically situated near key national highways NH-48 and NH-71, providing easy access to northern and western India via road.
//             </p>

//             <p className="mb-4">
//               Additionally, the direct connectivity to the Western Dedicated Freight Corridor (WDFC) and Indian Railways supports swift and efficient rail cargo transport. This prime location ensures exceptional connectivity to major ports such as Mundra, Pipavav, and JNPT, facilitating seamless cargo movement across the region. Its proximity to Indira Gandhi International Airport (DEL) further enhances air cargo handling efficiency, making it easier to manage and expedite air freight operations.
//             </p>

//             <p className="mb-4">
//               Overall, this well-integrated system of ports, airports, highways, and railways positions Sanjvik Terminals as a pivotal player in handling containers (EXIM & Domestic), steel, and auto with exceptional ease and efficiency.
//             </p>

//             <h3 className="text-3xl font-semibold text-[#002D62] mt-10 mb-4">Seamless Connectivity</h3>
//             <p>
//               Effective connectivity is crucial to logistics, and Sanjvik Terminals recognizes its pivotal role. It is seamlessly connected by rail to the Gateway Ports of Mundra, Pipavav, and JNPT, the largest and most significant ports in India, ensuring seamless cargo connectivity.
//             </p>

//             <p>
//               This connectivity is enhanced through a strategic partnership with IndiaLinx, a subsidiary of the esteemed APL Group of Singapore. This collaboration ensures reliable and efficient rail transportation services for the smooth and timely movement of cargo. By leveraging this extensive connectivity, Sanjvik Terminals delivers a streamlined logistics experience, effectively reducing transit times and improving supply chain efficiency.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <Footer />
//     </div>
//   );
// };

// export default AboutDetails;




// import React from 'react';
// import Footer from '../components/Footer';

// const AboutDetails = () => {
//   return (
//     <div className="relative">
//       {/* Who We Are Section */}
//       <div
//         className="relative h-[75vh] flex items-center justify-center"
//         style={{
//           backgroundImage: "url('/Banners/about us.svg')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-70"></div>
//         <div className="relative z-10 text-center text-white animate-fade-in">
//           <h1 className="text-5xl font-bold mb-4">Company Overview</h1>
//         </div>
//       </div>

//       {/* About Us Section */}
//       <div className="py-16 bg-gray-50 animate-slide-up">
//         <div className="container mx-auto px-4 lg:px-12">
//           <div className="bg-white shadow-lg rounded-lg p-8 space-y-8">
//             <h2 className="text-4xl font-bold text-[#002D62] mb-6 text-center">
//               About Sanjvik Terminals
//             </h2>

//             <p className="text-gray-700 leading-relaxed">
//               <strong>About Us</strong><br />
//               Sanjvik Terminals Pvt. Ltd. was incorporated in 2007 with the primary objective of developing and operating an Inland Container Depot (ICD) in Bawal. In 2024, the company was acquired by Om Logistics Ltd., a premier company in the Indian logistics and supply chain management industry. This acquisition has empowered Sanjvik Terminals to further enhance its services by leveraging Om Logistics' vast expertise and nationwide network, making it a key contributor to the growth of India's logistics and supply chain ecosystem.
//             </p>

//             <p className="text-gray-700 leading-relaxed">
//               Strategically located, the terminal has been designed to facilitate efficient movement and storage of both domestic & EXIM cargo. Situated near key industrial zones and major highways, the terminal offers exceptional connectivity to important ports and airports across the country. The infrastructure at Sanjvik Terminals is specifically designed to manage high volumes of cargo with exceptional precision.
//             </p>

//             <p className="text-gray-700 leading-relaxed">
//               The ICD is fully equipped to handle containers with integrated management systems that ensure seamless operations and timely delivery of all cargo. The advanced infrastructure with well-defined workflows at the facility enables high volumes to be managed with safety, minimizing delays and improving overall operational efficiency. These systems are continuously monitored and upgraded to keep pace with the evolving demands of the logistics industry. Our commitment to innovation, safety and excellence ensures that we can adapt to the changing landscape of global trade while delivering customized services to our customers.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Our Facility Section */}
//       <div className="py-16 bg-gray-100">
//         <div className="container mx-auto px-4 lg:px-12">
//           <div className="bg-white shadow-lg rounded-lg p-8 space-y-8">
//             <h3 className="text-3xl font-semibold text-[#002D62]">
//               Our Facility
//             </h3>
//             <p className="text-gray-700 leading-relaxed">
//               Sanjvik Terminals Pvt. Ltd. benefits from a strategic position within India's key industrial areas, offering exceptional connectivity. With its prime location and well-established transportation links, the facility is designed to streamline cargo movement, ensuring fast and efficient delivery. Our robust network of road, rail, port, and airport connections enhances our ability to serve as a vital hub for businesses across India, making Sanjvik Terminals a preferred choice for logistics solutions.
//             </p>

//             <p className="text-gray-700 leading-relaxed">
//               ICD Bawal leverages its prime location with seamless connectivity directly from the highway to the terminal. One of its advantages is the absence of "No Entry" restrictions, ensuring that vehicles can move freely and without delays both when entering and exiting the terminal.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Strategic Location Section */}
//       <div className="bg-[#002D62] py-16 text-white">
//         <div className="container mx-auto px-4 lg:px-12">
//           <div className="space-y-8">
//             <h3 className="text-3xl font-semibold text-center">
//               Strategic Location
//             </h3>

//             <p className="leading-relaxed text-center">
//               The facility's strategic location is a significant asset within the Haryana State Industrial and Infrastructure Development Corporation (HSIIDC) industrial estate and very close proximity to Delhi-Mumbai Industrial Corridor (DMIC), it plays a vital role in facilitating the movement of containers across the region. The terminal is strategically situated near key national highways NH-48 and NH-71, providing easy access to northern and western India via road.
//             </p>

//             <p className="leading-relaxed text-center">
//               Additionally, the direct connectivity to the Western Dedicated Freight Corridor (WDFC) and Indian Railways supports swift and efficient rail cargo transport. This prime location ensures exceptional connectivity to major ports such as Mundra, Pipavav and JNPT, facilitating seamless cargo movement across the region. Its proximity to Indira Gandhi International Airport (DEL) further enhances air cargo handling efficiency, making it easier to manage and expedite air freight operations.
//             </p>

//             <p className="leading-relaxed text-center">
//               Overall, this well-integrated system of ports, airports, highways, and railways positions Sanjvik Terminals as a pivotal player in handling containers (EXIM & Domestic), steel, and auto with exceptional ease and efficiency.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Seamless Connectivity Section */}
//       <div className="py-16 bg-gray-100">
//         <div className="container mx-auto px-4 lg:px-12">
//           <div className="bg-white shadow-lg rounded-lg p-8 space-y-8">
//             <h3 className="text-3xl font-semibold text-[#002D62]">
//               Seamless Connectivity
//             </h3>

//             <p className="text-gray-700 leading-relaxed">
//               Effective connectivity is crucial to logistics and Sanjvik Terminals recognizes its pivotal role. It is seamlessly connected by rail to the Gateway Ports of Mundra, Pipavav, and JNPT, the largest and most significant ports in India, ensuring seamless cargo connectivity.
//             </p>

//             <p className="text-gray-700 leading-relaxed">
//               This connectivity is enhanced through a strategic partnership with IndiaLinx, a subsidiary of the esteemed APL Group of Singapore. This collaboration ensures reliable and efficient rail transportation services for the smooth and timely movement of cargo. By leveraging this extensive connectivity, Sanjvik Terminals delivers a streamlined logistics experience, effectively reducing transit times and improving supply chain efficiency.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <Footer />
//     </div>
//   );
// };

// export default AboutDetails;


import React from 'react';
import Footer from '../components/Footer';

const AboutDetails = () => {
  return (
    <div className="relative">
      {/* Header Section with Image Background */}
      <div
        className="relative h-[75vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/Banners/about us.svg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-70"></div>
        <div className="relative z-10 text-center text-white animate-fade-in">
          <h1 className="text-6xl font-bold mb-4">Company Overview</h1>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="bg-white shadow-lg rounded-lg p-8 space-y-12">
            <h2 className="text-4xl font-bold text-[#002D62] text-center">
              About Sanjvik Terminals
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-gray-700 leading-relaxed">
                Sanjvik Terminals Pvt. Ltd. was incorporated in 2007 with the primary objective of developing and operating an Inland Container Depot (ICD) in Bawal. In 2024, the company was acquired by Om Logistics Ltd., a premier company in the Indian logistics and supply chain management industry. This acquisition has empowered Sanjvik Terminals to further enhance its services by leveraging Om Logistics' vast expertise and nationwide network, making it a key contributor to the growth of India's logistics and supply chain ecosystem.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Strategically located, the terminal has been designed to facilitate efficient movement and storage of both domestic & EXIM cargo. Situated near key industrial zones and major highways, the terminal offers exceptional connectivity to important ports and airports across the country. The infrastructure at Sanjvik Terminals is specifically designed to manage high volumes of cargo with exceptional precision.
              </p>
            </div>

            <div className="text-center">
              <p className="text-gray-700 leading-relaxed">
                The ICD is fully equipped to handle containers with integrated management systems that ensure seamless operations and timely delivery of all cargo. The advanced infrastructure with well-defined workflows at the facility enables high volumes to be managed with safety, minimizing delays and improving overall operational efficiency. These systems are continuously monitored and upgraded to keep pace with the evolving demands of the logistics industry. Our commitment to innovation, safety, and excellence ensures that we can adapt to the changing landscape of global trade while delivering customized services to our customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Facility Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-semibold text-[#002D62]">
                Our Facility
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Sanjvik Terminals Pvt. Ltd. benefits from a strategic position within India's key industrial areas, offering exceptional connectivity. With its prime location and well-established transportation links, the facility is designed to streamline cargo movement, ensuring fast and efficient delivery.
              </p>
              <p className="text-gray-700 leading-relaxed">
                ICD Bawal leverages its prime location with seamless connectivity directly from the highway to the terminal. One of its advantages is the absence of "No Entry" restrictions, ensuring that vehicles can move freely and without delays both when entering and exiting the terminal.
              </p>
            </div>
            <div>
              <img
                src="/Banners/Our Facility.svg"
                alt="Our Facility"
                className="rounded-lg shadow-lg h-[70vh] w-[50rem] ml-32"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Location Section */}
      <div className="bg-[#002D62] py-16 text-white">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="space-y-8">
            <h3 className="text-4xl font-semibold text-center">
              Strategic Location
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <p className="leading-relaxed">
                The facility's strategic location is a significant asset within the Haryana State Industrial and Infrastructure Development Corporation (HSIIDC) industrial estate and in very close proximity to Delhi-Mumbai Industrial Corridor (DMIC). It plays a vital role in facilitating the movement of containers across the region. The terminal is strategically situated near key national highways NH-48 and NH-71, providing easy access to northern and western India via road.
              </p>
              <p className="leading-relaxed">
                Additionally, the direct connectivity to the Western Dedicated Freight Corridor (WDFC) and Indian Railways supports swift and efficient rail cargo transport. This prime location ensures exceptional connectivity to major ports such as Mundra, Pipavav, and JNPT, facilitating seamless cargo movement across the region. Its proximity to Indira Gandhi International Airport (DEL) further enhances air cargo handling efficiency, making it easier to manage and expedite air freight operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seamless Connectivity Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-semibold text-[#002D62]">
                Seamless Connectivity
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Effective connectivity is crucial to logistics and Sanjvik Terminals recognizes its pivotal role. It is seamlessly connected by rail to the Gateway Ports of Mundra, Pipavav, and JNPT, the largest and most significant ports in India, ensuring seamless cargo connectivity.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This connectivity is enhanced through a strategic partnership with IndiaLinx, a subsidiary of the esteemed APL Group of Singapore. This collaboration ensures reliable and efficient rail transportation services for the smooth and timely movement of cargo. By leveraging this extensive connectivity, Sanjvik Terminals delivers a streamlined logistics experience, effectively reducing transit times and improving supply chain efficiency.
              </p>
            </div>
            <div>
              <img
                src="/landingPage/landing4.png"
                alt="Seamless Connectivity"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default AboutDetails;
