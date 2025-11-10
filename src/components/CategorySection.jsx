import React from "react";
import { useNavigate } from "react-router";

const categories = [
  {
    name: "Pets (Adoption)",
    img: "https://i.ibb.co.com/gbHhSy5s/petscategory.jpg",
    route: "Pets",
  },
  {
    name: "Pet Food",
    img: "https://i.ibb.co.com/Psz9LCTp/petfoodcategory.webp",
    route: "Pet Food",
  },
  {
    name: "Accessories",
    img: "https://i.ibb.co.com/wr7vBxBX/petAcces.jpg",
    route: "Accessories",
  },
  {
    name: "Pet Care Products",
    img: "https://i.ibb.co.com/TMBtcttf/petcare.jpg",
    route: "Pet Care Products",
  },
];

const CategorySection = () => {
  const navigate = useNavigate();

  const handleNavigate = (category) => {
    navigate(`/category-filtered-product/${category}`);
  };

  return (
    <section className="py-16 bg-linear-to-b from-cyan-50 to-teal-100">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 data-aos="fade-right" className="text-3xl font-bold mb-2 text-gray-800">
          Explore by Category
        </h2>
        <p className="text-gray-500 mb-10">
          Find everything your furry friend needs — from adoption to care!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <div
              data-aos="zoom-in"
              key={index}
              onClick={() => handleNavigate(cat.route)}
              className="relative cursor-pointer rounded-2xl overflow-hidden shadow-lg group"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>
              <h3 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-lg font-semibold bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
