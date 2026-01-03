import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1524511751214-b0a384dd9fac?auto=format&fit=crop&q=80&w=1600"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          alt="About Us Hero"
        />
        <div className="relative text-center px-4">
          <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeInDown">Our Journey for Paws</h1>
          <p className="text-xl max-w-2xl mx-auto">Connecting lonely hearts with wagging tails since 2024.</p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              At <span className="font-bold text-secondary">PetHaven</span>, our mission is simple: to ensure every pet finds a home where they are loved, and every human finds a companion that brings joy to their life. We believe that adoption is a heroic act, and we strive to make the process transparent, easy, and heartfelt.
            </p>
            <div className="flex gap-4">
              <div className="stats shadow bg-primary text-primary-content">
                <div className="stat">
                  <div className="stat-title text-white">Pets Adopted</div>
                  <div className="stat-value">1.2K+</div>
                </div>
              </div>
              <div className="stats shadow bg-secondary text-secondary-content">
                <div className="stat">
                  <div className="stat-title text-white">Happy Families</div>
                  <div className="stat-value">950+</div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800" alt="Mission" />
          </div>
        </div>
      </div>

      {/* Why We Care Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Why We Do What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">🐾</div>
              <h3 className="text-xl font-bold mb-2">Animal Welfare</h3>
              <p>We work closely with local shelters to ensure all pets are healthy and vaccinated before adoption.</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-2">Safe Homes</h3>
              <p>Our screening process ensures that every pet goes to a safe, responsible, and loving environment.</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-2">Life-long Bonds</h3>
              <p>We provide post-adoption support to help the pet and the owner adjust to their new life together.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team / Founders Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-12">Meet the Team</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="w-64">
            <div className="avatar mb-4">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://i.pravatar.cc/150?u=1" />
              </div>
            </div>
            <h4 className="text-xl font-bold">Alex Johnson</h4>
            <p className="text-sm text-gray-500">Founder & CEO</p>
          </div>
          <div className="w-64">
            <div className="avatar mb-4">
              <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img src="https://i.pravatar.cc/150?u=2" />
              </div>
            </div>
            <h4 className="text-xl font-bold">Sarah Miller</h4>
            <p className="text-sm text-gray-500">Lead Veterinarian</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;