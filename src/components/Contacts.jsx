


// import React, { useState } from 'react';
// import axios from 'axios';

// function Contacts() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     message: '',
//     resume: null
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       resume: e.target.files[0] // Save the uploaded file
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const formDataWithFile = new FormData();
//     formDataWithFile.append('name', formData.name);
//     formDataWithFile.append('email', formData.email);
//     formDataWithFile.append('mobile', formData.mobile);
//     formDataWithFile.append('message', formData.message);
//     formDataWithFile.append('resume', formData.resume);

//     try {
//       await axios.post('http://localhost:5000/send-email', formDataWithFile, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       alert('Email sent successfully!');
//     } catch (error) {
//       console.error('Error sending email:', error);
//       alert('Failed to send email.');
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-8 border border-gray-300 rounded-lg shadow-lg">
//       <h1 className="text-2xl font-bold mb-4 text-center">Contact Form</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-gray-700">Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700">Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700">Mobile:</label>
//           <input
//             type="text"
//             name="mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700">Message:</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
//           ></textarea>
//         </div>
//         <div>
//           <label className="block text-gray-700">Resume (PDF only):</label>
//           <input
//             type="file"
//             name="resume"
//             accept="application/pdf"
//             onChange={handleFileChange}
//             required
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded-md font-semibold hover:bg-blue-600 transition"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Contacts;



// import React, { useState } from 'react';
// import axios from 'axios';
// import Footer from "./Footer"

// function Contacts() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     message: '',
//     resume: null
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       resume: e.target.files[0] // Save the uploaded file
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const formDataWithFile = new FormData();
//     formDataWithFile.append('name', formData.name);
//     formDataWithFile.append('email', formData.email);
//     formDataWithFile.append('mobile', formData.mobile);
//     formDataWithFile.append('message', formData.message);
//     formDataWithFile.append('resume', formData.resume);

//     try {
//       await axios.post('http://localhost:5000/send-email', formDataWithFile, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       alert('Email sent successfully!');
//     } catch (error) {
//       console.error('Error sending email:', error);
//       alert('Failed to send email.');
//     }
//   };

//   return (
//     <div>
//       <div 
//       className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" 
//       style={{ backgroundImage: `url('Banners/Contact.svg')` }}
//     >
//       <div className="bg-white bg-opacity-90 p-4 max-w-lg w-full mx-auto rounded-lg shadow-lg">
//         <h1 className="text-2xl font-bold mb-2 text-center text-[#002D62]">Contact Form</h1>
//         <form onSubmit={handleSubmit} className="space-y-2">
//           <div>
//             <label className="block text-gray-700">Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Mobile:</label>
//             <input
//               type="text"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Message:</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
//             ></textarea>
//           </div>
//           <div>
//             <label className="block text-gray-700">Resume (PDF only):</label>
//             <input
//               type="file"
//               name="resume"
//               accept="application/pdf"
//               onChange={handleFileChange}
//               required
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-[#002D62] text-white p-2 rounded-md font-semibold hover:bg-[#00308F] transition"
//           >
//             Send
//           </button>
//         </form>
//       </div>
//     </div>
//     <Footer/>
//     </div>
//   );
// }

// export default Contacts;


// import React, { useState } from 'react';
// import axios from 'axios';
// import Footer from './Footer';

// function Contacts() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     message: '',
//     resume: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       resume: e.target.files[0], // Save the uploaded file
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataWithFile = new FormData();
//     formDataWithFile.append('name', formData.name);
//     formDataWithFile.append('email', formData.email);
//     formDataWithFile.append('mobile', formData.mobile);
//     formDataWithFile.append('message', formData.message);
//     formDataWithFile.append('resume', formData.resume);

//     try {
//       await axios.post('http://localhost:5000/send-email', formDataWithFile, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert('Email sent successfully!');
//     } catch (error) {
//       console.error('Error sending email:', error);
//       alert('Failed to send email.');
//     }
//   };

//   return (
//     <div className=''>
//       <div className="min-h-96 flex">
//         {/* Left Side: Background Image and Contact Details */}
//         <div
//           className="w-full md:w-full bg-cover bg-center bg-no-repeat relative"
//           style={{ backgroundImage: `url('Banners/Contact.svg')` }}
//         >
//           <div className="h-64 flex flex-col justify-center font-semibold mb-16 items-start p-8 text-white bg-black bg-opacity-55 rounded-lg m-8">
//             <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
//             <p className="mb-2">
//               Email: <a href="mailto:tm@sanjvik.com" className="underline">tm@sanjvik.com</a>
//             </p>
//             <p className="mb-2">
//               Phone: <a href="tel:+918448114803" className="underline">+91-8448114803</a>
//             </p>
//             <p className="mb-4">
//               Address: Sanjvik Terminals Pvt. Ltd. ICD - Inland Container Depot, Plot No. 1, Sector 9, Near NH8, Industrial Growth Centre, Bawal, Distt. Rewari, Haryana.
//             </p>
//           </div>
//         </div>

//         {/* Right Side: Contact Form */}
        
//       </div>
//       <div className="w-full md:w-2/3 flex ml-64  bg-indigo-100  items-center mb-24 justify-center bg-white p-6">
//           <div className="bg-[#f0f4f8] bg-opacity-90 p-2 max-w-lg w-full mx-auto rounded-lg shadow-lg">
//             <h1 className="text-2xl font-bold mb-4 text-center text-[#002D62]">Contact Us</h1>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-gray-700">Name:</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700">Email:</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700">Mobile:</label>
//                 <input
//                   type="text"
//                   name="mobile"
//                   value={formData.mobile}
//                   onChange={handleChange}
//                   required
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700">Message:</label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
//                 ></textarea>
//               </div>
//               {/* <div>
//                 <label className="block text-gray-700">Resume (PDF only):</label>
//                 <input
//                   type="file"
//                   name="resume"
//                   accept="application/pdf"
//                   onChange={handleFileChange}
//                   required
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
//                 />
//               </div> */}
//               <button
//                 type="submit"
//                 className="w-full bg-[#002D62] text-white p-2 rounded-md font-semibold hover:bg-[#00308F] transition"
//               >
//                 Send
//               </button>
//             </form>
//           </div>
//         </div>
//       <Footer />
//     </div>
//   );
// }

// export default Contacts;

import React, { useState } from 'react';
import axios from 'axios';
import { FaLinkedin, FaTwitter } from 'react-icons/fa'; // Updated FaXTwitter to FaTwitter
import Footer from './Footer';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files[0],
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
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email.');
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="grid md:grid-cols-2">
        {/* Left Side: Contact Info with Background */}
        <div
          className="relative bg-cover bg-center p-8 text-white"
          style={{ backgroundImage: `url('Banners/Contact.svg')` }}
        >
          <div className="bg-black bg-opacity-55 p-6 rounded-lg space-y-4">
            <h1 className="text-3xl font-bold">Get in Touch</h1>
            <p>We are here to assist you with all your queries and requirements. Reach out to us through the following channels:</p>
            <p>Email: <a href="mailto:tm@sanjvik.com" className="underline">tm@sanjvik.com</a></p>
            <p>Phone: <a href="tel:+918448114803" className="underline">+91-8448114803</a></p>
            <p>Address: Sanjvik Terminals Pvt. Ltd. ICD - Inland Container Depot, Plot No. 1, Sector 9, Near NH8, Industrial Growth Centre, Bawal, Distt. Rewari, Haryana.</p>
          </div>
          <div className="flex space-x-4 mt-6">
            <a href="https://www.linkedin.com/company/sanjvik-terminals-pvt-ltd" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaLinkedin size={28} />
            </a>
            <a href="https://x.com/SanjvikTerminal" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaTwitter size={28} /> {/* Updated FaXTwitter to FaTwitter */}
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex items-center justify-center p-8 bg-indigo-100">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-center text-2xl font-bold text-indigo-900 mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
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
                  className="w-full p-2 border border-gray-300 rounded-md"
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
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#002D62] text-white p-2 rounded-md hover:bg-indigo-700 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
