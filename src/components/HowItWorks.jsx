import React from "react";
import search from "/search.png";
import medical from "/medical-team.png";
import handshake from "/social-life.png";
import home from "/house.png";


export default function HowItWorks() {

  const steps = [
    {
      title: "Search Your Best Friend",
      desc: "Browse our verified listings and find your perfect pet match with ease.",
      icon: search,
      accent: "teal"
    },
    {
      title: "Medical & Safety Check",
      desc: "We ensure every pet is vaccinated and healthy before the meeting.",
      icon: medical,
    },
    {
      title: "Bonding & Meeting",
      desc: "Connect with current owners and spend time getting to know your new friend.",
      icon: handshake,
      accent: "orange"
    },
    {
      title: "Adopt & Celebrate",
      desc: "Complete the simple process and welcome a new soul to your family.",
      icon: home,
      accent: "blue"
    },

  ];

  return (
    <section className="py-24 bg-base-200 text-base-content overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            How It Works?
          </h2>
          <p className="opacity-70 max-w-xl mx-auto italic">
            Adopting a pet through Pawmart is simple and rewarding. Follow these easy steps to bring home your new best friend.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-4
           border-dashed border-gray-300 z-0 -translate-y-12"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="relative z-10 group bg-base-100 p-10 rounded-3xl shadow-md
               border-b-8 border-teal-600"
            >
              {/* Step Counter */}
              <div className="absolute -top-6 left-10 w-12 h-12 bg-slate-800 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-xl group-hover:bg-teal-600 transition-colors">
                {index + 1}
              </div>

              {/* Icon Section */}
              <img className="w-16 h-16 flex items-center justify-center text-teal-600 mb-8 mt-4 group-hover:scale-110 transition-transform duration-500 shadow-inner"
                src= {step.icon}
              />

              {/* Text Section */}
              <h3 className="text-xl font-bold mb-4">
                {step.title}
              </h3>
              <p className="opacity-70 leading-relaxed">
                {step.desc}
              </p>

              {/* Hover Effect Bar */}
              <div className="mt-8 flex items-center gap-2 text-teal-600 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Simple Process <div className="h-1 w-10 bg-teal-600"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}