import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";

const UpdateListing = () => {
  const { id } = useParams();
  const [listing, setListing] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/listing/${id}`)
      .then(res => res.json())
      .then(data => {
        setListing(data)
        setLoading(false);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/mylistings/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(listing),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        toast.success("Listing updated successfully!");
        navigate("/mylistings");
      })
      .catch(() => toast.error("Error updating listing"));
  };

   if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-accent"></span>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <Toaster />
      <h2 className="text-2xl font-bold mb-4">Update Listing</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          className="input input-bordered w-full"
          type="text"
          value={listing.name || ""}
          onChange={(e) => setListing({ ...listing, name: e.target.value })}
          placeholder="Name"
        />
        <input
          className="input input-bordered w-full"
          type="text"
          value={listing.category || ""}
          onChange={(e) => setListing({ ...listing, category: e.target.value })}
          placeholder="Category"
        />
        <input
          className="input input-bordered w-full"
          type="number"
          value={listing.price || ""}
          onChange={(e) => setListing({ ...listing, price: e.target.value })}
          placeholder="Price"
        />
        <input
          className="input input-bordered w-full"
          type="url"
          value={listing.image || ""}
          onChange={(e) => setListing({ ...listing, image: e.target.value })}
          placeholder="Image"
        />
        <button type="submit" className="btn btn-primary w-full">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateListing;
