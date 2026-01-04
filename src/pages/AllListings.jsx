/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { MdLocationOn, MdClear } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router";

const AllListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);

  // Filter States
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const fetchListings = () => {
    setLoading(true);
    // Constructing query string based on your database fields
    const queryParams = new URLSearchParams({
      search,
      category,
      sort,
    }).toString();

    fetch(`https://pawmart-api-server-kappa.vercel.app/listings?${queryParams}`)
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  };

  // Trigger fetch when category or sort dropdown changes
  useEffect(() => {
    fetchListings();
  }, [category, sort]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchListings();
  };

  const resetFilters = () => {
    setSearch("");
    setCategory("");
    setSort("");
    // Re-fetch everything
    fetch(`https://pawmart-api-server-kappa.vercel.app/listings`)
      .then((res) => res.json())
      .then((data) => setListings(data));
  };

  return (
    <section className="py-12 bg-base-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- Search & Filter UI --- */}
        <div className="bg-base-100 p-6 rounded-2xl shadow-sm mb-8 border border-base-300">
          <div className="flex flex-wrap gap-4 items-end">
            {/* Search Input */}
            <form
              onSubmit={handleSearchSubmit}
              className="flex-1 min-w-[250px]"
            >
              <label className="label-text font-bold ml-1">Search Name</label>
              <div className="join w-full mt-2">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="e.g. Bird Cage"
                  className="input input-bordered join-item w-full focus:outline-teal-600"
                />
                <button
                  type="submit"
                  className="btn btn-teal-600 bg-teal-600 text-white border-none join-item"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Category Filter */}
            <div className="w-full md:w-48">
              <label className="label-text font-bold ml-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="select select-bordered w-full mt-2 focus:outline-teal-600"
              >
                <option value="">All Categories</option>
                <option value="Pets">Pets</option>
                <option value="Pet Food">Pet Food</option>
                <option value="Pet Care Products">Pet Care Product</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>

            {/* Price Sort */}
            <div className="w-full md:w-48">
              <label className="label-text font-bold ml-1">Sort Price</label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="select select-bordered w-full mt-2 focus:outline-teal-600"
              >
                <option value="">Newest First</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </div>

            {/* Clear Button */}
            <button
              onClick={resetFilters}
              className="btn btn-ghost text-red-500 hover:bg-red-50 mt-2"
            >
              <MdClear className="text-xl" /> Clear
            </button>
          </div>
        </div>

        {/* --- Grid Section --- */}
        {loading ? (
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner loading-lg text-teal-600"></span>
          </div>
        ) : listings.length === 0 ? (
          <div className="text-center py-20 opacity-40">
            No items found matching your criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {listings.map((item) => (
              <div
                key={item._id}
                data-aos="fade-out"
                className="bg-base-100 shadow-sm p-1 transition-all overflow-hiddengroup"
              >
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-60 object-cover group-hover:scale-102 p-2 transition-transform duration-500"
                  />
                  <span className="absolute bg-base-100 top-3 left-3 px-3 py-1 rounded-md text-sm font-medium shadow">
                    {item.category}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-2 space-y-3 text-left">
                  <h3 className="text-lg font-semibold transition">
                    {item.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-teal-600 text-lg font-bold ">
                      <p>
                        <TbCurrencyTaka className="text-xl"></TbCurrencyTaka>
                      </p>
                      <p>{item.Price}</p>
                    </div>

                    <p className=" text-sm flex items-center gap-1">
                      <span>
                        <MdLocationOn className=" text-xl"></MdLocationOn>
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
                    className="w-full mt-1 cursor-point py-1 rounded-md font-semibold bg-base-300 hover:bg-teal-600 transition"
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

export default AllListings;
