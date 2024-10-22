


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



import React, { useState } from 'react';
import axios from 'axios';
import Footer from "./Footer"

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
    <div>
      <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: `url('Banners/Contact.svg')` }}
    >
      <div className="bg-white bg-opacity-90 p-4 max-w-lg w-full mx-auto rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-2 text-center text-[#002D62]">Contact Form</h1>
        <form onSubmit={handleSubmit} className="space-y-2">
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
          {/* <div>
            <label className="block text-gray-700">Resume (PDF only):</label>
            <input
              type="file"
              name="resume"
              accept="application/pdf"
              onChange={handleFileChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div> */}
          <button
            type="submit"
            className="w-full bg-[#002D62] text-white p-2 rounded-md font-semibold hover:bg-[#00308F] transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Contacts;
