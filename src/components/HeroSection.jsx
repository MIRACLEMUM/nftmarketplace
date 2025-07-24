import React from "react";
import { FaRocket } from "react-icons/fa";
import CountUp from "react-countup";

const HeroSection = () => {
  return (
    <section className="bg-[#2B2B2B] text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Discover <br /> Digital Art & <br /> Collect NFTs
          </h1>

          <p className="text-gray-300 text-lg mb-6">
            NFT Marketplace UI Created With Anima For Figma. Collect, Buy And Sell Art From More Than 20k NFT Artists.
          </p>

          {/* Mobile Image Placement */}
          <div className="block md:hidden mb-6">
            <div className="bg-[#3B3B3B] rounded-2xl overflow-hidden w-full max-w-md mx-auto">
              <img
                src="src/assets/Image placeholder (2).png"
                alt="NFT artwork"
                className="w-full object-cover h-72"
              />
              <div className="p-4">
                <h3 className="text-white font-bold text-lg">Space Walking</h3>
                <p className="text-sm text-gray-400">Animakid</p>
              </div>
            </div>
          </div>

          {/* Get Started Button */}
          <div className="mb-8 md:mb-6">
            <button className="flex items-center gap-2 bg-[#A259FF] text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-600 transition">
              <FaRocket /> Get Started
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-row gap-10">
            <div>
              <h2 className="text-2xl font-bold">
                <CountUp end={240} duration={2.5} />k+
              </h2>
              <p className="text-sm text-gray-400">Total Sale</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                <CountUp end={100} duration={2.5} />k+
              </h2>
              <p className="text-sm text-gray-400">Auctions</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                <CountUp end={240} duration={2.5} />k+
              </h2>
              <p className="text-sm text-gray-400">Artists</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:block md:w-1/2">
          <div className="bg-[#3B3B3B] rounded-2xl overflow-hidden w-full max-w-md mx-auto">
            <img
              src="src/assets/Image Placeholder (2).png"
              alt="NFT artwork"
              className="w-full object-cover h-72"
            />
            <div className="p-4">
              <h3 className="text-white font-bold text-lg">Space Walking</h3>
              <p className="text-sm text-gray-400">Animakid</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
