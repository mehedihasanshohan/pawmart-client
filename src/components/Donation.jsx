import { FaBone, FaSyringe, FaHome, FaHeart } from "react-icons/fa";

export default function Donation() {
  const donationOptions = [
    {
      id: 1,
      amount: 10,
      title: "Treat a Friend",
      impact: "Provides 1 week of nutritious meals for a shelter pet.",
      icon: <FaBone />,
      color: "from-orange-400 to-orange-500",
    },
    {
      id: 2,
      amount: 50,
      title: "Health Hero",
      impact: "Covers essential vaccinations and a medical check-up.",
      icon: <FaSyringe />,
      color: "from-blue-400 to-blue-500",
      popular: true,
    },
    {
      id: 3,
      amount: 150,
      title: "Forever Home",
      impact: "Supports rescue operations and shelter maintenance.",
      icon: <FaHome />,
      color: "from-purple-400 to-purple-500",
    },
  ];

  return (
    <section className="py-24 bg-[#fdf8f4] relative overflow-hidden">
      {/* Decorative Paws (Background) */}
      <div className="absolute top-10 left-10 text-orange-100 text-9xl -rotate-12 opacity-50 select-none">🐾</div>
      <div className="absolute bottom-10 right-10 text-orange-100 text-9xl rotate-12 opacity-50 select-none">🐾</div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif">
            Make a <span className="text-orange-500 underline decoration-wavy underline-offset-8">Difference</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg leading-relaxed">
            Your small contribution can provide a second chance to a pet in need. Choose how you'd like to help today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {donationOptions.map((option) => (
            <div
              key={option.id}
              className={`relative bg-white p-8 rounded-[2.5rem] shadow-xl border-2 transition-all duration-500 hover:-translate-y-4 ${
                option.popular ? "border-orange-500 scale-105" : "border-transparent"
              }`}
            >
              {option.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
                  Most Needed
                </span>
              )}

              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center text-3xl text-white mb-6 shadow-inner`}>
                {option.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-2">${option.amount}</h3>
              <h4 className="text-lg font-semibold text-slate-700 mb-4">{option.title}</h4>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed italic border-l-4 border-orange-200 pl-4">
                {option.impact}
              </p>

              <button className="w-full py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-300 transition-all flex items-center justify-center gap-2 group">
                Donate Now <FaHeart className="group-hover:animate-ping text-orange-400" />
              </button>
            </div>
          ))}
        </div>

        {/* Custom Amount Section */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm mb-4 italic">Or enter a custom amount</p>
          <div className="inline-flex items-center bg-white border-2 border-slate-200 rounded-full p-2 pl-6 focus-within:border-orange-500 transition-all shadow-md">
            <span className="text-slate-400 font-bold">$</span>
            <input
              type="number"
              placeholder="Custom"
              className="w-24 px-2 bg-transparent outline-none text-slate-800 font-bold"
            />
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors">
              Give
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}