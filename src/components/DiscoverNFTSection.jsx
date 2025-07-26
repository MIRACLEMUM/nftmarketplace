import React, { useEffect } from "react";
import TrendingNFTCard from "./TrendingNFTCard";
import AOS from "aos";
import "aos/dist/aos.css";

const nftData = [
  {
    image: "src/assets/Image (3).png",
    title: "Distant Galaxy",
    creatorName: "MoonDancer",
    creatorAvatar: "src/assets/Avatar (8).png",
    price: "1.63",
    bid: "0.33",
  },
  {
    image: "src/assets/Image Placeholder (2) copy.png",
    title: "Life On Edena",
    creatorName: "NebulaKid",
    creatorAvatar: "src/assets/Asset 12 2.png",
    price: "1.63",
    bid: "0.33",
  },
  {
    image: "src/assets/Image (4).png",
    title: "AstroFiction",
    creatorName: "Spaceone",
    creatorAvatar: "src/assets/Avatar (9).png",
    price: "1.63",
    bid: "0.33",
  },
];

const DiscoverNFTSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[#2B2B2B] text-white px-6 md:px-20 py-16">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-bold">Discover More NFTs</h2>
          <p className="text-gray-400">Explore New Trending NFTs</p>
        </div>

        {/* Desktop/Tablet Button */}
        <button className="hidden sm:block border border-purple-500 px-5 py-2 rounded-lg hover:bg-purple-600 transition">
          👁 See All
        </button>
      </div>

      {/* Desktop and Tablet Grid */}
      <div className="hidden sm:grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {nftData.map((nft, index) => {
          // Hide 3rd card on tablet (md only)
          if (index === 2) {
            return (
              <div
                key={index}
                data-aos="fade-up"
                className="hidden lg:block"
              >
                <TrendingNFTCard {...nft} />
              </div>
            );
          }

          return (
            <div key={index} data-aos="fade-up">
              <TrendingNFTCard {...nft} />
            </div>
          );
        })}
      </div>

      {/* Mobile Vertical Layout */}
      <div className="sm:hidden flex flex-col gap-6">
        {nftData.map((nft, index) => (
          <div key={index} data-aos="fade-up">
            <TrendingNFTCard {...nft} />
          </div>
        ))}

        {/* See All Button - only on phone */}
        <div className="text-center mt-6">
          <button className="border border-purple-500 px-5 py-2 rounded-lg hover:bg-purple-600 transition">
            👁 See All
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverNFTSection;
