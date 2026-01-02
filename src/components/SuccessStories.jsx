import { FaQuoteLeft, FaArrowRight } from "react-icons/fa";

const stories = [
  {
    id: 1,
    name: "Buddy",
    beforeImg: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=300&h=400&fit=crop", // Placeholder image
    afterImg: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=300&h=400&fit=crop", // Placeholder image
    story: "Buddy was found abandoned in the rain. Now he lives in a mansion with a loving family!",
    adoptedBy: "The Rahman Family"
  },
  {
    id: 2,
    name: "Luna",
    beforeImg: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=300&h=400&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=300&h=400&fit=crop",
    story: "Luna was a shy stray kitten. Today she is a playful queen of her forever home.",
    adoptedBy: "Sarah & John"
  }
];

export default function SuccessStories() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Happy <span className="text-indigo-600">Tail-Wagging</span> Stories
          </h2>
          <p className="text-slate-500 italic">Witness the transformation of our furry heroes</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {stories.map((item) => (
            <div key={item.id} className="group bg-slate-50 rounded-[2.5rem] p-8 transition-all hover:bg-white hover:shadow-2xl border border-transparent hover:border-slate-100">

              {/* Image Comparison Container */}
              <div className="flex gap-4 mb-8">
                {/* Before Image */}
                <div className="relative w-1/2 overflow-hidden rounded-2xl">
                  <img src={item.beforeImg} alt="Before" className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-md uppercase font-bold">Before</span>
                </div>

                {/* After Image */}
                <div className="relative w-1/2 overflow-hidden rounded-2xl border-4 border-indigo-100 group-hover:border-indigo-500 transition-colors duration-500">
                  <img src={item.afterImg} alt="After" className="w-full h-64 object-cover" />
                  <span className="absolute bottom-2 left-2 bg-indigo-600 text-white text-[10px] px-2 py-1 rounded-md uppercase font-bold tracking-widest animate-pulse">After</span>
                </div>
              </div>

              {/* Story Content */}
              <div className="relative pt-6">
                <FaQuoteLeft className="absolute -top-2 -left-2 text-indigo-100 text-5xl" />
                <h3 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                  {item.name}'s Journey <FaArrowRight className="text-sm text-indigo-400" />
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 italic">
                  "{item.story}"
                </p>

                <div className="flex items-center justify-between border-t border-slate-200 pt-6">
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Adopted By</p>
                    <p className="text-indigo-600 font-bold">{item.adoptedBy}</p>
                  </div>
                  <button className="text-xs font-black uppercase tracking-tighter hover:text-indigo-600 transition-colors">
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