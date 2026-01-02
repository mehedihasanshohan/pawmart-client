import { FaHeart, FaDog, FaUserFriends, FaStethoscope } from "react-icons/fa";

export default function StatsSection() {
  const stats = [
    { id: 1, icon: <FaDog />, count: "850+", label: "Pets Adopted" },
    { id: 2, icon: <FaHeart />, count: "120+", label: "Shelters Joined" },
    { id: 3, icon: <FaUserFriends />, count: "2.5k+", label: "Happy Families" },
    { id: 4, icon: <FaStethoscope />, count: "45+", label: "Expert Vets" },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item) => (
            <div key={item.id} className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow group border border-slate-100">
              <div className="text-4xl text-orange-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold text-slate-800">{item.count}</h3>
              <p className="text-slate-500 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}