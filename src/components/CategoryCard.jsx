import React from "react";

const CategoryCard = ({ image, icon, title }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-[#3b3b3b] hover:scale-105 transition duration-300">
      <div className="relative w-full h-40 md:h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover blur-sm"
        />
        <img
          src={icon}
          alt={`${title} icon`}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10"
        />
      </div>
      <div className="p-3 text-center font-semibold text-white">{title}</div>
    </div>
  );
};

export default CategoryCard;
