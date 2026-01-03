import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      toast.success("Message sent successfully! We will contact you soon.", {
        progressStyle: {
          background: "#0d9488", // Progress bar color
        },
      });
      setLoading(false);
      e.target.reset();
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-20 min-h-[70vh] flex flex-col justify-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-teal-600 mb-4 tracking-tight">
          Get In Touch
        </h1>
        <p className="text-base-content/70 text-lg max-w-lg mx-auto italic">
          Have a question or need assistance? Drop us a message and we'll get
          back to you shortly.
        </p>
      </div>

      <div className="max-w-2xl mx-auto w-full bg-base-100 p-8 md:p-12 rounded-3xl shadow-2xl border border-base-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-base">Full Name</span>
            </label>
            <input
              required
              type="text"
              placeholder="Enter your name"
              className="input input-bordered focus:outline-teal-500 w-full transition-all"
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-base">
                Email Address
              </span>
            </label>
            <input
              required
              type="email"
              placeholder="example@mail.com"
              className="input input-bordered focus:outline-teal-500 w-full transition-all"
            />
          </div>

          {/* Message */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-base">Message</span>
            </label>
            <textarea
              required
              className="textarea textarea-bordered h-40 focus:outline-teal-500 w-full transition-all resize-none"
              placeholder="How can we help you?"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`btn btn-teal-600 bg-teal-600 hover:bg-teal-700 text-white w-full border-none h-14 text-lg shadow-lg ${
              loading ? "cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <span className="loading loading-spinner"></span>
                <span>Sending...</span>
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
