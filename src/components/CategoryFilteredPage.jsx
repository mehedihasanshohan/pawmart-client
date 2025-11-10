import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CategoryFilteredPage = () => {
  const { category } = useParams();
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/listings/category/${category}`)
      .then((res) => res.json())
      .then((data) => setListings(data))
      .catch((err) => console.error("Error fetching category data:", err));
  }, [category]);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
          {category} Listings
        </h2>

        {listings.length === 0 ? (
          <p className="text-center text-gray-500">No listings found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
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
                    {" "}
                    {item.category === "Pets (Adoption)"
                      ? "Free for Adoption"
                      : `$${item.Price}`}
                  </p>
                  <p className="text-gray-500"> {item.location}</p>
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
        )}
      </div>
    </section>
  );
};

export default CategoryFilteredPage;
