import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/mylistings?email=${user.email}`)
        .then(res => res.json())
        .then(data => setListings(data));
    }
  }, [user?.email]);


   const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this listing?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:3000/mylistings/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (res.ok) {
        toast.success("Listing deleted successfully!");
        setListings(listings.filter(listing => listing._id !== id));
      } else {
        toast.error(data.message || "Failed to delete listing");
      }
    } catch (error) {
      toast.error("Error deleting listing");
      console.error(error);
    }
  };

   const handleUpdate = (id) => {
    navigate(`/update-listing/${id}`);
  };


  return (
    <div className=''>
      <h2 className='text-center text-2xl font-bold mt-6 mb-4'>My Listings</h2>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Location</th>
        <th>Image</th>
        <th>Email</th>
        <th>Delete</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>

      {
        listings.map((listing, index) => <tr key={listing._id}>
        <th>{index+1}</th>
        <td>{listing.name}</td>
        <td>{listing.category}</td>
        <td>{listing.price}</td>
        <td>{listing.location}</td>
        <td><img src={listing.image} className="h-8 w-8 rounded-full" alt="" /></td>
        <td>{listing.email}</td>
        <td><button onClick={() => handleDelete(listing._id)} className="btn btn-error">Delete</button></td>
        <td><button onClick={()=> handleUpdate(listing._id)} className="btn btn-info">Update</button></td>
      </tr>)
      }
    </tbody>
  </table>
</div>
</div>
  );
};

export default MyListings;
