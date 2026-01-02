import { FaHeart, FaDog, FaUserFriends, FaStethoscope, FaHandsHelping } from "react-icons/fa";

export default function StatsSection() {
  const stats = [
    { id: 1, icon: <FaDog />, count: "850+", label: "Pets Adopted" },
    { id: 2, icon: <FaHeart />, count: "120+", label: "Shelters Joined" },
    { id: 3, icon: <FaUserFriends />, count: "2.5k+", label: "Happy Families" },
    { id: 4, icon: <FaStethoscope />, count: "45+", label: "Expert Vets" },
    { id: 5, icon: <FaHandsHelping />, count: "300+", label: "Rescue Missions" },
  ];

  return (
    <section className="py-20 bg-base-200 text-base-content">
      <div className="max-w-7xl mx-auto px-6">
         <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Pawmart Stats
          </h2>
          <p className="opacity-70 max-w-xl mx-auto italic mb-8">
            Discover the latest adorable pets and pet care products recently
            added.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5  gap-4 text-center">
          {stats.map((item) => (
            <div key={item.id} className="p-8 bg-base-100 rounded-3xl shadow-xs hover:shadow-md transition-shadow group border border-slate-100">
              <div className="text-4xl text-teal-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold">{item.count}</h3>
              <p className="opacity-80 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}