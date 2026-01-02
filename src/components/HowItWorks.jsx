export default function HowItWorks() {
  const steps = [
    { title: "Search", desc: "Find your perfect match from our verified listings.", color: "bg-blue-100 text-blue-600" },
    { title: "Meet", desc: "Schedule a visit to bond with your future pet.", color: "bg-orange-100 text-orange-600" },
    { title: "Adopt", desc: "Complete the process and take your new friend home.", color: "bg-green-100 text-green-600" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif italic">How to Adopt?</h2>
        <p className="text-slate-500 mb-16">Your journey to a new best friend starts here</p>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-2xl font-bold mb-6 ring-8 ring-white shadow-lg`}>
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}