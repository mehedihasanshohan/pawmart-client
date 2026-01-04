import { useState, useEffect } from "react";

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      title: "Training Your New Puppy",
      date: "Jan 03, 2026",
      img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=400",
      description: "Training a puppy requires patience and consistency. Start with basic commands like sit, stay, and come. Use positive reinforcement like treats and praise to encourage good behavior. Remember, a well-trained puppy is a happy member of the family!"
    },
    {
      title: "Best Food for Senior Cats",
      date: "Dec 28, 2025",
      img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=400",
      description: "As cats age, their nutritional needs change. Senior cats often require easier-to-digest proteins and specific vitamins to support joint health. Consult with your vet to find a balanced diet that keeps your aging feline friend energetic and healthy."
    },
    {
      title: "Pet Health 101: Winter Care",
      date: "Dec 15, 2025",
      img: "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=400",
      description: "Winter can be tough on pets. Ensure they have a warm place to sleep and protect their paws from ice and salt. Hydration is key even in cold weather, so keep that water bowl full. Regular checkups can prevent winter-related health issues."
    }
  ];

  // Scroll Lock logic
  useEffect(() => {
    document.body.style.overflow = selectedBlog ? "hidden" : "auto";
  }, [selectedBlog]);

  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <h1 className="text-4xl font-bold text-center mb-16 text-teal-600">Pawmart Blog</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((post, i) => (
          <div key={i} className="card bg-base-100 shadow-xl border border-base-200 hover:translate-y-[-5px] transition-all">
            <figure><img src={post.img} alt="Pet" className="h-52 w-full object-cover" /></figure>
            <div className="card-body p-6">
              <div className="badge badge-accent mb-2">{post.date}</div>
              <h2 className="card-title text-xl font-bold hover:text-teal-600 cursor-pointer">{post.title}</h2>
              <p className="text-sm opacity-70 leading-relaxed">
                {post.description.substring(0, 80)}...
              </p>
              <div className="card-actions justify-end mt-4">
                <button
                  onClick={() => setSelectedBlog(post)}
                  className="btn btn-sm btn-outline btn-accent"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- Modal --- */}
      {selectedBlog && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedBlog(null)}
          ></div>

          {/* Modal Box */}
          <div className="relative bg-base-100 w-full max-w-lg p-8 rounded-2xl shadow-2xl border border-teal-600/20">
            <button
              onClick={() => setSelectedBlog(null)}
              className="btn btn-sm btn-circle absolute right-4 top-4"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-teal-600 mb-4">
              {selectedBlog.title}
            </h3>

            <p className="text-base-content leading-relaxed text-lg">
              {selectedBlog.description}
            </p>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedBlog(null)}
                className="btn btn-accent"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;