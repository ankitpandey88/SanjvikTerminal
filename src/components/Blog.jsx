


// import React from 'react';
// import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

// const BlogSection = () => {
//   const blogPosts = [
//     {
//       id: 1,
//       date: '26 Oct',
//       title: 'Trends in Freight Transportation & the COVID-19 Impact',
//       description: 'Latest News',
//       image: '/landingPage/blog1.avif',
//     },
//     {
//       id: 2,
//       date: '26 Oct',
//       title: 'Named a Finalist For Year 2019 Best Choice Award',
//       description: 'How all this mistaken idea of denouncing pleasure and praising pain was...',
//       image: '/landingPage/blog2.avif',
//     },
//     {
//       id: 3,
//       date: '26 Oct',
//       title: 'Conditions for Applying C/O for Transited Goods',
//       description: 'How all this mistaken idea of denouncing pleasure and praising pain was...',
//       image: '/landingPage/blog3.avif',
//     },
//   ];

//   return (
//     <section className="bg-white py-10">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="flex justify-between items-center">
//           <div className="text-[#00308F] font-semibold flex items-center">
//             <FiArrowLeft className="mr-2" /> 
//             NEWS & UPDATES
//           </div>
//           <h2 className="text-4xl font-bold">Latest From Our Blog Post</h2>
//           <div className="text-[#00308F] font-semibold flex items-center">
//             READ ALL NEWS 
//             <FiArrowRight className="ml-2" />
//           </div>
//         </div>

//         {/* Blog Posts */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
//           {blogPosts.map((post) => (
//             <div
//               key={post.id}
//               className="bg-white shadow-lg rounded-lg overflow-hidden relative group"
//             >
//               {/* Image Container */}
//               <div className="relative h-52 overflow-hidden">
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="w-full h-full object-cover transition-all duration-300 group-hover:h-full group-hover:absolute group-hover:top-0"
//                 />
//               </div>

//               {/* Text Below Image */}
//               <div className="p-6 group-hover:hidden">
//                 <div className="flex items-center justify-between text-[#00308F] text-lg font-bold mb-2">
//                   <span>{post.date}</span>
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">{post.title}</h3>
//                 <p className="text-gray-600 mb-4">{post.description}</p>
//                 <button className="text-[#00308F] font-semibold flex items-center">
//                   MORE DETAILS <FiArrowRight className="ml-2" />
//                 </button>
//               </div>

//               {/* Text Overlay on Hover */}
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
//                 <div className="flex items-center justify-between text-lg font-bold mb-2">
//                   <span>{post.date}</span>
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">{post.title}</h3>
//                 <p className="mb-4">{post.description}</p>
//                 <button className="text-[#00308F] font-semibold flex items-center">
//                   MORE DETAILS <FiArrowRight className="ml-2" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;


import React from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      date: '26 Oct',
      title: 'Trends in Freight Transportation & the COVID-19 Impact',
      description: 'Latest News',
      image: '/landingPage/blog1.avif',
    },
    {
      id: 2,
      date: '26 Oct',
      title: 'Named a Finalist For Year 2019 Best Choice Award',
      description: 'How all this mistaken idea of denouncing pleasure and praising pain was...',
      image: '/landingPage/blog2.avif',
    },
    {
      id: 3,
      date: '26 Oct',
      title: 'Conditions for Applying C/O for Transited Goods',
      description: 'How all this mistaken idea of denouncing pleasure and praising pain was...',
      image: '/landingPage/blog3.avif',
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center">
          <div className="text-[#00308F] font-semibold flex items-center">
            <FiArrowLeft className="mr-2" /> 
            NEWS & UPDATES
          </div>
          <h2 className="text-4xl font-bold">Latest From Our Blog Post</h2>
          <div className="text-[#00308F] font-semibold flex items-center">
            READ ALL NEWS 
            <FiArrowRight className="ml-2" />
          </div>
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
                  className="w-full h-52 object-cover transition-all duration-300 group-hover:h-72" 
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
  );
};

export default BlogSection;

