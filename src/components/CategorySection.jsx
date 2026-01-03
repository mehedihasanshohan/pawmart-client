import React from "react";
import { useNavigate } from "react-router";
import { Typewriter } from 'react-simple-typewriter'
import { Tooltip } from "react-tooltip";

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
    <section className="py-16 bg-base-200 text-base-200">
      <div className="max-w-7xl mx-auto text-center px-4">
       <h2
        className="text-3xl font-bold text-center mb-4 items-center gap-2"
      >
        Explore by{" "}
        <span className="text-teal-600">
          <Typewriter
            words={["Pets", "Pet Food", "Accessories", "Pet Care Products"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </span>
      </h2>

        <p className="italic mb-8">
          Find everything your furry friend needs — from adoption to care!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <div
              data-aos="zoom-in"
              key={index}
              data-tooltip-id={`tooltip-${index}`}
              data-tooltip-content={`Click to explore ${cat.name}`}
              onClick={() => handleNavigate(cat.route)}
              className="relative cursor-pointer rounded-2xl overflow-hidden shadow-lg group"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500"></div>
              <h3 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-lg font-semibold bg-base-200 px-4 py-2 rounded-full backdrop-blur-sm">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
          {categories.map((_, index) => (
          <Tooltip
            key={index}
            id={`tooltip-${index}`}
            place="top"
            variant="dark"
            style={{ zIndex: 9999 }}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
