import React, { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";

const RecentListings = () => {
  const [recentListings, setRecentListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://pawmart-api-server-kappa.vercel.app/listings/recent")
      .then((res) => res.json())
      .then((data) => {
        setRecentListings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching recent listings:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-accent"></span>
      </div>
    );
  }

  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Recent Listings
          </h2>
          <p className=" max-w-xl mx-auto opacity-70 italic mb-8">
            Discover the latest adorable pets and pet care products recently
            added.
          </p>
        </div>

        {recentListings.length === 0 ? (
          <p className="text-center text-lg">Loading listings...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {recentListings.map((item) => (
              <div
                data-aos="zoom-out"
                key={item._id}
                className=" rounded-md shadow-sm p-1 bg-base-100  transition-all overflow-hidden group"
              >
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-60 object-cover group-hover:scale-102 p-2  transition-transform duration-500"
                  />
                  <span className="absolute bg-base-100 top-3 left-3 px-3 py-1 rounded-md text-sm font-medium shadow">
                    {item.category}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-2 space-y-3 text-left">
                  <h3 className="text-lg  text-teal-600 font-semibold transition">
                    {item.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-lg font-bold">
                      <p>
                        <TbCurrencyTaka className="text-xl"></TbCurrencyTaka>
                      </p>
                      <p className="">{item.Price}</p>
                    </div>

                    <p className="text-sm flex items-center gap-1">
                      <span>
                        <MdLocationOn className="text-xl"></MdLocationOn>
                      </span>{" "}
                      {item.location}
                    </p>
                  </div>

                  <div>
                    <p className="italic opacity-70">
                      {item.description.length > 25
                        ? item.description.substring(0, 25) + "..."
                        : item.description}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      (window.location.href = `/listing/${item._id}`)
                    }
                    className="w-full mt-1 cursor-pointer py-1 rounded-md font-semibold transition bg-base-300 hover:bg-teal-600"
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

export default RecentListings;
