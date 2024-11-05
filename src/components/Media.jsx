


// import React from 'react';
// import { FaMicrophone, FaNewspaper } from 'react-icons/fa';
// import Footer from './Footer';

// const Media = () => {
//   // Sample data for media releases
//   const mediaReleases = [
//     {
//       title: 'Press Conference: New Product Launch',
//       date: 'January 15, 2024',
//       description: 'Join us for an exclusive press conference about our upcoming product launch, featuring key insights and announcements.',
//       mediaType: 'Press Conference',
//       icon: <FaMicrophone className="text-4xl text-[#00308F]" />,
//     },
//     {
//       title: 'Digital Print: Sustainability Report',
//       date: 'March 10, 2024',
//       description: 'A detailed digital report on our latest efforts towards sustainability and green technology adoption.',
//       mediaType: 'Digital Print',
//       icon: <FaNewspaper className="text-4xl text-[#00308F]" />,
//     },
//     {
//       title: 'Press Conference: Partnership Announcement',
//       date: 'July 22, 2024',
//       description: 'We are announcing an exciting new partnership with a global leader in logistics. Join us for the details.',
//       mediaType: 'Press Conference',
//       icon: <FaMicrophone className="text-4xl text-[#00308F]" />,
//     },
//   ];

//   return (
//    <div>
//       <div className="bg-gray-50 min-h-screen p-8">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold text-[#00308F] text-center mb-10">Media Releases</h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {mediaReleases.map((release, index) => (
//             <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
//               <div className="flex items-center space-x-4 mb-4">
//                 {release.icon}
//                 <h2 className="text-2xl font-semibold text-[#00308F]">{release.title}</h2>
//               </div>
//               <p className="text-gray-500">{release.date}</p>
//               <p className="mt-4 text-gray-700">{release.description}</p>
//               <div className="mt-4">
//                 <span className="inline-block bg-[#00308F] text-white text-sm font-bold px-3 py-1 rounded">
//                   {release.mediaType}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     <Footer/>
//    </div>
//   );
// };

// export default Media;





import React from 'react';

import { motion } from 'framer-motion'; // For adding dynamic animations
import Footer from '../components/Footer';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

const Media = () => {

  const blogPosts = [
    {
      id: 1,
      date: '27 Aug',
      title: 'The Role of Inland Container Depot (ICD) in Streamlining India  Supply Chain',
      description: 'Ever wondered how an Inland Container Depot (ICD) located miles away from seaports could revolutionize a nation s supply chainv What makes inland facilities critical to enhancing trade efficiency  If yes, then you are definitely not the only one asking how businesses can move their shipments so efficiently from areas far away  from the coast. Get ready to discover the answers to how these facilities are changing the landscape of logistics',
      image: '/Banners/Blog 1.jpeg',
    },
    {
      id: 2,
      date: '19 Sep',
      title: ' How multi-modal transportation at Sanjvik Terminals enhances logistics efficiency',
      description: 'As industries expand, the demand for more efficient and cost-effective logistics solutions has increased more than ever. At the heart of this evolution lies multimodal transportation, a system that has revolutionized the way goods are transported. Sanjvik Terminals Pvt. Ltd. operated Inland Container Depot (ICD) at Bawal, strategically positioned near key industrial zones in northern India, has embraced this approach, significantly boosting logistics efficiency',
      image: '/Banners/Blog 2.jpeg',
    },
    {
      id: 3,
      date: '26 Oct',
      title: 'How multi-modal transportation at Sanjvik Terminals enhances logistics efficiency',
      description: 'In the global economy, businesses across industries are constantly seeking ways to optimize their logistics operations, reduce costs, improve delivery times and provide better services to customers. At the heart of this process are inland container depot widely known as dry port that store, handle and facilitate the movement of containers along the supply chain. One standout player in this field is ICD, Bawal, operated by Sanjvik Terminals Pvt. Ltd., renowned for its reliable services that drive supply chain efficiency.',
      image: '/Banners/Blog 3.png',
    },
  ];
  return (
   <div>
     <div className="relative">
     
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative  w-full"
      >
        <img
          src="/Banners/Blog (1).svg"
          alt="Custom Clearance"
          className="w-full h-[75vh] object-cover"
        />
        <div className="absolute inset-0  opacity-30 rounded-lg"></div>
        {/* <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg">Custom Clearance</h1>
        </div> */}
      </motion.div>
    

      
    
    </div>
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between ml-64 items-center">
         
          <h2 className="text-4xl font-bold">Latest From Our Blog Post</h2>
         
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden relative group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover transition-all duration-500 group-hover:h-64" 
                />
              </div>

              {/* Text Always Visible Below Image */}
              <div className="p-6 transition-all duration-300 group-hover:mt-4"> 
                <div className="flex items-center justify-between text-[#00308F] text-lg font-bold mb-2">
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <button className="text-[#00308F] font-semibold flex items-center">
                  MORE DETAILS <FiArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
   </div>
  );
};

export default Media;
