import React from "react";

const TrendingNFTCard = ({ image, title, creatorName, creatorAvatar, price, bid }) => {
  return (
    <div className="bg-[#3b3b3b] rounded-2xl overflow-hidden text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center gap-2 mb-4">
          <img src={creatorAvatar} alt={creatorName} className="w-6 h-6 rounded-full" />
          <p className="text-sm">{creatorName}</p>
        </div>
        <div className="flex justify-between text-sm text-gray-400">
          <div>
            <p className="text-xs">Price</p>
            <p className="text-white font-semibold">{price} ETH</p>
          </div>
          <div>
            <p className="text-xs">Highest Bid</p>
            <p className="text-white font-semibold">{bid} wETH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNFTCard;
