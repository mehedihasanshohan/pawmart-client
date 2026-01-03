import React from 'react'

const AboutUs = () => {
     return (
    <div className="bg-base-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-teal-600 py-20 text-white text-center">
        <h1 className="text-5xl font-extrabold mb-4">Our Mission</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Connecting loving hearts with furry friends. At Pawmart, we believe every pet deserves a happy home and every human deserves a loyal companion.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-16 items-center">
        <img src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?q=80&w=800" className="rounded-2xl shadow-2xl" alt="About" />
        <div>
          <h2 className="text-3xl font-bold mb-6 text-teal-600">Why Pawmart?</h2>
          <p className="text-lg mb-4 text-base-content/80 leading-relaxed">
            Founded in 2024, Pawmart has grown from a small community project to Bangladesh's leading pet adoption and supply platform. We simplify the process of finding pets, buying premium food, and accessing professional pet care.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="p-4 bg-base-200 rounded-lg border-l-4 border-teal-500 text-center">
              <h4 className="text-3xl font-bold">5k+</h4>
              <p className="text-sm">Pets Adopted</p>
            </div>
            <div className="p-4 bg-base-200 rounded-lg border-l-4 border-teal-500 text-center">
              <h4 className="text-3xl font-bold">10k+</h4>
              <p className="text-sm">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs