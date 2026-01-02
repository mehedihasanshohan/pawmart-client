import React from "react";
import heart from "/heart.png";


const Adopt = () => {
  const heroes = [
    {
      id: 1,
      name: "Sahadot Ahmed",
      role: "Rescued 15+ stray cats in Dhaka",
      img: "https://i.ibb.co.com/kg3PNDtX/t3.jpg",
    },
    {
      id: 2,
      name: "Nayeem Rahman",
      role: "Adopted 2 senior dogs this year",
      img: "https://i.ibb.co.com/4DFK5tr/vets4.jpg",
    },
    {
      id: 3,
      name: "Tanvir Islam",
      role: "Founder of 'Paws & Care' Shelter",
      img: "https://i.ibb.co.com/xtXg8TNQ/vets1.jpg",
    },
    {
      id: 4,
      name: "Arif Hossain",
      role: "Professional Pet Groomer & Rescuer",
      img: "https://i.ibb.co.com/4DFK5tr/vets4.jpg",
    },
  ];

  return (
    <div className="bg-base-200 text-base-content py-16 px-4 sm:px-10">
      {/* Why Adopt Section */}
      <section
        data-aos="fade-up"
        className="max-w-7xl shadow-md p-10 bg-base-100 rounded-2xl mx-auto text-center mb-16"
      >
        <div className="flex justify-center mb-4">
          <img src={heart} alt="Heart Icon" className="w-16 h-16" />
        </div>
        <h2 className="text-3xl font-bold mb-4">
          Why Adopt from PawMart?
        </h2>
        <p className="max-w-3xl mx-auto opacity-80 mb-12">
          Every adoption makes room for another rescue. When you adopt through
          PawMart, you give a homeless pet a second chance — a life filled with
          love, care, and belonging. Join our mission to end pet homelessness
          and promote responsible pet ownership. Your small step can be a giant
          leap for a soul in need.
        </p>
      </section>

      {/* Hero Section */}
      <section data-aos="fade-up" className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col items-center mb-12">
           <h2 className="text-3xl font-bold mt-16 mb-4">
             Meet Our Pet Heroes
           </h2>
           <p className="italic opacity-70">These are the people who make a difference in our community</p>
        </div>

        {/* Grid Structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {heroes.map((hero) => (
            <div
              key={hero.id}
              className="bg-base-100 shadow-sm rounded-md"
            >
              <div className="relative mx-auto mb-6">
                <div className="absolute inset-0 bg-teal-500 rounded-full
                 scale-0 "></div>
                <img
                  src={hero.img}
                  alt={hero.name}
                  className="w-full h-48 mx-auto p-4 object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-bold group-hover:text-teal-600 transition-colors">
                {hero.name}
              </h3>
              <p className="text-sm opacity-70 mt-2 mb-6 font-medium italic">
                "{hero.role}"
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Adopt;