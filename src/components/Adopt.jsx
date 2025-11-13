import React from "react";
import { FaHeart, FaPaw } from "react-icons/fa";

const Adopt= () => {
  const heroes = [
    {
      id: 1,
      name: "Sarah Ahmed",
      role: "Rescued 3 stray cats",
      img: "https://i.ibb.co.com/kg3PNDtX/t3.jpg",
    },
    {
      id: 2,
      name: "Nayeem Rahman",
      role: "Adopted a senior dog",
      img: "https://i.ibb.co.com/4DFK5tr/vets4.jpg",
    },
    {
      id: 3,
      name: "Tania Islam",
      role: "Runs a pet shelter in Dhaka",
      img: "https://i.ibb.co.com/xtXg8TNQ/vets1.jpg",
    },
  ];

  return (
    <div className="bg-base-50 py-16 px-4 sm:px-10">
      <section
        data-aos="fade-up"
        className="max-w-5xl shadow-2xl p-4 mx-auto text-center mb-20"
      >
        <div className="flex justify-center mb-4">
          <FaHeart className="text-teal-600 text-4xl" />
        </div>
        <h2 className="text-3xl text-accent font-bold mb-4">
          Why Adopt from PawMart?
        </h2>
        <p className=" max-w-3xl mx-auto leading-relaxed">
          Every adoption makes room for another rescue. When you adopt through
          PawMart, you give a homeless pet a second chance — a life filled with
          love, care, and belonging. Join our mission to end pet homelessness
          and promote responsible pet ownership.
        </p>
      </section>

      <section data-aos="fade-up" className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-4">
        </div>
        <h2 className="text-3xl text-accent font-bold mb-12">
          Meet Our Pet Heroes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {heroes.map((hero) => (
            <div
              key={hero.id}
              className="bg-base-100 shadow-lg rounded-2xl p-5 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={hero.img}
                alt={hero.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold ">
                {hero.name}
              </h3>
              <p className="text-sm  mt-1">{hero.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Adopt

