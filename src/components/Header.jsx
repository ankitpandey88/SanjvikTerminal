


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

// function Header() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`sticky top-0 z-50 transition-colors duration-300 ${
//         scrollPosition > 0 ? 'bg-[#002D62]' : 'bg-white'
//       } text-white`}
//     >
//       {/* Top Bar */}
//       <section className='bg-gray-700 py-2'>
//         <div className='container mx-auto flex justify-between'>
//           <div className="flex items-start space-x-2">
//             <span className="text-sm font-bold">SANJVIK TERMINAL PVT.LTD</span>
//           </div>
//           <div className="flex items-center space-x-6">
//             <div className="flex items-center space-x-2">
//               <AiOutlineMail className="text-base" />
//               <span className="text-base">tm@sanjvik.com</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <AiOutlinePhone className="text-base" />
//               <span className="text-base">844-811-4803</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Header */}
//       <div className='container mx-auto flex justify-between items-center py-1.5'>
//         <Link to="/">
//           <img src="/Sanjvik logo .png" alt="logo" className='w-24 h-8 ' />
//         </Link>

//         <nav className='hidden lg:flex space-x-8 text-lg'>
//           {/* Home */}
//           <div className="relative group">
//             <Link
//               to="/"
//               className='hover:text-gray-400 transition-colors'
//             >
//               Home
//             </Link>
//             <div className="absolute left-0 mt-3 w-48 bg-white text-black shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
//               <Link to="/who-we-are" className="block px-4 py-2 hover:bg-gray-200">Who We Are</Link>
//               <Link to="/our-trusted-client" className="block px-4 py-2 hover:bg-gray-200">Our Trusted Client</Link>
//             </div>
//           </div>

//           {/* Overview */}
//           <div className="relative group">
//             <Link
//               to="/overview"
//               className='hover:text-gray-400 transition-colors'
//             >
//               Overview
//             </Link>
//             <div className="absolute left-0 mt-3 w-48 bg-white rounded-md text-black shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
//               <Link to="/about-us" className="block px-4 py-2 hover:bg-gray-200">About Us</Link>
//               <Link to="/our-facility" className="block px-4 py-2 hover:bg-gray-200">Our Facility</Link>
//               <Link to="/vision" className="block px-4 py-2 hover:bg-gray-200">Vision</Link>
//               <Link to="/mission" className="block px-4 py-2 hover:bg-gray-200">Mission</Link>
//               <Link to="/our-value" className="block px-4 py-2 hover:bg-gray-200">Our Value</Link>
//               <Link to="/accreditation" className="block px-4 py-2 hover:bg-gray-200">Accreditation</Link>
//             </div>
//           </div>

//           {/* Our Services */}
//           <div className="relative group">
//             <Link
//               to="/services"
//               className='hover:text-gray-400 transition-colors'
//             >
//               Our Services
//             </Link>
//             <div className="absolute left-0 mt-3 w-64 bg-white text-black shadow-lg opacity-0 rounded-md group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
//               <Link to="/multiple-management" className="block px-4 py-2 hover:bg-gray-200">Multiple Management</Link>
//               <Link to="/custom-clearance" className="block px-4 py-2 hover:bg-gray-200">Custom Clearance</Link>
//               <Link to="/warehousing" className="block px-4 py-2 hover:bg-gray-200">Warehousing</Link>

//               <Link
//                 to="/terminal-management"
//                 className="block px-4 py-2 hover:bg-gray-200"
//               >
//                 Terminal Management
//               </Link>
//             </div>
//           </div>

//           <Link to="/tariffs" className='hover:text-gray-400 transition-colors'>Tariffs</Link>
//           <Link to="/policy" className='hover:text-gray-400 transition-colors'>Policy</Link>
//           <Link to="/media" className='hover:text-gray-400 transition-colors'>Media</Link>
//           <Link to="/careers" className='hover:text-gray-400 transition-colors'>Careers</Link>
//           <Link to="/contact" className='hover:text-gray-400 transition-colors'>Contact</Link>
//         </nav>

//         {/* Hamburger Menu for Mobile */}
//         <div className='lg:hidden'>
//           <button onClick={() => setSidebarOpen(!sidebarOpen)}>
//             <FaBars className="w-8 h-8 text-white" />
//           </button>
//         </div>
//       </div>

//       {/* Sidebar for Mobile */}
//       {sidebarOpen && (
//         <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50'>
//           <div className='w-64 h-full bg-gray-800 p-6'>
//             <button className='absolute top-4 right-4 text-white' onClick={() => setSidebarOpen(false)}>
//               <FaTimes className="w-6 h-6" />
//             </button>
//             <nav className='mt-10 space-y-4'>
//               {["Home", "Overview", "Services", "Tariffs", "Policy", "Media", "Careers", "Contact"].map((item) => (
//                 <Link
//                   key={item}
//                   to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                   className='block text-lg text-white hover:text-gray-400'
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;




import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const linkClasses = `font-semibold transition-colors ${
    scrollPosition > 0 ? 'text-white' : 'text-black'
  }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrollPosition > 0 ? 'bg-[#002D62]' : 'bg-white'
      }`}
    >
      {/* Top Bar */}
      <section className='bg-gray-700 py-2'>
        <div className='container mx-auto flex justify-between'>
          <div className="flex items-start space-x-2">
            <span className="text-sm font-bold text-white">SANJVIK TERMINAL PVT.LTD</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-white">
              <AiOutlineMail className="text-base" />
              <span className="text-base">tm@sanjvik.com</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <AiOutlinePhone className="text-base" />
              <span className="text-base">844-811-4803</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Header */}
      <div className='container mx-auto flex justify-between items-center py-1.5'>
        <Link to="/">
          <img src="/Sanjvik logo .png" alt="logo" className='w-30 h-12 bg-white p-2 rounded-sm' />
        </Link>

        <nav className='hidden lg:flex space-x-8 text-lg'>
          {/* Home */}
          <div className="relative group">
            <Link
              to="/"
              className={linkClasses}
            >
              Home
            </Link>
            <div className="absolute left-0 mt-3 w-48 bg-white text-black shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
              <Link to="/who-we-are" className="block px-4 py-2 hover:bg-gray-200">Who We Are</Link>
              <Link to="/our-trusted-client" className="block px-4 py-2 hover:bg-gray-200">Our Trusted Client</Link>
            </div>
          </div>

          {/* Overview */}
          <div className="relative group">
            <Link
              to="/overview"
              className={linkClasses}
            >
              Overview
            </Link>
            <div className="absolute left-0 mt-3 w-48 bg-white rounded-md text-black shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
              <Link to="/about-us" className="block px-4 py-2 hover:bg-gray-200">About Us</Link>
              <Link to="/our-facility" className="block px-4 py-2 hover:bg-gray-200">Our Facility</Link>
              <Link to="/vision" className="block px-4 py-2 hover:bg-gray-200">Vision</Link>
              <Link to="/mission" className="block px-4 py-2 hover:bg-gray-200">Mission</Link>
              <Link to="/our-value" className="block px-4 py-2 hover:bg-gray-200">Our Value</Link>
              <Link to="/accreditation" className="block px-4 py-2 hover:bg-gray-200">Accreditation</Link>
            </div>
          </div>

          {/* Our Services */}
          <div className="relative group">
            <Link
              to="/services"
              className={linkClasses}
            >
              Our Services
            </Link>
            <div className="absolute left-0 mt-3 w-64 bg-white text-black shadow-lg opacity-0 rounded-md group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
              <Link to="/multiple-management" className="block px-4 py-2 hover:bg-gray-200">Multiple Management</Link>
              <Link to="/custom-clearance" className="block px-4 py-2 hover:bg-gray-200">Custom Clearance</Link>
              <Link to="/warehousing" className="block px-4 py-2 hover:bg-gray-200">Warehousing</Link>
              <Link
                to="/terminal-management"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Terminal Management
              </Link>
            </div>
          </div>

          {/* Tariffs */}
          <Link to="/tariffs" className={linkClasses}>Tariffs</Link>
          <Link to="/policy" className={linkClasses}>Policy</Link>
          <Link to="/media" className={linkClasses}>Media</Link>
          <Link to="/careers" className={linkClasses}>Careers</Link>
          <Link to="/contact" className={linkClasses}>Contact</Link>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className='lg:hidden'>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FaBars className="w-8 h-8 text-black" />
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {sidebarOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50'>
          <div className='w-64 h-full bg-gray-800 p-6'>
            <button className='absolute top-4 right-4 text-white' onClick={() => setSidebarOpen(false)}>
              <FaTimes className="w-6 h-6" />
            </button>
            <nav className='mt-10 space-y-4'>
              {["Home", "Overview", "Services", "Tariffs", "Policy", "Media", "Careers", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className='block text-lg text-white hover:text-gray-400'
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
