import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  { q: "Is there any adoption fee?", a: "Yes, a minimal fee is charged to cover the pet's initial medical costs and vaccinations." },
  { q: "Can I return a pet if it doesn't fit in?", a: "We offer a 2-week trial period to ensure both you and the pet are happy together." },
  { q: "How can I prepare my home?", a: "We provide a free checklist and basic training tips once your application is approved." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-base-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-500 rounded-md overflow-hidden bg-white">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left  transition-colors"
              >
                <span className="font-semibold text-slate-800">{faq.q}</span>
                <FaChevronDown className={`transition-transform duration-300 text-teal-600 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 p-6 pt-0 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-slate-600 text-sm italic border-t border-slate-700 pt-4">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}