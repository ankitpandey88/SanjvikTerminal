


// import React from 'react';
// import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
// import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
// import { Link } from 'react-router-dom'; 

// const Footer = () => {
//   return (
//     <footer className="bg-gray-200 text-blue-900">
//       <div className="container mx-auto p-8">
//         <div className="grid gap-16 grid-cols-1 md:grid-cols-4">

//           {/* Footer Brand */}
//           <div className="footer-brand text-center md:text-left">
//             <Link to="/" className="flex justify-center md:justify-start items-center text-black text-2xl font-bold no-underline">
//               <img
//                 src="./landingPage/mainlog.png"
//                 alt="Logo"
//                 className="w-58 h-14 mr-2 mt-2"
//               />
//             </Link>
//             <p className="text-lg text-gray-700 mt-5">
//               <AiOutlineMail className="inline mr-1" /> tm@sanjvik.com
//             </p>
//             <p className="text-lg text-gray-700 mt-2">
//               <AiOutlinePhone className="inline mr-1" /> +91-8448114803
//             </p>
//             <ul className="flex justify-center md:justify-start space-x-4 ">
//               <li>
//                 <a href="https://www.linkedin.com/company/sanjvik-terminals-pvt-ltd/about/" className="text-black text-2xl p-3 hover:text-blue-500 transition-all duration-300 ease-in-out">
//                   <FaLinkedinIn />
//                 </a>
//               </li>
//               <li>
//                 <a href="https://x.com/SanjvikTerminal" className="text-black text-2xl p-3 hover:text-blue-900 transition-all duration-300 ease-in-out">
//                   <FaTwitter />
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <ul className="footer-list text-center md:text-left ml-12">
//             <li>
//               <p className="font-semibold text-lg mb-2">Quick Links</p>
//             </li>
//             {['About', 'Environmental Policy', 'Media Releases' ,'Download Tariffs'].map((link) => (
//               <li key={link}>
//                 <Link
//                   to={`/${link.replace(/\s+/g, '-').toLowerCase()}`} // Converts the name to lowercase and replaces spaces with dashes
//                   className="block py-2 text-gray-700 hover:text-[#00308F] hover:scale-105 transition-transform duration-300 ease-in-out"
//                 >
//                   {link}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Services */}
//           <ul className="footer-list text-center md:text-left">
//             <li>
//               <p className="font-semibold text-lg mb-2">Services</p>
//             </li>
//             {[ 'Multi-modal Transportation', 'Terminal Management', 'Custom Clearance ','Warehouse'].map((service) => (
//               <li key={service}>
//                 <Link
//                   to={`/${service.replace(/\s+/g, '-').toLowerCase()}`} // Converts the name to lowercase and replaces spaces with dashes
//                   className="block py-2 text-gray-700 hover:text-[#00308F] hover:scale-105 transition-transform duration-300 ease-in-out"
//                 >
//                   {service}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Join Us */}
//           <ul className="footer-list text-center md:text-left">
//             <li>
//               <p className="font-semibold text-lg mb-2">Join Us</p>
//             </li>
//             {['Careers','Contact Us', 'Privacy Policy', 'Terms & Condition' ].map((link) => (
//               <li key={link}>
//                 <Link
//                   to={`/${link.replace(/\s+/g, '-').toLowerCase()}`} // Converts the name to lowercase and replaces spaces with dashes
//                   className="block py-2 text-gray-700 hover:text-[#00308F] hover:scale-105 transition-transform duration-300 ease-in-out"
//                 >
//                   {link}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Footer Bottom */}
//         <div className="text-center border-t border-blue-900 py-4 mt-8">
//           <p className="text-lg font-semibold">Address:</p>
//           <p className="text-sm text-gray-700 max-w-xl mx-auto">
//             Sanjvik Terminals Pvt. Ltd. ICD - Inland Container Depot, Plot No. 1, Sector 9, Near NH8, Industrial Growth Centre, Bawal, Distt. Rewari, Haryana.
//           </p>
//           <p className="text-base mt-4">
//             &copy; 2024 Sanjvik Terminal Pvt. Ltd. All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-blue-900">
      <div className="container mx-auto p-8">
        <div className="grid gap-16 grid-cols-1 md:grid-cols-4">

          {/* Footer Brand */}
          <div className="footer-brand text-center md:text-left">
            <Link to="/" className="flex justify-center md:justify-start items-center text-black text-2xl font-bold no-underline">
              <img
                src="./landingPage/mainlog.png"
                alt="Logo"
                className="w-58 h-14 mr-2 mt-2"
              />
            </Link>
            <p className="text-lg text-gray-700 mt-5">
              <AiOutlineMail className="inline mr-1" /> tm@sanjvik.com
            </p>
            <p className="text-lg text-gray-700 mt-2">
              <AiOutlinePhone className="inline mr-1" /> +91-8448114803
            </p>
            <ul className="flex justify-center md:justify-start space-x-4 ">
              <li>
                <a href="https://www.linkedin.com/company/sanjvik-terminals-pvt-ltd/about/" className="text-black text-2xl p-3 hover:text-blue-500 transition-all duration-300 ease-in-out">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="https://x.com/SanjvikTerminal" className="text-black text-2xl p-3 hover:text-blue-900 transition-all duration-300 ease-in-out">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <ul className="footer-list text-center md:text-left ml-12">
            <li>
              <p className="font-semibold text-lg mb-2">Quick Links</p>
            </li>
            {['About', 'Environmental Policy', 'Media Releases'].map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.replace(/\s+/g, '-').toLowerCase()}`} // Converts the name to lowercase and replaces spaces with dashes
                  className="block py-2 text-gray-700 hover:text-[#00308F] hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  {link}
                </Link>
              </li>
            ))}
            {/* Download Tariffs link to download the PDF */}
            <li>
              <a
                href="/pdf/ICD Bawal Tariff - STPL.pdf" // Path to the PDF file
                download // This attribute triggers the download action
                className="block py-2 text-gray-700 hover:text-[#00308F] hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                Download Tariffs
              </a>
            </li>
          </ul>

          {/* Services */}
          <ul className="footer-list text-center md:text-left">
            <li>
              <p className="font-semibold text-lg mb-2">Services</p>
            </li>
            {[ 'Multi-modal Transportation', 'Terminal Management', 'Custom Clearance', 'Warehouse'].map((service) => (
              <li key={service}>
                <Link
                  to={`/${service.replace(/\s+/g, '-').toLowerCase()}`} // Converts the name to lowercase and replaces spaces with dashes
                  className="block py-2 text-gray-700 hover:text-[#00308F] hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>

          {/* Join Us */}
          <ul className="footer-list text-center md:text-left">
            <li>
              <p className="font-semibold text-lg mb-2">Join Us</p>
            </li>
            {['Careers', 'Contact Us', 'Privacy Policy', 'Terms & Condition'].map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.replace(/\s+/g, '-').toLowerCase()}`} // Converts the name to lowercase and replaces spaces with dashes
                  className="block py-2 text-gray-700 hover:text-[#00308F] hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-t border-blue-900 py-4 mt-8">
          <p className="text-lg font-semibold">Address:</p>
          <p className="text-sm text-gray-700 max-w-xl mx-auto">
            Sanjvik Terminals Pvt. Ltd. ICD - Inland Container Depot, Plot No. 1, Sector 9, Near NH8, Industrial Growth Centre, Bawal, Distt. Rewari, Haryana.
          </p>
          <p className="text-base mt-4">
            &copy; 2024 Sanjvik Terminal Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
