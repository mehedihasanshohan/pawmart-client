
import React from 'react';
import { Link } from 'react-router';

const Slider = () => {
  const slides = [
    {
      id: "slide1",
      prev: "#slide3",
      next: "#slide2",
      img: "https://i.ibb.co.com/HfMKMZDM/adorable-portrait-pets-surrounded-by-flowers.jpg",
      title: "Find Your Furry Friend Today!",
      subtitle: "Join the Family",
      desc: "We make sure your furry friends stay warm and happy all winter long. Explore our collection of lovable pets waiting for a home.",
      btnText: "Donate Now"
    },
    {
      id: "slide2",
      prev: "#slide1",
      next: "#slide3",
      img: "https://i.ibb.co.com/RVYJPzn/view-cats-dogs-showing-friendship.jpg",
      title: "Expert Pet Care & Grooming",
      subtitle: "Look Your Best",
      desc: "Keep your pets looking their best with our grooming experts. Professional care tailored to your pet's specific needs.",
      btnText: "Donate Now"
    },
    {
      id: "slide3",
      prev: "#slide2",
      next: "#slide1",
      img: "https://i.ibb.co.com/jPT84XxD/w3.jpg",
      title: "Safe and Playful Spaces",
      subtitle: "Happy Boarding",
      desc: "Safe, warm, and playful spaces for your pets. We provide a home away from home with 24/7 professional supervision.",
      btnText: "Donate Now"
    }
  ];

  return (
    <div className='animate__animated animate__rollIn h-[450px] md:h-[550px] lg:h-[600px] w-full overflow-hidden rounded-xl'>
      <div className="carousel carousel-vertical w-full h-full">

        {slides.map((slide) => (
          <div key={slide.id} id={slide.id} className="carousel-item relative w-full h-full">
            {/* Image with overlay */}
            <div className="relative w-full h-full">
              <img src={slide.img} className="w-full h-full object-cover " alt="Pet Slider" />
              <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent"></div>
            </div>

            {/* Content Overlay - Responsive Layout */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 text-white/80">
              <span className="bg-teal-600 text-xs md:text-sm font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
                {slide.subtitle}
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl text-slate-300 font-extrabold mb-4 leading-tight max-w-2xl">
                {slide.title}
              </h2>
              <p className="text-sm md:text-lg lg:text-xl max-w-lg mb-8 text-slate-400 leading-relaxed">
                {slide.desc}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary md:btn-md btn-sm border-none bg-teal-500 hover:bg-teal-600">
                  {slide.btnText}
                </button>
                <Link to="/donate" className="btn btn-outline btn-sm md:btn-md text-slate-400 hover:bg-white hover:text-black">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 right-4 md:right-8 flex flex-col justify-center gap-4 z-10">
              <a href={slide.prev} className="btn btn-circle btn-xs md:btn-sm bg-white/20 border-none text-white hover:bg-orange-500 transition-all">▲</a>
              <div className="h-10 md:h-20 w-[2px] bg-white/30 mx-auto"></div>
              <a href={slide.next} className="btn btn-circle btn-xs md:btn-sm bg-white/20 border-none text-white hover:bg-orange-500 transition-all">▼</a>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Slider;