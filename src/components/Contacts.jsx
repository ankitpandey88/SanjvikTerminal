


// import React, { useState } from 'react';
// import { AiOutlineClose } from 'react-icons/ai';
// import Footer from './Footer';

// const Contacts = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contactNumber: '', // Add contact number field
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsModalOpen(true);
//     setFormData({ name: '', email: '', contactNumber: '', message: '' }); // Reset the form
//   };

//   return (
//     <div>
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 px-4">
//         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
//           <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">Get in Touch</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-600">Full Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded w-full py-2 px-3 focus:ring-2 focus:ring-gray-400 focus:outline-none transition duration-150"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-600">Email Address</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded w-full py-2 px-3 focus:ring-2 focus:ring-gray-400 focus:outline-none transition duration-150"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-600">Contact Number</label>
//               <input
//                 type="tel" // Change input type to tel for phone numbers
//                 name="contactNumber"
//                 value={formData.contactNumber}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded w-full py-2 px-3 focus:ring-2 focus:ring-gray-400 focus:outline-none transition duration-150"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-600">Your Message</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded w-full py-2 px-3 focus:ring-2 focus:ring-gray-400 focus:outline-none transition duration-150"
//                 rows="4"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-gray-800 text-white py-2 rounded-lg font-medium hover:bg-[#00308F] transition duration-200"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         {isModalOpen && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
//             <div className="bg-white rounded-lg p-6 shadow-lg transform transition-all duration-300">
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-lg font-bold">Thank You!</h3>
//                 <button onClick={() => setIsModalOpen(false)}>
//                   <AiOutlineClose className="text-xl text-gray-800" />
//                 </button>
//               </div>
//               <p>Your message has been sent successfully!</p>
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="mt-4 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition duration-200"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Contacts;


import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Footer from './Footer';

const Contacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    setFormData({ name: '', email: '', contactNumber: '', message: '' }); // Reset the form
  };

  return (
   <div>
     <div className="relative min-h-screen bg-[url('/page/contact.jpg')] bg-cover bg-center flex items-center justify-center py-8 px-4">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Overlay */}
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full py-2 px-3 focus:ring-2 focus:ring-gray-400 focus:outline-none transition duration-150"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full py-2 px-3 focus:ring-2 focus:ring-gray-400 focus:outline-none transition duration-150"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Contact Number</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full py-2 px-3 focus:ring-2 focus:ring-gray-400 focus:outline-none transition duration-150"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full py-2 px-3 focus:ring-2 focus:ring-gray-400 focus:outline-none transition duration-150"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-lg font-medium hover:bg-[#00308F] transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg transform transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Thank You!</h3>
              <button onClick={() => setIsModalOpen(false)}>
                <AiOutlineClose className="text-xl text-gray-800" />
              </button>
            </div>
            <p>Your message has been sent successfully!</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    
    </div>
    <Footer/>
   </div>
  );
};

export default Contacts;
