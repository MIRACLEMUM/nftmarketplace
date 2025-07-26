import React from 'react';

const TopCreatorCard = ({ index, name, avatar, sales }) => {
  return (
    <div
      className="relative bg-[#3B3B3B] rounded-2xl p-4 text-white flex flex-col items-center gap-3
                 transition-transform duration-300 ease-in-out transform
                 hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer"
    >
      {/* Number badge at top-left */}
      <div className="absolute top-2 left-2 bg-[#2B2B2B] text-white text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold">
        {index + 1}
      </div>

      <img src={avatar} alt={name} className="w-20 h-20 rounded-full object-cover" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-400 text-sm">
        Total Sales: <span className="text-white font-medium">{sales} ETH</span>
      </p>
    </div>
  );
};

export default TopCreatorCard;
