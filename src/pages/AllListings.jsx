/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MdLocationOn } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";


const AllListings = () => {
  const { category } = useParams();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3000/listings')
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setLoading(true);
      })
      .catch((err) => console.error("Error fetching category data:", err));
  }, [category]);

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    console.log(search_text);

    fetch(`http://localhost:3000/search?search=${search_text}`)
      .then(res => res.json())
      .then(data => {
         setListings(data)
         setLoading(false)
      })
      .catch((err) => {
        console.error("search error:", err);
        setLoading(false)
      });
  }



  return (
    <section className="py-20 bg-linear-to-b from-cyan-50 to-teal-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-3 tracking-tight">
             All Pets and Supplies
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Browse all available listings under <span className="font-medium text-teal-700">{category}</span>.
          </p>
        </div>



        <form className="text-center mb-4" onSubmit={handleSearch}>
          <label className="input">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" name="search"  placeholder="Search" />
          </label>
          <button className="btn btn-accent ml-2">Search</button>
        </form>


        {listings.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No listings found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {listings.map((item) => (
              <div
                data-aos="fade-out"
                key={item._id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden group"
              >
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow">
                    {item.category}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-5 space-y-3 text-left">
                  <h3 className="text-xl font-semibold text-amber-600 group-hover:text-teal-700 transition">
                    {item.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-lg font-bold text-emerald-600">
                        <p><TbCurrencyTaka className="text-xl"></TbCurrencyTaka></p>
                        <p>{item.Price}</p>
                    </div>

                    <p className="text-emerald-600 text-sm flex items-center gap-1">
                      <span><MdLocationOn className="text-emerald-600 text-xl"></MdLocationOn></span> {item.location}
                    </p>
                  </div>

                  <button
                    onClick={() => (window.location.href = `/listing/${item._id}`)}
                    className="w-full mt-4 bg-teal-600 cursor-pointer text-white py-2.5 rounded-lg font-semibold hover:bg-teal-700 transition"
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
