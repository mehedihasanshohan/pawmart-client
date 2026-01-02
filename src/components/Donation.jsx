import treat from "/pet-food.png";
import health from "/veterinary1.png";
import home from "/dog-house1.png";
import { FaHeart } from "react-icons/fa";

export default function Donation() {

  const donationOptions = [
    {
      id: 1,
      amount: 10,
      title: "Treat a Friend",
      impact: "Provides 1 week of nutritious meals for a shelter pet.",
      icon: treat,
      color: "from-sky-300 to-sky-800",
    },
    {
      id: 2,
      amount: 50,
      title: "Health Hero",
      impact: "Covers essential vaccinations and a medical check-up.",
      icon: health,
      color: "from-blue-400 to-blue-500",
      popular: true,
    },
    {
      id: 3,
      amount: 150,
      title: "Forever Home",
      impact: "Supports rescue operations and shelter maintenance.",
      icon: home,
      color: "from-purple-400 to-purple-500",
    },
  ];

  return (
    <section className="py-24 bg-base-200 text-base-content relative overflow-hidden transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Make a Difference
          </h2>
          <p className="opacity-70 max-w-xl mx-auto italic">
            Your small contribution can provide a second chance to a pet in need. Choose how you'd like to help today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {donationOptions.map((option) => (
            <div
              key={option.id}
              className={`relative bg-base-100 p-8 rounded-2xl shadow-xl border-2 transition-all duration-500 hover:-translate-y-4 ${
                option.popular ? "border-teal-500 scale-105" : "border-base-300"
              }`}
            >
              {option.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
                  Most Needed
                </span>
              )}

              <img className={`w-16 h-16 rounded-2xl bg-linear-to-br ${option.color} flex items-center justify-center text-3xl text-white mb-6 shadow-inner`}
                src={option.icon}
              />

              <h3 className="text-3xl font-bold mb-2">${option.amount}</h3>
              <h4 className="text-lg font-semibold opacity-80 mb-4">{option.title}</h4>
              <p className="text-sm mb-8 leading-relaxed italic border-l-4 border-orange-200 dark:border-orange-500 pl-4 opacity-70">
                {option.impact}
              </p>

              <button
                className="w-full py-4 rounded-md font-bold
                    bg-linear-to-r from-teal-400 via-teal-500 to-teal-600
                     hover:bg-linear-to-r hover:from-teal-600 hover:via-teal-500 hover:to-teal-400
                     transition-all flex items-center justify-center gap-2 group">
                Donate Now <FaHeart className="group-hover:animate-ping text-red-400" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}