import React from 'react';
import TrandingNFTCard from './TrandingNFTCard';

const collections = [
  {
    mainImage: '/Primary Photo Placeholder.png',
    thumbnails: ['/Secondary Photo Placeholder.png', '/Secondary Photo Placeholder (6).png'],
    count: 1025,
    title: 'DSGN Animals',
    creator: 'MrFox',
    avatar: '/Avatar (1).png',
  },
  {
    mainImage: '/Primary Photo Placeholder (2).png',
    thumbnails: ['/Secondary Photo Placeholder (7).png', '/Secondary Photo Placeholder (8).png'],
    count: 1025,
    title: 'Magic Mushrooms',
    creator: 'Shroomie',
    avatar: '/Avatar (3).png',
  },
  {
    mainImage: '/Primary Photo Placeholder (1).png',
    thumbnails: ['/Secondary Photo Placeholder (9) copy.png',  '/Secondary Photo Placeholder (11).png'],
    count: 1025,
    title: 'Disco Machines',
    creator: 'BeKind2Robots',
    avatar: '/Avatar (4).png',
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
