

// import React, { useState } from 'react';
// import { FaUsers } from 'react-icons/fa';
// import { AiOutlineClose } from 'react-icons/ai';
// import Footer from './Footer';

// const Career = () => {
//   const [ismodelOpen, setIsmodelOpen] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const jobOpenings = [
//     {
//       title: 'Software Engineer',
//       department: 'IT Department',
//       location: 'Remote',
//       description: 'Join our dynamic team as a Software Engineer, contributing to innovative solutions.',
//     },
//     {
//       title: 'Marketing Specialist',
//       department: 'Marketing Department',
//       location: 'New York, NY',
//       description: 'Help increase brand awareness and drive engagement as a Marketing Specialist.',
//     },
//     {
//       title: 'HR Manager',
//       department: 'Human Resources',
//       location: 'San Francisco, CA',
//       description: 'Oversee recruitment and company culture initiatives as our HR Manager.',
//     },
//     {
//       title: 'Data Analyst',
//       department: 'Analytics Department',
//       location: 'Chicago, IL',
//       description: 'Analyze data to provide insights and support business decisions as a Data Analyst.',
//     },
//     {
//       title: 'Product Manager',
//       department: 'Product Department',
//       location: 'Remote',
//       description: 'Lead product development and strategy as a Product Manager.',
//     },
//     {
//       title: 'Sales Associate',
//       department: 'Sales Department',
//       location: 'Los Angeles, CA',
//       description: 'Drive sales and maintain client relationships as a Sales Associate.',
//     },
//     {
//       title: 'Graphic Designer',
//       department: 'Creative Department',
//       location: 'Remote',
//       description: 'Create visually stunning designs and branding materials as a Graphic Designer.',
//     },
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);
//     setTimeout(() => {
//       setIsmodelOpen(false);
//       setIsSubmitted(false);
//     }, 2000);
//   };

//   return (
//   <div>
//        <div className="bg-gray-50 min-h-screen p-8">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold text-[#00308F] text-center mb-10">Careers at Sanjvik Terminal</h1>

//         <div className="mb-12 text-center">
//           <FaUsers className="text-6xl text-[#00308F] mx-auto" />
//           <p className="mt-4 text-lg">Join a team that values innovation, collaboration, and excellence.</p>
//         </div>

//         <div className="overflow-x-auto flex space-x-4 pb-4">
//           {jobOpenings.map((job, index) => (
//             <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex-none w-72 transition-transform duration-300 hover:scale-105">
//               <h3 className="text-xl font-semibold text-[#00308F]">{job.title}</h3>
//               <p className="text-gray-600">{job.department} | {job.location}</p>
//               <p className="mt-4 text-gray-700">{job.description}</p>
//               <button
//                 onClick={() => setIsmodelOpen(true)}
//                 className="mt-6 bg-[#00308F] text-white px-4 py-2 rounded transition duration-200 hover:bg-blue-600"
//               >
//                 Apply Now
//               </button>
//             </div>
//           ))}
//         </div>

//         {ismodelOpen && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
//               <button
//                 onClick={() => setIsmodelOpen(false)}
//                 className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
//               >
//                 <AiOutlineClose className="text-2xl" />
//               </button>
//               <h2 className="text-2xl font-semibold text-[#00308F] mb-4">Application Form</h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                   <label className="block text-gray-700">Name:</label>
//                   <input type="text" className="border rounded w-full py-2 px-3" required />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700">Email:</label>
//                   <input type="email" className="border rounded w-full py-2 px-3" required />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700">Resume (PDF):</label>
//                   <input type="file" accept=".pdf" className="border rounded w-full py-2 px-3" required />
//                 </div>
//                 <button type="submit" className="bg-[#00308F] text-white px-4 py-2 rounded transition duration-200 hover:bg-blue-600">
//                   Submit Application
//                 </button>
//               </form>
//             </div>
//           </div>
//         )}

//         {isSubmitted && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg">
//               <p>Your application has been submitted successfully!</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//     <Footer/>
//   </div>
//   );
// };

// export default Career;



// import React, { useState } from 'react';
// import axios from 'axios';
// import Footer from './Footer';

// function Career() {
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
//     <div>
//        <div className="min-h-96 flex">
        
//         <div
//           className="w-full md:w-full bg-cover bg-center bg-no-repeat relative"
//           style={{ backgroundImage: `url('Banners/Career.svg')` }}
//         >
//          <div className="bg-black bg-opacity-55 p-6  mt-16 rounded-lg space-y-4">
           
//             <p className='text-white text-xl'>Explore our current job openings and take the next step in your career with Sanjvik Terminals.</p>
       
//           </div>
//         </div>

       
        
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Career;



import React, { useState } from 'react';
import axios from 'axios';
import Footer from './Footer';

function Career() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    email: '',
    currentStatus: 'Employed',
    position: '',
    currentCTC: '',
    expectedCTC: '',
    experience: '',
    relocate: 'Yes',
    immediateStart: 'Yes',
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
    Object.entries(formData).forEach(([key, value]) => {
      formDataWithFile.append(key, value);
    });

    try {
      await axios.post('http://localhost:5000/send-email', formDataWithFile, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Application submitted successfully!');
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to submit application.');
    }
  };

  return (
    <div>

<div className="min-h-96 flex">
        
        <div
          className="w-full md:w-full bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url('Banners/Career.svg')` }}
        >
         <div className="bg-black bg-opacity-55 p-6  mt-16 rounded-lg space-y-4">
           
            <p className='text-white text-xl'>Explore our current job openings and take the next step in your career with Sanjvik Terminals.</p>
       
          </div>
        </div>

       
        
      </div>
   
         
      <div
        className="min-h-screen flex items-center mt-2 justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('Banners/business-people-blue-background.jpg')` }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-3xl w-full">
          <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            Join Our Team
          </h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" name="firstName" className="p-4 border rounded-lg outline-none" required />
              <input type="text" placeholder="Last Name" name="lastName" className="p-4 border rounded-lg outline-none" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Contact" name="contact" className="p-4 border rounded-lg outline-none" required />
              <input type="email" placeholder="Email" name="email" className="p-4 border rounded-lg outline-none" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <select name="currentStatus" className="p-4 border rounded-lg outline-none" required>
                <option value="Employed">Employed</option>
                <option value="Unemployed">Unemployed</option>
                <option value="Self-Employed">Self-Employed</option>
              </select>
              <input type="text" placeholder="Position Applying For" name="position" className="p-4 border rounded-lg outline-none" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Current CTC" name="currentCTC" className="p-4 border rounded-lg outline-none" required />
              <input type="text" placeholder="Expected CTC" name="expectedCTC" className="p-4 border rounded-lg outline-none" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Total Experience" name="experience" className="p-4 border rounded-lg outline-none" required />
              <div className="flex items-center">
                <span>Relocate?</span>
                <input type="radio" name="relocate" value="Yes" className="ml-2" /> Yes
                <input type="radio" name="relocate" value="No" className="ml-2" /> No
              </div>
            </div>
            <div className="flex items-center">
              <span>Start Immediately?</span>
              <input type="radio" name="immediateStart" value="Yes" className="ml-2" /> Yes
              <input type="radio" name="immediateStart" value="No" className="ml-2" /> No
            </div>
            <div>
              <label className="block text-gray-600">Upload Resume:</label>
              <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="mt-1 w-full border rounded-lg p-2" />
            </div>
            <button type="submit" className="w-full bg-[#002D62] text-white p-3 rounded-lg mt-4 hover:bg-blue-700 transition">
              Submit Application
            </button>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Career;
