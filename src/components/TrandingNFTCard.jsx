import React from 'react';

const TrandingNFTCard = ({ mainImage, thumbnails, count, title, creator, avatar }) => {
  return (
    <div className="bg-[#3B3B3B] rounded-2xl text-white w-full overflow-hidden">
      <img src={mainImage} alt={title} className="w-full h-[300px] object-cover rounded-t-2xl" />

      <div className="flex items-center justify-between px-4 mt-4">
        <div className="flex space-x-2">
          {thumbnails.map((thumb, i) => (
            <img key={i} src={thumb} alt="" className="w-10 h-10 rounded-xl object-cover" />
          ))}
        </div>
        <span className="bg-purple-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
          {count}+
        </span>
      </div>

      <div className="px-4 py-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-300">
          <img src={avatar} alt={creator} className="w-5 h-5 rounded-full" />
          <span>{creator}</span>
        </div>
      </div>
    </div>
  );
};

export default TrandingNFTCard;
