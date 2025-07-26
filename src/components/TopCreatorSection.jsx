import React, { useEffect, useState } from 'react';
import TopCreatorCard from './TopCreatorCard';

const creators = [
  { name: 'Keepitreal', avatar: '/images/Artist Avatar.png', sales: '34.53' },
  { name: 'DigiLab', avatar: '/images/Artist Avatar (1).png', sales: '34.53' },
  { name: 'GravityOne', avatar: '/images/Artist Avatar (2).png', sales: '34.53' },
  { name: 'Juanie', avatar: '/images/Artist Avatar (3).png', sales: '34.53' },
  { name: 'BlueWhale', avatar: '/images/Artist Avatar (4).png', sales: '34.53' },
  { name: 'Mr Fox', avatar: '/images/Artist Avatar (12).png', sales: '34.53' },
  { name: 'Shroomie', avatar: '/images/Avatar (5).png', sales: '34.53' },
  { name: 'Robotica', avatar: '/images/Artist Avatar (7).png', sales: '34.53' },
  { name: 'RustyRobot', avatar: '/images/Artist Avatar (13).png', sales: '34.53' },
  { name: 'Animakid', avatar: '/Artist Avatar (14).png', sales: '34.53' },
  { name: 'Dotgu', avatar: '/images/Avatar (6).png', sales: '34.53' },
  { name: 'Ghiblier', avatar: '/images/Avatar (7).png', sales: '34.53' },
];

const TopCreatorSection = () => {
  const [visibleCount, setVisibleCount] = useState(creators.length);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 640);
      setIsTablet(width > 640 && width <= 1024);
      if (width <= 640) {
        setVisibleCount(5);
      } else if (width <= 1024) {
        setVisibleCount(6);
      } else {
        setVisibleCount(creators.length);
      }
    };

    handleResize(); // initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="bg-[#2B2B2B] py-14 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Title and button */}
        <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8`}>
          <div>
            <h2 className="text-3xl font-bold">Top Creators</h2>
            <p className="text-gray-400">Checkout Top Rated Creators On The NFT Marketplace</p>
          </div>

          {/* Move button below on mobile/tablet */}
          {!isMobile && !isTablet && (
            <button className="border border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-600 hover:text-white transition">
              🚀 View Rankings
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {creators.slice(0, visibleCount).map((creator, idx) => (
            <TopCreatorCard
              key={idx}
              index={idx}
              {...creator}
              layout={isMobile || isTablet ? 'side-by-side' : 'default'}
            />
          ))}
        </div>

        {/* Show button below on mobile/tablet */}
        {(isMobile || isTablet) && (
          <div className="mt-8 flex justify-center">
            <button className="border border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-600 hover:text-white transition">
              🚀 View Rankings
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TopCreatorSection;
