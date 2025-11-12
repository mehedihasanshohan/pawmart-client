import React, { useState, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const AddListing = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    location: "",
    description: "",
    image: "",
    date: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("You must be logged in to add a listing.");
      return;
    }

    const dataToSend = {
      ...formData,
      price: formData.category === "Pets" ? 0 : parseFloat(formData.price) || 0,
      email: user.email,
      date: new Date(formData.date),
    };

      console.log("Form Data to Send:", dataToSend);


    try {
      const res = await fetch("http://localhost:3000/addlisting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend)
      });

      if (res.ok) {
        toast.success("Listing added successfully!");
        // Reset form
        setFormData({
          name: "",
          category: "",
          price: "",
          location: "",
          description: "",
          image: "",
          date: "",
        });
      } else {
        toast.error("Failed to add listing.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt- shadow-lg rounded-lg">
      <Toaster />
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Add New Listing
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product/Pet Name */}
        <div>
          <label className="block font-medium">
            Product/Pet Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter name"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium ">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select Category</option>
            <option value="Pets">Pets</option>
            <option value="Food">Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Care Products">Care Products</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium ">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={formData.category === "Pets" ? 0 : formData.price}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter price"
            disabled={formData.category === "Pets"}
            required={formData.category !== "Pets"}
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium ">
            Location
          </label>
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter location"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter description"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-medium ">
            Image URL
          </label>
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter image URL"
            required
          />
        </div>

        {/* Pick Up Date */}
        <div>
          <label className="block font-medium ">
            Pick Up Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium ">
            Email
          </label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded bg-accent hover:bg-info"
        >
          Add Listing
        </button>
      </form>
    </div>
  );
};

export default AddListing;