import React from 'react';
import TrandingNFTCard from './TrandingNFTCard';

const collections = [
  {
    mainImage: '/assets/Primary Photo Placeholder.png',
    thumbnails: ['/assets/dog1.jpg', '/assets/dog2.jpg'],
    count: 1025,
    title: 'DSGN Animals',
    creator: 'MrFox',
    avatar: '/assets/avatar1.png',
  },
  {
    mainImage: '/assets/mushroom-main.jpg',
    thumbnails: ['/assets/mush1.jpg', '/assets/mush2.jpg'],
    count: 1025,
    title: 'Magic Mushrooms',
    creator: 'Shroomie',
    avatar: '/assets/avatar2.png',
  },
  {
    mainImage: '/assets/robot-main.jpg',
    thumbnails: ['/assets/robot1.jpg', '/assets/robot2.jpg'],
    count: 1025,
    title: 'Disco Machines',
    creator: 'BeKind2Robots',
    avatar: '/assets/avatar3.png',
  },
];

const TrandingSection = () => {
  return (
    <section className="bg-[#2B2B2B] text-white py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Trending Collection</h2>
        <p className="text-gray-400 mb-10">Checkout Our Weekly Updated Trending Collection.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((item, idx) => (
            <TrandingNFTCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrandingSection;
