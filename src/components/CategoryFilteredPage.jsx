// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { MdLocationOn } from "react-icons/md";
// import { TbCurrencyTaka } from "react-icons/tb";


// const CategoryFilteredPage = () => {
//   const { category } = useParams();
//   const [listings, setListings] = useState([]);
//   const [loading, setLoading] = useState(true);


//   useEffect(() => {
//     setLoading(true);
//     fetch(`http://localhost:3000/listings/category/${category}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setListings(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching category data:", err)
//         setLoading(false)
//       });
//   }, [category]);

//   return (
//     <section className="py-20 min-h-screen">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold text-accent mb-3 tracking-tight">
//              {category} Listings
//           </h2>
//           <p className="max-w-xl mx-auto">
//             Browse all available listings under <span className="font-medium text-secondary">{category}</span>.
//           </p>
//         </div>

//         {loading ? (
//           <
//         {listings.length === 0 ? (
//           <p className="text-center text-lg">No listings found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {listings.map((item) => (
//               <div
//                 key={item._id}
//                 className="rounded-2xl border-teal-200 border-2 shadow-sm hover:shadow-lg transition-all overflow-hidden group"
//               >
//                 {/* Image Section */}
//                 <div className="relative">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-full h-60 object-cover group-hover:scale-103 transition-transform duration-500"
//                   />
//                   <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-medium shadow text-secondary bg-base-100">
//                     {item.category}
//                   </span>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-5 space-y-3 text-left">
//                   <h3 className="text-xl font-semibold text-error">
//                     {item.name}
//                   </h3>

//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center text-lg text-info font-bold ">
//                         <p><TbCurrencyTaka className="text-xl"></TbCurrencyTaka></p>
//                         <p>{item.Price}</p>
//                     </div>

//                     <p className=" text-sm flex items-center text-primary gap-1">
//                       <span><MdLocationOn className=" text-xl"></MdLocationOn></span> {item.location}
//                     </p>
//                   </div>

//                   <button
//                     onClick={() => (window.location.href = `/listing/${item._id}`)}
//                     className="w-full mt-4 bg-accent hover:bg-info cursor-pointer py-2.5 rounded-lg font-semibold  transition"
//                   >
//                     See Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default CategoryFilteredPage;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MdLocationOn } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";

const CategoryFilteredPage = () => {
  const { category } = useParams();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://pawmart-api-server-kappa.vercel.app/listings/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching category data:", err);
        setLoading(false);
      });
  }, [category]);

  if(loading){
    <div>Loading...</div>
  }

  return (
    <section className="py-20 bg-base-200 min-h-screen">
      <div className="max-w-7xl text-base-content mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {category} Listings
          </h2>
          <p className="max-w-xl mx-auto opacity-70 mb-8 italic">
            Browse all available listings under{" "}
            <span className="font-medium teal-600">{category}</span>.
          </p>
        </div>

        { listings.length === 0 ? (
          <p className="text-center text-lg">No listings found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {listings.map((item) => (
              <div
                key={item._id}
                className="rounded-md shadow-sm p-1 transition-all overflow-hidden group"
              >
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-60 object-cover group-hover:scale-102 transition-transform duration-500"
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
                      <TbCurrencyTaka className="text-xl" />
                      <p>{item.Price}</p>
                    </div>

                    <p className="text-sm flex items-center gap-1">
                      <MdLocationOn className="text-xl" /> {item.location}
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
                    className="w-full mt-1 cursor-pointer hover:bg-teal-600 py-1 rounded-md font-semibold transition bg-base-300"
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
