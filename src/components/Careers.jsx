



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

<div className="min-h-[80vh] flex">
        
        <div
          className="w-full md:w-full bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url('Banners/Career.svg')` }}
        >
         
        </div>

       
        
      </div>
      <div className="bg-black bg-opacity-55 p-6   rounded-lg space-y-4">
           
            <p className='text-white ml-[31rem] text-2xl'> Career at Sanjvik </p>
       
          </div>
   
         
      <div
        className="min-h-screen flex items-center  justify-center bg-cover bg-center"
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
