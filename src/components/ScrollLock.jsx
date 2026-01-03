import { ScrollStack, ScrollStackItem } from "./ScrollStack";

const ScrollLock = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    { id: 1, title: "Step 1", text: "Find a pet", color: "bg-blue-500" },
    { id: 2, title: "Step 2", text: "Meet & Greet", color: "bg-green-500" },
    { id: 3, title: "Step 3", text: "Adoption", color: "bg-purple-500" },
    { id: 4, title: "Step 4", text: "Support", color: "bg-orange-500" },
  ];

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const index = Math.min(
        cards.length - 1,
        Math.floor(scrollY / window.innerHeight)
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ScrollStack>
      {cards.map((card, index) => (
        <ScrollStackItem
          key={card.id}
          index={index}
          activeIndex={activeIndex}
        >
          <div className={`w-16 h-16 ${card.color} text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4`}>
            {index + 1}
          </div>
          <h2 className="text-4xl font-bold mb-4">{card.title}</h2>
          <p className="text-xl text-gray-600">{card.text}</p>
        </ScrollStackItem>
      ))}
    </ScrollStack>
  );
};

export default ScrollLock;
