


// import React, { useState } from 'react';
// import { AiOutlineClose } from 'react-icons/ai';
// import Footer from './Footer';

// const Contacts = () => {
//   const [ismodelOpen, setIsmodelOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contactNumber: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsmodelOpen(true);
//     setFormData({ name: '', email: '', contactNumber: '', message: '' }); // Reset the form
//   };

//   return (
//    <div>
//      <div className="relative min-h-screen bg-[url('/page/contact.jpg')] bg-cover bg-center flex items-center justify-center py-8 px-4">
//       <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Overlay */}
//       <div className="relative z-10 bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
//         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">Get in Touch</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="border border-gray-300 rounded w-full py-2 px-3 focus:ring-2 focus:ring-gray-400 focus:outline-none transition duration-150"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Email Address</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="border border-gray-300 rounded w-full py-2 px-3 focus:ring-2 focus:ring-gray-400 focus:outline-none transition duration-150"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Contact Number</label>
//             <input
//               type="tel"
//               name="contactNumber"
//               value={formData.contactNumber}
//               onChange={handleChange}
//               className="border border-gray-300 rounded w-full py-2 px-3 focus:ring-2 focus:ring-gray-400 focus:outline-none transition duration-150"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Your Message</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="border border-gray-300 rounded w-full py-2 px-3 focus:ring-2 focus:ring-gray-400 focus:outline-none transition duration-150"
//               rows="4"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-gray-800 text-white py-2 rounded-lg font-medium hover:bg-[#00308F] transition duration-200"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>

//       {ismodelOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
//           <div className="bg-white rounded-lg p-6 shadow-lg transform transition-all duration-300">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-bold">Thank You!</h3>
//               <button onClick={() => setIsmodelOpen(false)}>
//                 <AiOutlineClose className="text-xl text-gray-800" />
//               </button>
//             </div>
//             <p>Your message has been sent successfully!</p>
//             <button
//               onClick={() => setIsmodelOpen(false)}
//               className="mt-4 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition duration-200"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
    
//     </div>
//     <Footer/>
//    </div>
//   );
// };

// export default Contacts;

// import React, { useState } from 'react';
// import axios from 'axios';

// function Contacts() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/send-email', formData);
//       alert('Email sent successfully!');
//     } catch (error) {
//       console.error('Error sending email:', error);
//       alert('Failed to send email.');
//     }
//   };

//   return (
//     <div>
//       <h1>Contact Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Mobile:</label>
//           <input
//             type="text"
//             name="mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Message:</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }

// export default Contacts;


import React, { useState } from 'react';
import axios from 'axios';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    resume: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files[0] // Save the uploaded file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formDataWithFile = new FormData();
    formDataWithFile.append('name', formData.name);
    formDataWithFile.append('email', formData.email);
    formDataWithFile.append('mobile', formData.mobile);
    formDataWithFile.append('message', formData.message);
    formDataWithFile.append('resume', formData.resume);

    try {
      await axios.post('http://localhost:5000/send-email', formDataWithFile, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email.');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Contact Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700">Mobile:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Resume (PDF only):</label>
          <input
            type="file"
            name="resume"
            accept="application/pdf"
            onChange={handleFileChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md font-semibold hover:bg-blue-600 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contacts;
