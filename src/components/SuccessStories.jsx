import { FaQuoteLeft, FaArrowRight } from "react-icons/fa";

// const stories = [
//   {
//     id: 1,
//     name: "Buddy",
//     beforeImg: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=300&h=400&fit=crop", // Placeholder image
//     afterImg: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=300&h=400&fit=crop", // Placeholder image
//     story: "Buddy was found abandoned in the rain. Now he lives in a mansion with a loving family!",
//     adoptedBy: "The Rahman Family"
//   },
//   {
//     id: 2,
//     name: "Luna",
//     beforeImg: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=300&h=400&fit=crop",
//     afterImg: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=300&h=400&fit=crop",
//     story: "Luna was a shy stray kitten. Today she is a playful queen of her forever home.",
//     adoptedBy: "Sarah & John"
//   },
//   {
//     id: 3,
//     name: "Max",
//     beforeImg: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=300&h=400&fit=crop",
//     afterImg: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=300&h=400&fit=crop",
//     story: "Max had a broken leg and a broken spirit. With surgery and love, he's now a marathon runner!",
//     adoptedBy: "The Khan Family"
//   }
// ];

const stories = [
  {
    id: 1,
    name: "Buddy",
    // Buddy: Akdom eka r koshter chhobi vs Happy chhobi
    beforeImg: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=300&h=400&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=300&h=400&fit=crop",
    story: "Buddy was found abandoned in the rain. Now he lives in a mansion with a loving family!",
    adoptedBy: "The Rahman Family"
  },
  {
    id: 2,
    name: "Luna",
    // Luna: Osahay ekta beral chana vs King size luxury-te thaka beral
    beforeImg: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=300&h=400&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=300&h=400&fit=crop",
    story: "Luna was a shy stray kitten. Today she is a playful queen of her forever home.",
    adoptedBy: "Sarah & John"
  },
  {
    id: 3,
    name: "Max",
    // Max: Dirty/Sad looking dog vs Groomed and happy dog
    beforeImg: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=300&h=400&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=300&h=400&fit=crop",
    story: "Max had a broken leg and a broken spirit. With surgery and love, he's now a marathon runner!",
    adoptedBy: "The Khan Family"
  }
];




export default function SuccessStories() {
  return (
    <section className="py-24 bg-base-200 text-base-content overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Happy <span className="text-teal-600">Tail-Wagging</span> Stories
          </h2>
          <p className="opacity-70 italic mb-8">Witness the transformation of our furry heroes</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {stories.map((item) => (
            <div key={item.id} className="group bg-base-100 rounded-xl p-8 transition-all hover:scale-102 hover:shadow-md border border-transparent">

              {/* Image Comparison Container */}
              <div className="flex gap-4 mb-8">
                {/* Before Image */}
                <div className="relative w-1/2 overflow-hidden rounded-xl">
                  <img src={item.beforeImg} alt="Before" className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-md uppercase font-bold">Before</span>
                </div>

                {/* After Image */}
                <div className="relative w-1/2 overflow-hidden rounded-xl">
                  <img src={item.afterImg} alt="After" className="w-full h-64 object-cover" />
                  <span className="absolute bottom-2 left-2 bg-teal-600 text-white text-[10px] px-2 py-1 rounded-md uppercase font-bold tracking-widest animate-pulse">After</span>
                </div>
              </div>

              {/* Story Content */}
              <div className="relative pt-6">
                <FaQuoteLeft className="absolute -top-2 -left-2 text-base-100 text-5xl" />
                <h3 className="text-xl font-bold mb-3 mt-2 flex items-center gap-2">
                  {item.name}'s Journey <FaArrowRight className="text-sm text-teal-600" />
                </h3>
                <p className="mb-6 opacity-80 italic">
                  "{item.story}"
                </p>

                <div className="flex items-center justify-between border-t pt-6">
                  <div>
                    <p className="text-xs uppercase font-bold tracking-widest">Adopted By</p>
                    <p className="font-semibold text-teal-600 ">{item.adoptedBy}</p>
                  </div>
                  <button className="text-xs font-semibold opacity-60 uppercase tracking-tighter hover:text-teal-600 transition-colors">
                    Full Story +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}