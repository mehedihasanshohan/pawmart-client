import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MdLocationOn } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";

const ListingDetails = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/listing/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setListing(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching listing details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg text-gray-500">
        Loading listing details...
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg text-red-500">
        Listing not found.
      </div>
    );
  }

  return (
    <section className="py-20 bg-linear-to-b from-cyan-50 to-teal-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-2 tracking-tight">
            {listing.name}
          </h2>
          <p className="text-gray-600">
            Category:{" "}
            <span className="text-teal-700 font-semibold">
              {listing.category}
            </span>
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl p-4 shadow-lg overflow-hidden flex flex-col md:flex-row gap-3">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={listing.image}
              alt={listing.name}
              className="w-full h-96 rounded-2xl object-cover"
            />
          </div>

          {/* Details */}
          <div className="md:w-1/2 p-4 flex flex-col justify-between">
            <div className="space-y-5">
              {/* Price */}
              <div className="flex items-center gap-2 text-2xl font-bold text-emerald-700">
                {listing.Price === 0 ? (
                  <p className="text-amber-600">Free for Adoption</p>
                ) : (
                  <>
                    <TbCurrencyTaka className="text-2xl" />
                    <p>{listing.Price}</p>
                  </>
                )}
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-700 font-medium">
                <MdLocationOn className="text-teal-600 text-xl" />
                <span>{listing.location}</span>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Description:
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {listing.description}
                </p>
              </div>

              {/* Email Contact */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Contact Email:
                </h3>
                <p className="text-gray-700 font-medium">
                  {listing.email || "Not provided"}
                </p>
              </div>

              {/* Date */}
              <p className="text-sm text-gray-500">
                Added on:{" "}
                {listing.date
                  ? new Date(listing.date).toLocaleDateString()
                  : "N/A"}
              </p>
            </div>

            {/* Back Button */}
            <button
              onClick={() => window.history.back()}
              className="mt-8 w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
            >
              ← Back to Listings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingDetails;
