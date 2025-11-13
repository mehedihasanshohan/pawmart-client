// import React, { useEffect, useState } from "react";

// const RecentListings = () => {
//   const [recentListings, setRecentListings] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/listings/recent")
//       .then((res) => res.json())
//       .then((data) => setRecentListings(data))
//       .catch((err) => console.error("Error fetching recent listings:", err));
//   }, []);

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold mb-10 text-gray-800">
//            Recent Listings
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {recentListings.map((item) => (
//             <div
//               key={item._id}
//               className="bg-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition overflow-hidden"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-56 rounded-xl object-cover"
//               />
//               <div className="p-4 space-y-2">
//                 <h3 className="text-xl font-bold text-teal-700">{item.name}</h3>
//                 <div className="flex justify-around">
//                 <p className="text-amber-600 font-semibold">{item.category}</p>
// <p className="text-gray-700 font-semibold">
//                   {" "}
//                   {item.category === "Pets (Adoption)"
//                     ? "Free for Adoption"
//                     : `$${item.Price}`}
//                 </p>
//                 <p className="text-gray-500"> {item.location}</p>

//                 </div>
//                 {/* <p className="text-amber-600 font-semibold">{item.category}</p> */}
//                 {/* <p className="text-gray-700 font-semibold">
//                   {" "}
//                   {item.category === "Pets (Adoption)"
//                     ? "Free for Adoption"
//                     : `$${item.Price}`}
//                 </p> */}
//                 {/* <p className="text-gray-500"> {item.location}</p> */}
//                 <button
//                   className="mt-3 bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full"
//                   onClick={() => window.location.href = `/listing/${item._id}`}
//                 >
//                   See Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RecentListings;


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
        setRecentListings(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching recent listings:", err)
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
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-accent mb-3 tracking-tight">
            Recent Listings
          </h2>
          <p className=" max-w-xl mx-auto">
            Discover the latest adorable pets and pet care products recently added.
          </p>
        </div>

        {recentListings.length === 0 ? (
          <p className="text-center text-lg">Loading listings...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {recentListings.map((item) => (
              <div
                data-aos="zoom-out"
                key={item._id}
                className=" rounded-2xl border-2 border-teal-200  shadow-sm  transition-all overflow-hidden group"
              >
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute text-secondary bg-base-100 top-3 left-3 px-3 py-1 rounded-full text-sm font-medium shadow">
                    {item.category}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-5 space-y-3 text-left">
                  <h3 className="text-xl font-semibold text-error transition">
                    {item.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-lg text-info font-bold">
                      <p><TbCurrencyTaka className="text-xl"></TbCurrencyTaka></p>
                      <p>{item.Price}</p>
                    </div>

                    <p className="text-primary text-sm flex items-center gap-1 font-semibold">
                      <span><MdLocationOn className="text-xl"></MdLocationOn></span> {item.location}
                    </p>
                  </div>

                  <button
                    onClick={() => (window.location.href = `/listing/${item._id}`)}
                    className="w-full mt-4 cursor-pointer py-2.5 bg-accent hover:bg-info rounded-lg font-semibold transition"
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
