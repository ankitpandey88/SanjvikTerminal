


import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-blue-900">
      <div className="container mx-auto p-8">
        <div className="grid gap-16 grid-cols-1 md:grid-cols-4">

          {/* Footer Brand */}
          <div className="footer-brand">
            <a href="#" className="flex items-center text-black text-2xl font-bold no-underline">
              <img
                src="./Sanjvik logo .png"
                alt="Logo"
                className="w-48 h-10 mr-2 mt-2"
              />
            </a>
            <p className="text-lg text-gray-700 mt-5">
              <AiOutlineMail className="inline mr-1" /> tm@sanjvik.com
            </p>
            <p className="text-lg text-gray-700 mt-2">
              <AiOutlinePhone className="inline mr-1" /> +91-8448114803
            </p>
            <ul className="flex space-x-2 mt-4">
              <li>
                <a href="#" className="text-black text-2xl p-3 hover:text-blue-500 transition-all duration-300 ease-in-out">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#" className="text-black text-2xl p-3 hover:text-blue-900 transition-all duration-300 ease-in-out">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#" className="text-black text-2xl p-3 hover:text-red-500 transition-all duration-300 ease-in-out">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#" className="text-black text-2xl p-3 hover:text-red-400 transition-all duration-300 ease-in-out">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <ul className="footer-list">
            <li>
              <p className="font-semibold text-lg mb-2 border-b-2 border-orange-600">Quick Links</p>
            </li>
            {['About', 'Services', 'Retail Express', 'FAQ', 'Contact Us'].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="block py-2 text-gray-700 hover:text-dark-orange hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Services */}
          <ul className="footer-list">
            <li>
              <p className="font-semibold text-lg mb-2 border-b-2 border-orange-600">Services</p>
            </li>
            {['Warehouse', 'Multi-Model Transportation', 'Terminal Management', 'Custom Clearance'].map((service) => (
              <li key={service}>
                <a
                  href="#"
                  className="block py-2 text-gray-700 hover:text-dark-orange hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>

          {/* Community */}
          <ul className="footer-list">
            <li>
              <p className="font-semibold text-lg mb-2 border-b-2 border-orange-600">Community</p>
            </li>
            {['Business Consulting', 'Testimonials', 'Track Your Shipment', 'Privacy Policy', 'Terms & Condition'].map((community) => (
              <li key={community}>
                <a
                  href="#"
                  className="block py-2 text-gray-700 hover:text-dark-orange hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  {community}
                </a>
              </li>
            ))}
          </ul>

        </div>

        {/* Footer Bottom */}
        <div className="text-center border-t border-blue-900 py-4 mt-8">
          <p className="text-lg font-semibold">Address:</p>
          <p className="text-sm text-gray-700">
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
