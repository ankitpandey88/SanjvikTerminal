


import React from 'react';
import { FaMicrophone, FaNewspaper } from 'react-icons/fa';
import Footer from './Footer';

const Media = () => {
  // Sample data for media releases
  const mediaReleases = [
    {
      title: 'Press Conference: New Product Launch',
      date: 'January 15, 2024',
      description: 'Join us for an exclusive press conference about our upcoming product launch, featuring key insights and announcements.',
      mediaType: 'Press Conference',
      icon: <FaMicrophone className="text-4xl text-[#00308F]" />,
    },
    {
      title: 'Digital Print: Sustainability Report',
      date: 'March 10, 2024',
      description: 'A detailed digital report on our latest efforts towards sustainability and green technology adoption.',
      mediaType: 'Digital Print',
      icon: <FaNewspaper className="text-4xl text-[#00308F]" />,
    },
    {
      title: 'Press Conference: Partnership Announcement',
      date: 'July 22, 2024',
      description: 'We are announcing an exciting new partnership with a global leader in logistics. Join us for the details.',
      mediaType: 'Press Conference',
      icon: <FaMicrophone className="text-4xl text-[#00308F]" />,
    },
  ];

  return (
   <div>
      <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#00308F] text-center mb-10">Media Releases</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaReleases.map((release, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                {release.icon}
                <h2 className="text-2xl font-semibold text-[#00308F]">{release.title}</h2>
              </div>
              <p className="text-gray-500">{release.date}</p>
              <p className="mt-4 text-gray-700">{release.description}</p>
              <div className="mt-4">
                <span className="inline-block bg-[#00308F] text-white text-sm font-bold px-3 py-1 rounded">
                  {release.mediaType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
   </div>
  );
};

export default Media;
