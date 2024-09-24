

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
// import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

// function Header() {
//   return (
//     <header className='sticky top-0 shadow-md font-sans tracking-wide z-50'>
//       <section className='py-2 bg-[#00308F] text-white text-right px-10'>
//         <p className='text-sm flex justify-end items-center'>
//           <AiOutlineMail className="inline text-base font-bold mt-1" /> 
//           <strong className="mx-3">tm@sanjvik.com</strong>
//           <FaPhone className="mr-1" />
//           <strong className="mx-1">8448114803</strong>
//         </p>
//       </section>

//       <div className='flex flex-wrap items-center justify-between gap-4 px-10 py-4 bg-white min-h-[70px]'>
//         <Link to="/">
//           <img src="/logo.jpg" alt="logo" className='w-36' />
//         </Link>

//         <div id="collapseMenu" className='max-lg:hidden lg:block relative'>
//           <ul className='lg:flex lg:gap-x-2 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
//             <li className='mb-6 hidden max-lg:block'>
//               <Link to="/">
//                 <img src="/logo.jpg" alt="logo" className='w-36' />
//               </Link>
//             </li>
//             {["Home", "Company Overview", "Our Services", "Tariffs", "Environmental Policy", "Media Release", "Careers", "Contact Us"].map((item) => (
//               <li className='max-lg:border-b max-lg:py-3 px-3' key={item}>
//                 <Link
//                   to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                   className='hover:text-orange-500 text-[#333] block font-bold text-[15px]'
//                 >
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className='flex max-lg:ml-auto'>
//           <button id="toggleOpen" className='lg:hidden'>
//             <FaBars className="w-7 h-7" />
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

function Header() {
  return (
    <header className='sticky top-0 shadow-md font-sans tracking-wide z-50'>
      <section className='py-2 bg-[#00308F] text-white text-right px-10'>
        <div className='flex justify-end items-center'>
          <AiOutlineMail className="text-base" />
          <strong className="mx-2 text-sm">tm@sanjvik.com</strong>
          <FaPhone className="mx-2" />
          <strong className="text-sm">844-811-4803</strong>
        </div>
        
      </section>

      <div className='flex items-center justify-between px-10 py-4 bg-white min-h-[70px]'>
        <Link to="/">
          <img src="/logo.jpg" alt="logo" className='w-28 transition-transform hover:scale-105' />
        </Link>

        <nav className='hidden lg:flex flex-grow justify-center space-x-6'>
          {["Home", "Company Overview", "Our Services", "Tariffs", "Environmental Policy", "Media Release", "Careers", "Contact Us"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className='hover:text-blue-600 text-gray-800 font-semibold text-lg'
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className='flex lg:hidden'>
          <button id="toggleOpen" className='focus:outline-none'>
            <FaBars className="w-8 h-8 text-gray-800" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
