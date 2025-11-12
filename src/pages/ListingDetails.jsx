import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { MdLocationOn } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { AuthContext } from './../context/AuthContext';
import { toast } from "react-toastify";

const ListingDetails = () => {
  const {user} = useContext(AuthContext)
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // scroll lock when modal is open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg text-gray-500">
        <span className="loading loading-spinner text-info"></span>
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
    <section className="py-20  min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-accent mb-2 tracking-tight">
            {listing.name}
          </h2>
          <p className="">
            Category:{" "}
            <span className=" text-secondary font-semibold">
              {listing.category}
            </span>
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-lg overflow-hidden flex flex-col md:flex-row gap-3">
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
                    <TbCurrencyTaka className="text-info text-2xl" />
                    <p className="text-info">{listing.Price}</p>
                  </>
                )}
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-primary font-medium">
                <MdLocationOn className="text-primary text-xl" />
                <span>{listing.location}</span>
              </div>

              {/* Description */}
              <div className="text-success">
                <h3 className="text-lg font-semibold mb-2">
                  Description:
                </h3>
                <p className="leading-relaxed">
                  {listing.description}
                </p>
              </div>

              {/* Email Contact */}
              <div className="text-secondary">
                <h3 className="text-lg font-semibold mb-2">
                  Contact Email:
                </h3>
                <p className="font-medium">
                  {listing.email || "Not provided"}
                </p>
              </div>

              {/* Date */}
              <p className="text-sm">
                Added on:{" "}
                {listing.date
                  ? new Date(listing.date).toLocaleDateString()
                  : "N/A"}
              </p>
            </div>

            {/* Back Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-6 w-full bg-accent hover:bg-info py-3 rounded-lg font-semibold transition cursor-pointer"
            >
              Adopt / Order Now
            </button>

            <button
              onClick={() => window.history.back()}
              className="mt-8 w-full bg-info hover:bg-accent cursor-pointer py-3 rounded-lg font-semibold transition"
            >
              ← Back to Listings
            </button>
          </div>
        </div>
      </div>




    {isModalOpen && (
  <div className="fixed inset-0 bg-black/30 backdrop-blur-sm bg-opacity-40 flex justify-center items-center z-50 px-4">
    {/* Outer wrapper ensures scroll on small screens */}
    <div className="relative rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl p-6">
      {/* Close button*/}
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-3 right-3 text-2xl font-bold"
      >
        ×
      </button>

      <h2 className="text-2xl font-bold mb-4 text-center">
        Place Your Order
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const order = {
            productId: listing._id.toString(),
            productName: listing.name,
            buyerName: user.displayName,
            email: user.email,
            quantity: listing.category === "Pets" ? 1 : e.target.quantity.value,
            price: listing.Price,
            address: e.target.address.value,
            phone: e.target.phone.value,
            date: e.target.date.value,
            notes: e.target.notes.value,
          };

          fetch("http://localhost:3000/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(order),
          })
            .then((res) => res.json())
            .then(() => {
              toast.success("Order placed successfully!");
              setIsModalOpen(false);
            });
        }}
        className="space-y-3"
      >
        {/* Buyer Name */}
        <div>
          <label className="block text-sm font-medium">Buyer Name</label>
          <input type="text" value={user.displayName} readOnly className="input input-bordered w-full" />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" value={user.email} readOnly className="input input-bordered w-full" />
        </div>

        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium">Product</label>
          <input type="text" value={listing.name} readOnly className="input input-bordered w-full" />
        </div>

        {/* Quantity */}
        {listing.category !== "Pets" && (
          <div>
            <label className="block text-sm font-medium">Quantity</label>
            <input type="number" name="quantity" defaultValue="1" min="1" className="input input-bordered w-full" />
          </div>
        )}

        {/* Price */}
        <div>
          <label className="block text-sm font-medium">Price</label>
          <input type="text" value={listing.Price} readOnly className="input input-bordered w-full" />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium">Address</label>
          <input type="text" name="address" required className="input input-bordered w-full" />
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium">Pick Up Date</label>
          <input type="date" name="date" required className="input input-bordered w-full" />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input type="text" name="phone" required className="input input-bordered w-full" />
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium">Additional Notes</label>
          <textarea
            name="notes"
            className="textarea textarea-bordered w-full"
            placeholder="Write here..."
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button type="submit" className="btn btn-success w-1/2 mr-2 cursor-pointer">
            Submit Order
          </button>
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="btn btn-error w-1/2 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
)}








    </section>
  );
};

export default ListingDetails;
