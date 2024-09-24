

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-blue-900">
      <div className="container mx-auto p-8">
        <div className="grid gap-16  grid-cols-1 md:grid-cols-4">

          <div className="footer-brand">
            <a href="#" className="flex items-center text-black text-2xl font-bold no-underline">
              <img
                src="./logo.jpg"
                alt="Logo"
                className="w-48 h-10 mr-2 mt-2"
              />
            </a>
            <p className="text-lg text-gray-700 mt-5">
              <AiOutlineMail className="inline mr-1 " /> tm@sanjvik.com
            </p>
            <p className="text-lg text-gray-700 mt-2">
              <AiOutlinePhone className="inline mr-1 " /> +91-8448114803
            </p>
            <ul className="flex space-x-2 mt-0">
              <li>
                <a href="#" className=" text-black text-2xl p-3 hover:text-blue-500 ">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#" className="text-black text-2xl p-3 hover:text-blue-900 ">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#" className=" text-black text-2xl p-3  hover:text-red-500">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#" className="text-black text-2xl p-3 hover:text-red-400 ">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>

          <ul className="footer-list">
            <li>
              <p className="font-semibold text-lg mb-2 border-b-2 border-orange-600">Quick Links</p>
            </li>
            {['About', 'Services', 'Retail Express', 'FAQ', 'Contact Us'].map((link) => (
              <li key={link}>
                <a href="#" className="block py-2">{link}</a>
              </li>
            ))}
          </ul>

          <ul className="footer-list">
            <li>
              <p className="font-semibold text-lg mb-2 border-b-2 border-orange-600">Services</p>
            </li>
            {['Warehouse', 'Multi-Model Transportation', 'Terminal Management', 'Custom Clearance'].map((service) => (
              <li key={service}>
                <a href="#" className="block py-2">{service}</a>
              </li>
            ))}
          </ul>

          <ul className="footer-list">
            <li>
              <p className="font-semibold text-lg mb-2 border-b-2 border-orange-600">Community</p>
            </li>
            {['Business Consulting', 'Testimonials', 'Track Your Shipment', 'Privacy Policy', 'Terms & Condition'].map((community) => (
              <li key={community}>
                <a href="#" className="block py-2">{community}</a>
              </li>
            ))}
          </ul>

        </div>

        <div className="text-center border-t border-blue-900 py-1">
          <p className="text-lg font-semibold">Address:</p>
          <p className="text-sm text-gray-700">
            Sanjvik Terminals Pvt. Ltd. ICD - Inland Container Depot, Plot No. 1, Sector 9, Near NH8, Industrial Growth Centre, Bawal, Distt. Rewari, Haryana.
          </p>
          <p className="text-base mt-12">
            &copy; 2024 Sanjvik Terminal Pvt. Ltd. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;



// import React from 'react';
// import { FiSearch, FiUpload, FiMapPin, FiSettings, FiTruck, FiPrinter, FiCode, FiList, FiLogOut, FiPackage } from 'react-icons/fi';

// const Footer = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       {/* Top Bar */}
//       <header className="bg-light-blue-500 p-4 flex justify-between items-center shadow">
//         <h1 className="text-gray-900 text-xl font-semibold">Latur-PDA</h1>
//         <button className="text-gray-900 flex items-center space-x-2 hover:text-gray-600">
//           <FiLogOut className="w-5 h-5" />
//           <span>Logout</span>
//         </button>
//       </header>

//       {/* Main Content */}
//       <div className="flex-grow p-6">
//         <div className="grid grid-cols-2 gap-6">
//           {/* Cards */}
//           {menuItems.map((item, idx) => (
//             <Card key={idx} title={item.title} icon={item.icon} />
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-200 text-gray-600 text-center py-4">
//         <p>© 2024 OM Logistics Ltd. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// const Card = ({ title, icon }) => {
//   return (
//     <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center justify-center space-y-4 hover:shadow-md transition">
//       <div className="text-light-blue-500">{icon}</div>
//       <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
//     </div>
//   );
// };

// const menuItems = [
//   { title: "CN Enquiry", icon: <FiSearch className="w-10 h-10" /> },
//   { title: "POD Upload", icon: <FiUpload className="w-10 h-10" /> },
//   { title: "Branch Directory", icon: <FiMapPin className="w-10 h-10" /> },
//   { title: "Serviceable Area", icon: <FiSettings className="w-10 h-10" /> },
//   { title: "Barcode Printing", icon: <FiPrinter className="w-10 h-10" /> },
//   { title: "CFT Calculator", icon: <FiTruck className="w-10 h-10" /> },
//   { title: "CN Creation", icon: <FiPackage className="w-10 h-10" /> },
//   { title: "Challan Creation", icon: <FiList className="w-10 h-10" /> },
//   { title: "Code Creation", icon: <FiCode className="w-10 h-10" /> },
// ];

// export default Footer;

// import React from 'react';
// import { FiSearch, FiUpload, FiMapPin, FiSettings, FiTruck, FiPrinter, FiCode, FiList, FiLogOut, FiPackage } from 'react-icons/fi';

// const Footer = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col">
//       {/* Top Bar */}
//       <header className="bg-gray-800 p-4 flex justify-between items-center shadow">
//         <h1 className="text-neon-blue text-xl font-semibold">Latur-PDA</h1>
//         <button className="text-neon-green flex items-center space-x-2 hover:text-neon-blue">
//           <FiLogOut className="w-5 h-5" />
//           <span>Logout</span>
//         </button>
//       </header>

//       {/* Main Content */}
//       <div className="flex-grow p-6">
//         <div className="grid grid-cols-2 gap-6">
//           {/* Cards */}
//           {menuItems.map((item, idx) => (
//             <Card key={idx} title={item.title} icon={item.icon} />
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-neon-blue text-center py-4">
//         <p>© 2024 OM Logistics Ltd. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// const Card = ({ title, icon }) => {
//   return (
//     <div className="bg-gray-800 p-4 shadow-lg rounded-lg flex flex-col items-center justify-center space-y-4 hover:bg-gray-700 transition">
//       <div className="text-neon-green">{icon}</div>
//       <h2 className="text-lg font-semibold">{title}</h2>
//     </div>
//   );
// };

// const menuItems = [
//   { title: "CN Enquiry", icon: <FiSearch className="w-10 h-10" /> },
//   { title: "POD Upload", icon: <FiUpload className="w-10 h-10" /> },
//   { title: "Branch Directory", icon: <FiMapPin className="w-10 h-10" /> },
//   { title: "Serviceable Area", icon: <FiSettings className="w-10 h-10" /> },
//   { title: "Barcode Printing", icon: <FiPrinter className="w-10 h-10" /> },
//   { title: "CFT Calculator", icon: <FiTruck className="w-10 h-10" /> },
//   { title: "CN Creation", icon: <FiPackage className="w-10 h-10" /> },
//   { title: "Challan Creation", icon: <FiList className="w-10 h-10" /> },
//   { title: "Code Creation", icon: <FiCode className="w-10 h-10" /> },
// ];

// export default Footer;


// import React from 'react';
// import { FiSearch, FiUpload, FiMapPin, FiSettings, FiTruck, FiPrinter, FiCode, FiList, FiLogOut, FiPackage } from 'react-icons/fi';

// const Footer = () => {
//   return (
//     <div className="min-h-screen bg-white text-gray-900 flex flex-col">
//       {/* Top Bar */}
//       <header className="bg-teal-500 p-4 flex justify-between items-center shadow">
//         <h1 className="text-yellow-400 text-xl font-semibold">Latur-PDA</h1>
//         <button className="text-yellow-400 flex items-center space-x-2 hover:text-orange-400">
//           <FiLogOut className="w-5 h-5" />
//           <span>Logout</span>
//         </button>
//       </header>

//       {/* Main Content */}
//       <div className="flex-grow p-6">
//         <div className="grid grid-cols-2 gap-6">
//           {/* Cards */}
//           {menuItems.map((item, idx) => (
//             <Card key={idx} title={item.title} icon={item.icon} />
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-teal-500 text-yellow-400 text-center py-4">
//         <p>© 2024 OM Logistics Ltd. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// const Card = ({ title, icon }) => {
//   return (
//     <div className="bg-orange-500 text-white p-6 shadow-lg rounded-lg flex flex-col items-center justify-center space-y-4 hover:bg-orange-600 transition">
//       <div>{icon}</div>
//       <h2 className="text-lg font-bold">{title}</h2>
//     </div>
//   );
// };

// const menuItems = [
//   { title: "CN Enquiry", icon: <FiSearch className="w-10 h-10" /> },
//   { title: "POD Upload", icon: <FiUpload className="w-10 h-10" /> },
//   { title: "Branch Directory", icon: <FiMapPin className="w-10 h-10" /> },
//   { title: "Serviceable Area", icon: <FiSettings className="w-10 h-10" /> },
//   { title: "Barcode Printing", icon: <FiPrinter className="w-10 h-10" /> },
//   { title: "CFT Calculator", icon: <FiTruck className="w-10 h-10" /> },
//   { title: "CN Creation", icon: <FiPackage className="w-10 h-10" /> },
//   { title: "Challan Creation", icon: <FiList className="w-10 h-10" /> },
//   { title: "Code Creation", icon: <FiCode className="w-10 h-10" /> },
// ];

// export default Footer;
