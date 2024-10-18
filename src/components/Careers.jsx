

import React, { useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Footer from './Footer';

const Career = () => {
  const [ismodelOpen, setIsmodelOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const jobOpenings = [
    {
      title: 'Software Engineer',
      department: 'IT Department',
      location: 'Remote',
      description: 'Join our dynamic team as a Software Engineer, contributing to innovative solutions.',
    },
    {
      title: 'Marketing Specialist',
      department: 'Marketing Department',
      location: 'New York, NY',
      description: 'Help increase brand awareness and drive engagement as a Marketing Specialist.',
    },
    {
      title: 'HR Manager',
      department: 'Human Resources',
      location: 'San Francisco, CA',
      description: 'Oversee recruitment and company culture initiatives as our HR Manager.',
    },
    {
      title: 'Data Analyst',
      department: 'Analytics Department',
      location: 'Chicago, IL',
      description: 'Analyze data to provide insights and support business decisions as a Data Analyst.',
    },
    {
      title: 'Product Manager',
      department: 'Product Department',
      location: 'Remote',
      description: 'Lead product development and strategy as a Product Manager.',
    },
    {
      title: 'Sales Associate',
      department: 'Sales Department',
      location: 'Los Angeles, CA',
      description: 'Drive sales and maintain client relationships as a Sales Associate.',
    },
    {
      title: 'Graphic Designer',
      department: 'Creative Department',
      location: 'Remote',
      description: 'Create visually stunning designs and branding materials as a Graphic Designer.',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsmodelOpen(false);
      setIsSubmitted(false);
    }, 2000);
  };

  return (
  <div>
       <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#00308F] text-center mb-10">Careers at Sanjvik Terminal</h1>

        <div className="mb-12 text-center">
          <FaUsers className="text-6xl text-[#00308F] mx-auto" />
          <p className="mt-4 text-lg">Join a team that values innovation, collaboration, and excellence.</p>
        </div>

        <div className="overflow-x-auto flex space-x-4 pb-4">
          {jobOpenings.map((job, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex-none w-72 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-[#00308F]">{job.title}</h3>
              <p className="text-gray-600">{job.department} | {job.location}</p>
              <p className="mt-4 text-gray-700">{job.description}</p>
              <button
                onClick={() => setIsmodelOpen(true)}
                className="mt-6 bg-[#00308F] text-white px-4 py-2 rounded transition duration-200 hover:bg-blue-600"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {ismodelOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
              <button
                onClick={() => setIsmodelOpen(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              >
                <AiOutlineClose className="text-2xl" />
              </button>
              <h2 className="text-2xl font-semibold text-[#00308F] mb-4">Application Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Name:</label>
                  <input type="text" className="border rounded w-full py-2 px-3" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email:</label>
                  <input type="email" className="border rounded w-full py-2 px-3" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Resume (PDF):</label>
                  <input type="file" accept=".pdf" className="border rounded w-full py-2 px-3" required />
                </div>
                <button type="submit" className="bg-[#00308F] text-white px-4 py-2 rounded transition duration-200 hover:bg-blue-600">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        )}

        {isSubmitted && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg">
              <p>Your application has been submitted successfully!</p>
            </div>
          </div>
        )}
      </div>
    </div>
    <Footer/>
  </div>
  );
};

export default Career;
