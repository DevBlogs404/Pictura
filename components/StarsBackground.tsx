import { memo } from "react";

const StarsBackground = () => {
  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden">
      <div className="h-screen w-screen bg-black">
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1 h-1 bg-white rounded-full animate-star"
            style={{
              top: `${Math.random() * 100}%`,
              right: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default memo(StarsBackground);
