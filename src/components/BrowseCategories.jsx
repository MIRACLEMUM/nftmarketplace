import React from "react";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Art",
    image: "src/assets/Photo & Icon (11).png",
    icon: "src/assets/PaintBrush (1).png",
  },
  {
    title: "Collectibles",
    image: "src/assets/Photo & Icon (12).png",
    icon: "src/assets/Swatches (1).png",
  },
  {
    title: "Music",
    image: "src/assets/Category Icon (1).png",
    icon: "src/assets/MusicNotes (1).png",
  },
  {
    title: "Photography",
    image: "src/assets/Category Icon (2).png",
    icon: "src/assets/Camera (1).png",
  },
  {
    title: "Video",
    image: "src/assets/Category Icon (3).png",
    icon: "src/assets/VideoCamera (1).png",
  },
  {
    title: "Utility",
    image: "src/assets/Category Icon (4).png",
    icon: "src/assets/MagicWand (1).png",
  },
  {
    title: "Sport",
    image: "src/assets/Category Icon (5).png",
    icon: "src/assets/Basketball (1).png",
  },
  {
    title: "Virtual Worlds",
    image: "src/assets/Category Icon (6).png",
    icon: "src/assets/Planet (1).png",
  },
];

const BrowseCategories = () => {
  return (
    <section className="bg-[#2B2B2B] text-white px-6 md:px-20 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Browse Categories</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <CategoryCard
            key={index}
            title={cat.title}
            image={cat.image}
            icon={cat.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default BrowseCategories;
