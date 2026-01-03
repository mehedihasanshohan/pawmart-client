
export const ScrollStack = ({ children }) => {
  return (
    <div className="relative h-[400vh] bg-gray-100">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export const ScrollStackItem = ({ children, index, activeIndex }) => {
  const offset = index * 60;

  return (
    <div
      className="absolute w-full max-w-3xl transition-all duration-700 ease-out"
      style={{
        transform:
          index <= activeIndex
            ? `translateY(${offset}px) scale(1)`
            : `translateY(200px) scale(0.9)`,
        opacity: index <= activeIndex ? 1 : 0,
        zIndex: 50 - index,
      }}
    >
      <div className="bg-white h-[400px] rounded-3xl shadow-2xl p-10 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
