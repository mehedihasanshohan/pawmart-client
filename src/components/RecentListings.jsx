import React, { useEffect, useState } from "react";

const RecentListings = () => {
  const [recentListings, setRecentListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/listings/recent")
      .then((res) => res.json())
      .then((data) => setRecentListings(data))
      .catch((err) => console.error("Error fetching recent listings:", err));
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          🐾 Recent Listings
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentListings.map((item) => (
            <div
              key={item._id}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-500">{item.category}</p>
                <p className="text-gray-700">
                  💰{" "}
                  {item.category === "Pets (Adoption)"
                    ? "Free for Adoption"
                    : `$${item.Price}`}
                </p>
                <p className="text-gray-500">📍 {item.location}</p>
                <button
                  className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  onClick={() => window.location.href = `/listing/${item._id}`}
                >
                  See Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentListings;
